import Formulario from 'components/Formulario';
import styles from './ModelEditar.module.css'
import cross from './cross.png';

const ModalEditar = ({ video, aoFechar, aoVideoEditado, categorias }) => {
    return (
        <>
            {video &&
                <>
                    <div className={styles.overlay} onClick={aoFechar}/>
                        <dialog open={!!video} onClose={aoFechar} className={styles.modal}>
                            <Formulario 
                                modo="editar" 
                                video={video} 
                                aoVideoCadastrado={(videoEditado) => {
                                    aoVideoEditado (videoEditado)
                                    aoFechar();
                                }} 
                                categorias={categorias.map(categoria => categoria.categoriaNome)}
                                
                            />
                            <form method="dialog">
                                <button 
                                    formMethod='dialog' 
                                    className={styles.buttonFechar} 
                                    onClick={aoFechar}
                                >
                                    <img src={cross} alt='fechar'/>
                                </button>
                            </form>
                        </dialog>
                
                </>
            }
        </>
    )
}

export default ModalEditar;