import React, { createContext, useState, useEffect } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data);
            })
            .catch(error => console.error('Erro ao buscar vídeos:', error));
    }, []);

    const adicionarVideo = (video) => {
        const novoVideo = { ...video, id: (videos.length + 1).toString() };

        // Atualizar o db.json através de uma chamada de API
        fetch('http://localhost:5000/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoVideo),
        })
            .then(response => response.json())
            .then(data => {
                setVideos(videosAnteriores => [...videosAnteriores, data]);
                alert('Vídeo adicionado com sucesso!');
            })
            .catch(error => console.error('Erro ao adicionar vídeo:', error));
    };

    const removerVideo = (id) => {
        fetch(`http://localhost:5000/videos/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setVideos(videosAnteriores => videosAnteriores.filter(video => video.id !== id));
                alert('Vídeo deletado com sucesso!');
            })
            .catch(error => console.error('Erro ao remover vídeo:', error));
    };

    const editarVideo = (videoEditado) => {
        const videoId = videoEditado.id;

        if (!videoId) {
            console.error('ID do vídeo não encontrado:', videoEditado);
            return;
        }

        fetch(`http://localhost:5000/videos/${videoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(videoEditado),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao editar vídeo: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setVideos(videosAnteriores => videosAnteriores.map(video => video.id === data.id ? data : video));
                alert('Vídeo editado com sucesso!');
            })
            .catch(error => console.error('Erro ao editar vídeo:', error));
    }

    const categorias = [
        {
            id: 1,
            categoriaNome: 'Animação',
            cor: 'var(--cor-buttonAnimacao)'
        },
        {
            id: 2,
            categoriaNome: 'Ficção Científica',
            cor: 'var(--cor-buttonFiccao)'
        },
        {
            id: 3,
            categoriaNome: 'Aventura',
            cor: 'var(--cor-buttonAventura)'
        }
    ];

    return (
        <VideoContext.Provider value={{ videos, adicionarVideo, removerVideo, editarVideo, categorias }}>
            {children}
        </VideoContext.Provider>
    );
};

export default VideoContext;