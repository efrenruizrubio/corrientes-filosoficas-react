import { Header, Title, CollapsibleContainer } from './components';

import { titles } from './utils/movements';
import styles from './styles/App.module.scss';

function App() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Title className={styles.main_title}>Instrucciones</Title>
				<p className={styles.main_text}>
					Mantén presionado y suelta las respuestas en sus
					contenedores respectivos, al soltar todos los elementos
					aparecerá un botón en la parte de abajo para comprobar las
					respuestas.
				</p>
				{titles.map((title) => (
					<CollapsibleContainer
						key={title.name}
						name={title.name}
						id={title.id}
					/>
				))}
			</main>
		</>
	);
}

export default App;
