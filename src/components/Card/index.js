import styles from './Card.module.css';
import iconeEditar from './Editar.png';
import iconeLixo from './Lixo.png';

function Card({ id, titulo, linkImagem, video, categoria, cor, aoDeletar, editar = false, aoEditarSolicitado, aoSelecionar }) {
    const handleImageClick = () =>{
        aoSelecionar(id);
    }
    return (
        <div className={styles.container} style={{borderColor:cor}}>
            <div className={styles.capa} onClick={handleImageClick} style={{borderBottomColor:cor}}>
                <img src={linkImagem} alt={titulo} />
            </div>
            <div className={styles.rodape}>
                <div className={styles.icones} onClick={aoDeletar} >
                    <img src={iconeLixo} alt='Deletar vídeo' className={styles.icone} /> 
                    <p>Deletar</p>
                </div>
                <div className={styles.icones} onClick={() => aoEditarSolicitado(video)}>
                    {!editar && 
                    <img src={iconeEditar} alt='Editar vídeo' className={styles.icone} aria-hidden={editar} /> 
                    }
                    <p>Editar</p>
                </div>
            </div>
        </div>
    )
}

export default Card;