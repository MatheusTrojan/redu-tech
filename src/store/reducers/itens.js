import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import htmlLogo from "assets/itens/html.png"
import cssLogo from "assets/itens/css-3.png"
import javascriptLogo from "assets/itens/javascript.png"
import bootstrapLogo from "assets/itens/bootstrap.png"
import sassLogo from "assets/itens/sass.png"
import reactLogo from "assets/itens/react.png"
import awsLogo from "assets/itens/aws.png"
import apacheLogo from "assets/itens/apache.png"
import ciberSegLogo from "assets/itens/cyber-security.png"
import linuxLogo from "assets/itens/linux.png"
import segDefLogo from "assets/itens/seg-def.png"
import segOfLogo from "assets/itens/seg-of.png"
import adobeLogo from "assets/itens/adobe.png"
import inDesignLogo from "assets/itens/indesign.png"
import photoshopLogo from "assets/itens/photoshop.png"
import figmaLogo from "assets/itens/figma.png"
import canvaLogo from "assets/itens/canva.png"
import premiereLogo from "assets/itens/premiere.png"
import excelLogo from "assets/itens/excel.png"
import machineLogo from "assets/itens/machine-learning.png"
import iosLogo from "assets/itens/ios.png"
import androidLogo from "assets/itens/android.png"
import flutterLogo from "assets/itens/flutter.png"

