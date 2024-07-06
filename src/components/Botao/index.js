import styles from './Botao.module.css';

function Botao({type="button", onClick, children, backgroundColor}) {
    return(
        <button 
            type={type}
            onClick={onClick}
            className={styles.botao } 
            style={{backgroundColor}}
        >
            {children}
        </button>
    )
}

export default Botao;