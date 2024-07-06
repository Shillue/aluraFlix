import Cabecalho from '../../components/Cabecalho';
import styles from './NovoVideo.module.css';
import Rodape from '../../components/Rodape';
import Formulario from '../../components/Formulario';
import { useContext } from 'react';
import VideoContext from '../../context/VideoContext';

function NovoVideo() {
    const { adicionarVideo, categorias } = useContext(VideoContext);

    return (
        <>                <Cabecalho />
            <div className={styles.container}>
                <h1>Novo Vídeo</h1>
                <p>Complete o formulário para criar um novo car de vídeo</p>
            </div>


            <Formulario
                modo="novo"
                categorias={categorias.map(categoria => categoria.categoriaNome)}
                aoVideoCadastrado={adicionarVideo}
            />

            <Rodape />
        </>
    )
}

export default NovoVideo;