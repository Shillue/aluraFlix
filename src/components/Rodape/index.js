import styles from './Rodape.module.css';
import Logo from 'components/Logo';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Logo/>
            <h2>Desenvolvido por Shilluê</h2>
        </footer>
    )
}

export default Rodape;