import { useState } from 'react';
import { Title, DraggableContainer, DroppableContainer } from '../index';
import styles from './CollapsibleContainer.module.scss';

export const CollapsibleContainer = ({ className = '', movement }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);
  return (
    <section className={styles.section}>
      <Title
        className={`${styles.section_title} ${className}`}
        collapse={toggleCollapse}
      >
        {movement.name}
      </Title>
      {!isCollapsed &&
        (movement.id === 1
          ? movement.content.map((movement) => (
              <DroppableContainer
                key={movement.id}
                movement={movement}
              />
            ))
          : movement.content.map((movement) => (
              <DraggableContainer
                key={movement.id}
                content={movement.value}
              />
            )))}
    </section>
  );
};
