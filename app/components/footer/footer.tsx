import styles from './footer.module.css'
import Link from "next/link"
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.title}>Desenvolvido por:
            <Link className={styles.linkGithub} 
            href="https://github.com/Sileniz" 
            title="Github profile" target='_blank' rel='noopener nofollow noreferrer'> Walisson</Link> &lt;/&gt;</p>
            <p className={styles.frase}>Feito com amor e muito café &#x2665;</p>
        </footer>
    )
}