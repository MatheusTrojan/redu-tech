import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = [{
    titulo: 'Assistente virtual',
    descricao: 'Conheça nosso smart speaker de maior sucesso ainda melhor. O novo design de áudio com direcionamento frontal (1 speaker de 1,6") garante mais graves e um som completo.',
    foto: "foto1",
    favorito: false,
    preco: 285,
    id: uuid(),
    categoria: 'frontend'
  }];

const itensSlice = createSlice({
    name: "itens",
    initialState,
});

export default itensSlice.reducer;