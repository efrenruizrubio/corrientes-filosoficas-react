import styles from './DraggableContainer.module.scss';

export const DraggableContainer = ({ content }) => {
  return (
    <div className={styles.draggable}>
      <p className={styles.draggable_content}>{content}</p>
    </div>
  );
};
