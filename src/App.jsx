import { Header, Title, CollapsibleContainer } from './components';
import styles from './styles/App.module.scss';
import { shuffledMovements as movements } from './utils/movements';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Title className={styles.main_title}>Instrucciones</Title>
        <p className={styles.main_text}>
          Mantén presionado y suelta las respuestas en sus contenedores
          respectivos, al soltar todos los elementos aparecerá un botón en la
          parte de abajo para comprobar las respuestas.
        </p>
        {movements.map((movement) => (
          <CollapsibleContainer
            key={movement.id}
            movement={movement}
          />
        ))}
      </main>
    </>
  );
}

export default App;
