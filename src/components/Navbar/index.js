import React from 'react';
import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import Busca from 'components/Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"

const iconeProps = {
   color: "white",
   size: 24
} 

export default function Navbar() {

   const location = useLocation();
   const navigate = useNavigate();
   
   const { carrinhoReduce } = useSelector(state => {
      const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
         return itens += itemNoCarrinho.quantidade;
      }, 0);
      return { 
         carrinhoReduce
      };
   });

   return (
      <nav className={styles.nav}>
         <Logo className={styles.logo} onClick={() => navigate("/")} />
         <div className={styles.links}>
            <div>
               <Link to='/' className={classNames(styles.link, {
                  [styles.selected]: location.pathname === "/"
               })}>
                  Página inicial
               </Link>
            </div>
         </div>

         <div className={styles.busca}>
            <Busca />
         </div>
            
         <div className={styles.icones}>
            <Link to='/carrinho'>
               {location.pathname === "/carrinho"
                  ? <RiShoppingCartFill {...iconeProps} />
                  : <RiShoppingCart2Line {... iconeProps} />
               }
            </Link>
            <span className={styles.link}>{carrinhoReduce}</span>
         </div>
      </nav>
   )
}
