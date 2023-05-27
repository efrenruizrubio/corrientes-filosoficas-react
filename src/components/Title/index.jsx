import styles from './Title.module.scss';

export const Title = ({
	as: Tag = 'h2',
	children,
	className = '',
	collapse,
}) => {
	return (
		<Tag className={`${styles.title} ${className}`} onClick={collapse}>
			{children}
		</Tag>
	);
};
