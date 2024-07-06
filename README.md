# AluraFlix
 Alura Challenge - Desafio do programa "ONE - Oracle Next Education" da Oracle em parceria com a Alura.

 # Algumas Tecnologias Utilizadas
![HTML5](https://img.shields.io/badge/HTML-000?style=for-the-badge&logo=html5&logoColor=30A3DC)
![CSS3](https://img.shields.io/badge/CSS3-000?style=for-the-badge&logo=css3&logoColor=E94D5F)
![JavaScript](https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript&logoColor=30A3DC)
![React](https://img.shields.io/badge/React-000?style=for-the-badge&logo=react&logoColor=8A2BE2)

# Descrição
- Possui duas páginas a Home e Novo Vídeo.
- A página Home tem os vídeos cadastrados no db.json com as funcionalidade de editar e deletar os cards dos vídeos.
- Ao Clicar em um cad de vídeo na lista, será exibido na banner da Home.
- A página Novo Vídeo tem um formulário para adicionar um novo vídeo.

# Pré-visualização
![AluraFlix pag 1 1](https://github.com/Shillue/aluraFlix/assets/86475008/9570cbd8-bd49-4898-bfea-89f01c38e7bd)
![AluraFlix pag 1 2](https://github.com/Shillue/aluraFlix/assets/86475008/9a8ad24b-ded8-4633-aafd-568ba437f418)
![AluraFlix pag 2](https://github.com/Shillue/aluraFlix/assets/86475008/737407f6-f8a1-4ceb-add0-fdacd2511b36)


# Configuração

## Pré-requisitos
Antes de começar, você precisará ter os seguintes softwares instalados no seu computador:
- Node.js e npm (Node Package Manager): Você pode baixar e instalar a partir do site oficial Node.js. A instalação do Node.js também incluirá o npm.
- JSON Server: Um servidor fake REST API que será usado para simular uma API para o seu projeto. Você pode instalá-lo globalmente usando npm:
 npm install -g json-server

## Passos para Configuração e Instalação
- Clone o repositório do projeto:
git clone https://github.com/Shillue/aluraFlix.git
- Navegue para o diretório do projeto clonado:
cd seu-repositorio
- Instale as dependências do projeto: No diretório raiz do projeto, execute o seguinte comando para instalar todas as dependências necessárias:
npm install
- Inicie o JSON Server: No diretório raiz do projeto, execute o comando:
json-server --watch src/json/db.json --port 5000
- Inicie o projeto React: Em uma nova aba ou janela do terminal, inicie o servidor de desenvolvimento do React:
npm start

