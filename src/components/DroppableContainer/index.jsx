import { Title } from '../index';
import styles from './DroppableContainer.module.scss';
const titles = [
  { name: 'Definición', id: 'concept' },
  { name: 'Representante', id: 'image' },
  { name: 'Método', id: 'method' },
  { name: 'Tésis', id: 'thesis' },
];

export const DroppableContainer = ({ title, movement }) => {
  return (
    <article className={styles.main}>
      <Title
        as='h3'
        className={styles.main_title}
      >
        {movement.value}
      </Title>
      <div className={styles.main_container}>
        {titles.map((title) => (
          <div
            key={title.id}
            className={styles.main_container_wrapper}
          >
            <Title
              as='h4'
              className={styles.main_container_wrapper_title}
            >
              {title.name}
            </Title>
            <div
              className={`${styles.main_container_wrapper_droppable} ${movement.id}-${title.id}`}
            ></div>
          </div>
        ))}
      </div>
    </article>
  );
};
