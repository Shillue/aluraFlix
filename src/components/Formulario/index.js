import CampoTexto from 'components/CampoTexto';
import styles from './Formulario.module.css';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useEffect, useState } from 'react';

function Formulario({ modo, categorias, aoVideoCadastrado, video }) {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [linkImagem, setLinkImagem] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [erros, setErros] = useState({
        titulo: false,
        categoria: false,
        linkImagem: false,
        linkVideo: false,
        descricao: false,
    });

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo);
            setCategoria(video.categoriaNome);
            setLinkImagem(video.linkImagem);
            setLinkVideo(video.linkVideo);
            setDescricao(video.descricao);
        }
    }, [video]);

    const getEmbedUrl = (linkVideo) => {
        if (!linkVideo) return '';
        let videoId = '';

        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
        const match = linkVideo.match(youtubeRegex);

        if (match && match[1]) {
            videoId = match[1];
        } else {
            console.warn('Link de vídeo não reconhecido:', linkVideo);
            return '';
        }

        return `https://www.youtube.com/embed/${videoId}`;
    };

    const aoGuardar = (evento) => {
        evento.preventDefault();

        const embedUrl = getEmbedUrl(linkVideo);
        if (!embedUrl) {
            alert('URL do vídeo inválida. Por favor, verifique a URL do vídeo.');
            return;
        }

        const novosErros = {
            titulo: !titulo,
            categoria: !categoria,
            linkImagem: !linkImagem,
            linkVideo: !linkVideo,
            descricao: !descricao,
        };

        if (Object.values(novosErros).some((erro) => erro)) {
            setErros(novosErros);
        } else {
            setErros({
                titulo: false,
                categoria: false,
                linkImagem: false,
                linkVideo: false,
                descricao: false,
            });
            const videoData = {
                id: video ? video.id : undefined,
                titulo,
                categoriaNome: categoria,
                linkImagem,
                linkVideo: embedUrl,
                descricao,
            };
            aoVideoCadastrado(videoData);
            if(modo === 'novo'){
                aoLimpar()
            }
        }
    };

    const aoLimpar = () => {
        limparCampos();
        setErros({
            titulo: false,
            categoria: false,
            linkImagem: false,
            linkVideo: false,
            descricao: false,
        });
    };

    const limparCampos = () => {
        setTitulo('');
        setCategoria('');
        setLinkImagem('');
        setLinkVideo('');
        setDescricao('');
    };

    const backgroundColor = video ? 'var(--cor-formularioEditar)' : 'var(--cor-fundo)';

    return (
        <section className={styles.formulario}>
            <form onSubmit={aoGuardar} className={video ? styles.formularioEditar : styles.formularioNovoVideo}>
                <h2 className={video ? styles.editarTitulo : styles.adicionarTitulo}>
                    {video ? 'Editar' : 'Criar'} Card
                </h2>
                <div className={styles.linha}>
                    <CampoTexto
                        label="Titulo"
                        placeholder="Digite o titulo"
                        valor={titulo}
                        aoAlterado={setTitulo}
                        erro={erros.titulo}
                        backgroundColor={backgroundColor}
                    />
                    <ListaSuspensa
                        label="Categoria"
                        itens={categorias}
                        valor={categoria}
                        aoAlterado={setCategoria}
                        erro={erros.categoria}
                        backgroundColor={backgroundColor}
                    />
                </div>
                <div className={styles.linha}>
                    <CampoTexto
                        obrigatorio={true}
                        label="Imagem"
                        placeholder="Digite o link da imagem"
                        valor={linkImagem}
                        aoAlterado={setLinkImagem}
                        erro={erros.linkImagem}
                        backgroundColor={backgroundColor}
                    />
                    <CampoTexto
                        label="Vídeo"
                        placeholder="Digite o link do video"
                        valor={linkVideo}
                        aoAlterado={setLinkVideo}
                        erro={erros.linkVideo}
                        backgroundColor={backgroundColor}
                    />
                </div>
                <div className={styles.linhaDescricao}>
                    <CampoTexto
                        label="Descrição"
                        placeholder="Digite a descrição"
                        valor={descricao}
                        aoAlterado={setDescricao}
                        erro={erros.descricao}
                        multilinha={true}
                        backgroundColor={backgroundColor}
                    />
                </div>
                <div className={styles.botaoContainer}>
                    <Botao 
                        type="submit" 
                        backgroundColor={backgroundColor}
                    >
                        Guardar
                    </Botao>
                    <Botao 
                        type="button" 
                        onClick={aoLimpar} 
                        backgroundColor={backgroundColor}
                    >
                        Limpar
                    </Botao>
                </div>
            </form>
        </section>
    );
}

export default Formulario;