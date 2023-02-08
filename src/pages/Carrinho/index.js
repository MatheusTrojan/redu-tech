import Header from "components/Header"
import styles from "./Carrinho.module.scss"
import { useSelector, useDispatch } from "react-redux"
import Item from "components/Item"
import { resetarCarrinho } from "store/reducers/carrinho";
import Swal from "sweetalert2";

export default function Carrinho() {

    const dispatch = useDispatch();

    const { carrinho, total } = useSelector(state => {
        let total = 0;
        const regexp = new RegExp(state.busca, "i")
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            total += (item.preco * itemNoCarrinho.quantidade);
            if(item.titulo.match(regexp)) {
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade
                });
            }
            return itens;
        }, []);
        return { 
            carrinho: carrinhoReduce,
            total
        };
    });

    return (
        <div>
            <Header 
                titulo="Carrinho de compras"
                descricao="Confira produtos que você adicionou ao carrinho"
            />
            <div className={styles.carrinho}>
                {carrinho.map(item => <Item key={item.id} {...item} carrinho />)}
                <div className={styles.total}>
                    <strong>
                        Resumo da Compra
                    </strong>
                    <span>
                        Subtotal: <strong> R$ {total.toFixed(2)} </strong>
                    </span>
                </div>

                <button
                    className={styles.finalizar}
                    onClick={() => {
                        console.log(carrinho.length)
                        if (carrinho.length > 0) {
                            Swal.fire({
                                title: 'Compra finalizada com sucesso!',
                                icon: 'success',
                                showConfirmButton: false,
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                            setTimeout(function() { 
                                dispatch(resetarCarrinho())
                             }, 1000)                    
                        } else {
                            Swal.fire({
                                title: 'O carrinho não pode estar vazio!',
                                icon: 'error',
                                showConfirmButton: false,
                                timer: 1500,
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        }
                    }}
                >
                    Finalizar Compra
                </button>
            </div>
        </div>
    )
}
