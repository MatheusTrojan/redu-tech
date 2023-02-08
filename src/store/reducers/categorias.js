import { createSlice } from "@reduxjs/toolkit";

import frontThumb from "assets/categorias/front-end.png"
import devOpsThumb from "assets/categorias/devops.png"
import UxThumb from "assets/categorias/ux-design.png"
import dataScienceThumb from "assets/categorias/data-science.png"
import mobileThumb from "assets/categorias/mobile.png"

const initialState = [{ 
        nome: 'Front-end',
        thumbnail: frontThumb,
        id: 'frontend',
        descricao: 'Desenvolva experiências web incríveis com HTML, CSS e JavaScript, e se aprofunde nos principais frameworks do mercado!'
      }, {
        nome: 'DevOps',
        thumbnail: devOpsThumb,
        id: 'devops',
        descricao: 'Explore a Internet das Coisas, desenvolva infraestruturas completas e crie um pipeline de construção de software.'
      }, {
        nome: 'UX & Design',
        thumbnail: UxThumb,
        id: 'uxdesign',
        descricao: 'O universo de UX & Design é gigante. Crie diferentes layouts para plataformas digitais, edite vídeos e desenvolva animações.'
      }, {
        nome: 'Data Science',
        thumbnail: dataScienceThumb,
        id: 'datascience',
        descricao: 'Descubra as diferentes possibilidades de análise de dados, do Excel ao Python, e mergulhe em frameworks e bibliotecas.'
      }, {
        nome: 'Mobile',
        thumbnail: mobileThumb,
        id: 'mobile',
        descricao: 'Desenvolva aplicativos móveis, nativos ou multiplataforma, para as principais plataformas, smartphones e tablets.'
    }];

const categoriaSlice = createSlice({
    name: "categorias",
    initialState,
});

export default categoriaSlice.reducer;