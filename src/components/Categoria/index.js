import Card from 'components/Card';
import styles from './Categoria.module.css';

function Categoria({categoria, cor, videos, aoDeletar, aoVideoEditado, aoSelecionar}) {
    return (
        <section className={styles.categoria}>
            <button style={{ backgroundColor: cor }}>{categoria}</button>
            <div className={styles.containerCards}>
                {videos.map((video) =>( 
                         <Card 
                            key={video.id} 
                            id={video.id} 
                            titulo={video.titulo} 
                            linkImagem={video.linkImagem} 
                            cor={cor}
                            aoDeletar={() => aoDeletar(video.id)}
                            aoEditarSolicitado={()=>aoVideoEditado(video)}
                            aoSelecionar={aoSelecionar}
                        />
                    )
                )}
            </div>
        </section>
    )
}

export default Categoria;