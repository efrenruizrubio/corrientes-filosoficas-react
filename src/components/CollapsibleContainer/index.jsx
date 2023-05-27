import { useState } from 'react';
import { movementContainers } from '../../utils/movements';
import { Title, DraggableContainer, DroppableContainer } from '../index';
import styles from './CollapsibleContainer.module.scss';

export const CollapsibleContainer = ({ className = '', name, id }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const toggleCollapse = () => setIsCollapsed((prev) => !prev);
	return (
		<section className={styles.section}>
			<Title
				className={`${styles.section_title} ${className}`}
				collapse={toggleCollapse}
			>
				{name}
			</Title>
			{!isCollapsed &&
				(id === 1 ? (
					<DroppableContainer />
				) : (
					movementContainers.map((movement) => (
						<DraggableContainer
							key={movement.id}
							className={movement.className}
						/>
					))
				))}
		</section>
	);
};
