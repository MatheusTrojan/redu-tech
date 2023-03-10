import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            const temItem = state.some(item => item.id === payload);
            if (!temItem) return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ];
            return state.filter(item => item.id !== payload);
        },

        mudarQuantidade: (state, { payload }) => {
            state = state.map(itemNoCarrinho => {
                if(itemNoCarrinho.id === payload.id) itemNoCarrinho.quantidade += payload.quantidade;
                return itemNoCarrinho;
            })
        },

        resetarCarrinho: () => initialState,

        removerItem: (state, { payload }) => {
            return state.filter(item => item.id !== payload)
        }
    }
});

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho, removerItem } = carrinhoSlice.actions
export default carrinhoSlice.reducer;

