import styles from "./Header.module.scss"

export default function Header({ titulo, descricao, className = ""}) {
  return (
    <header className={`${styles.header} ${className}`}>
        <div className={styles["header-texto"]}>
            <h1>{titulo}</h1>
            <h2>{descricao}</h2>
        </div>
    </header>
  )
}