const initialState = [{
    titulo: 'HTML5',
    descricao: 'HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.',
    foto: htmlLogo,
    favorito: false,
    preco: 19.9,
    id: uuid(),
    categoria: 'frontend'
  },
  {
    titulo: 'CSS3',
    descricao: 'CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo.',
    foto: cssLogo,
    favorito: false,
    preco: 20,
    id: uuid(),
    categoria: 'frontend'
  },
  {
    titulo: 'JavaScript',
    descricao: 'JavaScript é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve.',
    foto: javascriptLogo,
    favorito: false,
    preco: 27.5,
    id: uuid(),
    categoria: 'frontend'
  },
  {
    titulo: 'Bootstrap',
    descricao: 'Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.',
    foto: bootstrapLogo,
    favorito: false,
    preco: 30,
    id: uuid(),
    categoria: 'frontend'
  },
  {
    titulo: 'Sass',
    descricao: 'O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível.',
    foto: sassLogo,
    favorito: false,
    preco: 32.5,
    id: uuid(),
    categoria: 'frontend'
  },
  {
    titulo: 'ReactJS',
    descricao: 'O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário.',
    foto: reactLogo,
    favorito: false,
    preco: 49.9,
    id: uuid(),
    categoria: 'frontend'
  },
  {
    titulo: 'ApacheKafka',
    descricao: 'Aprenda a usar a plataforma de mensageira tipicamente usada em uma arquitetura de Microsserviços.',
    foto: apacheLogo,
    favorito: false,
    preco: 39.9,
    id: uuid(),
    categoria: 'devops'
  },
  {
    titulo: 'AWS',
    descricao: 'Prepare-se para uma das certificações mais procuradas no mercado. Seja reconhecido pelos seus conhecimentos nos principais serviços da AWS.',
    foto: awsLogo,
    favorito: false,
    preco: 34.9,
    id: uuid(),
    categoria: 'devops'
  },
  {
    titulo: 'Cibersegurança',
    descricao: 'Manter aplicações seguras na Web é uma tarefa bem difícil atualmente. Existem diversos ataques que podem atingi-las e, com o passar do tempo, vulnerabilidades vão surgindo e sendo descobertas.',
    foto: ciberSegLogo,
    favorito: false,
    preco: 29.9,
    id: uuid(),
    categoria: 'devops'
  },
  {
    titulo: 'Linux',
    descricao: 'Comece a usar Linux de forma rápida e prática.',
    foto: linuxLogo,
    favorito: false,
    preco: 24.9,
    id: uuid(),
    categoria: 'devops'
  },
  {
    titulo: 'Segurança Defensiva',
    descricao: 'Aprenda como proteger aplicações de diferentes ataques e ameaças!.',
    foto: segDefLogo,
    favorito: false,
    preco: 31.9,
    id: uuid(),
    categoria: 'devops'
  },
  {
    titulo: 'Segurança Defensiva',
    descricao: 'Aprenda diferentes ataques e ameaças de aplicações web!',
    foto: segOfLogo,
    favorito: false,
    preco: 31.9,
    id: uuid(),
    categoria: 'devops'
  },
  {
    titulo: 'Adobe Mobile',
    descricao: 'Já imaginou tratar imagens, editar vídeos e desenhar logos sem precisar de um computador? Com os aplicativos na versão mobile da Adobe, você vai expandir o seu universo criativo e dar vida às suas ideias em qualquer lugar que estiver!',
    foto: adobeLogo,
    favorito: false,
    preco: 19.9,
    id: uuid(),
    categoria: 'uxdesign'
  },
  {
    titulo: 'inDesign',
    descricao: 'Aprenda os principais conceitos e ferramentas para executar projetos de diagramação no Adobe InDesign.',
    foto: inDesignLogo,
    favorito: false,
    preco: 24.9,
    id: uuid(),
    categoria: 'uxdesign'
  },
  {
    titulo: 'Photoshop',
    descricao: 'Aprenda as principais ferramentas e conceitos para criar peças gráficas no Photoshop.',
    foto: photoshopLogo,
    favorito: false,
    preco: 27.5,
    id: uuid(),
    categoria: 'uxdesign'
  },
  {
    titulo: 'Premiere',
    descricao: 'Aprenda produção de vídeo com a ferramenta Adobe Premiere.',
    foto: premiereLogo,
    favorito: false,
    preco: 27.5,
    id: uuid(),
    categoria: 'uxdesign'
  },
  {
    titulo: 'Figma',
    descricao: 'Aprenda a criar interfaces para produtos digitais no Figma, trazendo soluções inteligentes e inovadoras.',
    foto: figmaLogo,
    favorito: false,
    preco: 27.5,
    id: uuid(),
    categoria: 'uxdesign'
  },
  {
    titulo: 'Canva',
    descricao: 'Design simples e acessível.',
    foto: canvaLogo,
    favorito: false,
    preco: 27.5,
    id: uuid(),
    categoria: 'uxdesign'
  },
  {
    titulo: 'Excel',
    descricao: 'Domine a principal ferramenta de edição de planilhas e conheça as principais funções do mercado para aplicar no seu dia a dia.',
    foto: excelLogo,
    favorito: false,
    preco: 18.9,
    id: uuid(),
    categoria: 'datascience'
  },
  {
    titulo: 'Machine Learning',
    descricao: 'Aprenda a tecnologia que não para de crescer!',
    foto: machineLogo,
    favorito: false,
    preco: 18.9,
    id: uuid(),
    categoria: 'datascience'
  },
  {
    titulo: 'iOS',
    descricao: 'Crie aplicativos nativos para iOS com Swift.',
    foto: iosLogo,
    favorito: false,
    preco: 36.9,
    id: uuid(),
    categoria: 'mobile'
  },
  {
    titulo: 'Android',
    descricao: 'Programe na principal plataforma Mobile do mundo.',
    foto: androidLogo,
    favorito: false,
    preco: 36.9,
    id: uuid(),
    categoria: 'mobile'
  },
  {
    titulo: 'Flutter',
    descricao: 'Aprenda a criar aplicativos multiplataforma com o Flutter.',
    foto: flutterLogo,
    favorito: false,
    preco: 29.9,
    id: uuid(),
    categoria: 'mobile'
  }
];

const itensSlice = createSlice({
    name: "itens",
    initialState,
    reducers: {
      mudarFavorito: (state, { payload }) => {
        state = state.map(item => {
          if(item.id === payload) item.favorito = !item.favorito;
          return item;
        })
      }
    }
});

export const { mudarFavorito } = itensSlice.actions

export default itensSlice.reducer;