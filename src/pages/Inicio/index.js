import React, { useContext, useRef, useState, useEffect } from 'react';
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';
import Banner from '../../components/Banner';
import Categoria from '../../components/Categoria';
import ModalEditar from '../../components/ModalEditar';
import VideoContext from '../../context/VideoContext';
import styles from './Inicio.module.css'

function Inicio() {
    const { videos, removerVideo, editarVideo, categorias } = useContext(VideoContext);
    const [videoParaEditar, setVideoParaEditar] = useState(null);
    const [videoSelecionado, setVideoSelecionado] = useState(null);
    const bannerRef = useRef(null);

    useEffect(() => {
        const videoInicial = videos.find(video => video.categoriaNome === 'Animação');
        if (videoInicial) {
            const categoria = categorias.find(cat => cat.categoriaNome === videoInicial.categoriaNome);
            setVideoSelecionado({ ...videoInicial, categoriaCor: categoria.cor });
        }
    }, [videos, categorias]);

    const selecionarVideo = (id) => {
        const video = videos.find(video => video.id === id);
        if (video) {
            const categoria = categorias.find(cat => cat.categoriaNome === video.categoriaNome);
            setVideoSelecionado({ ...video, categoriaCor: categoria.cor });
            if (bannerRef.current) {
                bannerRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <Cabecalho />
            {videoSelecionado && <Banner ref={bannerRef} video={videoSelecionado} />}
            <div className={styles.container}>

                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria.categoriaNome}
                        cor={categoria.cor}
                        videos={videos.filter(video => video.categoriaNome === categoria.categoriaNome)}
                        aoDeletar={removerVideo}
                        aoVideoEditado={setVideoParaEditar}
                        aoSelecionar={selecionarVideo}
                    />
                ))}

                <ModalEditar
                    video={videoParaEditar}
                    aoFechar={() => setVideoParaEditar(null)}
                    aoVideoEditado={(videoEditado) => {
                        editarVideo(videoEditado);
                        setVideoParaEditar(null);
                    }}
                    categorias={categorias}
                />
            </div>

            <Rodape />
        </>
    );
}

export default Inicio;