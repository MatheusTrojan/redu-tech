import styles from "./Footer.module.scss"
import {
    FaGithub,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa"

const iconeProps = {
    color: "white",
    size: 24
}

export default function Footer() {


    return (
        <footer className={styles.footer}>
            <div>
                <FaGithub {... iconeProps}/>
                <FaInstagram {... iconeProps}/>
                <FaWhatsapp {... iconeProps}/>
            </div>
            <span>
                Desenvolvido por Matheus Trojan.
            </span>
        </footer>
    )
}