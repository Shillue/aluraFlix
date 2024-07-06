import styles from './ListaSuspensa.module.css';

function ListaSuspensa({label, itens, valor, aoAlterado, erro, backgroundColor}) {
    return (
        <div className={`${styles.listaSuspensa} ${erro ? styles.erro: ''}`}>
            <label>{label}</label>
            <select
                onChange={evento => aoAlterado(evento.target.value)}
                value={valor}
                style={{backgroundColor}}
            >
                <option value="">{erro ? `É obrigatorio Selecionar uma categoria`: `Selecione uma categoria`}</option>
                {itens.map((item, index )=> <option key={index} value={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;