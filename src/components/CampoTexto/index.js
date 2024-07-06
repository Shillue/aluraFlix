import styles from './CampoTexto.module.css';

function CampoTexto({ label, placeholder, valor, aoAlterado, erro, multilinha, backgroundColor }) {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    };

    return (
        <div className={styles.campoTexto}>
            <label>{label}</label>
            {multilinha ? (
                <textarea
                    className={erro ? styles.erro : ''}
                    value={valor}
                    onChange={aoDigitado}
                    placeholder={erro ? `${placeholder} é obrigatório` : placeholder}
                    rows="4"
                    style={{backgroundColor}}
                />
            ) : (
                <input
                    className={erro ? styles.erro : ''}
                    value={valor}
                    onChange={aoDigitado}
                    placeholder={erro ? `${placeholder} é obrigatório` : placeholder}
                    style={{backgroundColor}}
                />
            )}
        </div>
    )
}

export default CampoTexto