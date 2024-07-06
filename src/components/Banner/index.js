import { forwardRef } from 'react';
import styles from './Banner.module.css';

const Banner = forwardRef(({video}, ref) => {

    if (!video) {
        return <div className={styles.capa} style={{ backgroundImage: `url('/imagem/Front-End.jpg')` }}></div>;
    }

    return (
        <div ref={ref} className={styles.capa} style={{ backgroundImage: `url('${video.linkImagem}')` }}>
            <div className={styles.elementos}>
                <div className={styles.elementoTextual}>
                    <button style={{ backgroundColor: video.categoriaCor}} className={styles.button}>{video.categoriaNome}</button>
                    <h1>{video.titulo}</h1>
                    <p>{video.descricao}</p>
                </div>
                <div className={styles.elementoVideo}>
                    <iframe
                        style={{borderColor:video.categoriaCor}}
                        width="360"
                        height="260"
                        src={video.linkVideo}
                        title={video.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
})

export default Banner;