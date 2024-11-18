import styles from './cardManga.module.css'
import { Props } from '@/app/lib/interface';

export default function CardManga({title, link, on, nsfw}: Props) {
    const classes: Record<string, string> = { 
        'Online': styles.on, 
        '403': styles.forbidden, 
        'Offline': styles.off, 
        'Site não encontrado': styles.off, 
        'Não foi possível estabelecer conexão': styles.connectionFailed,
        'Não foi possível diagnosticar': styles.forbidden,
        'Erro desconhecido': styles.connectionFailed,
        'Testing': styles.testing 
    
    }
    const classe = classes[on]
    return (
        <div className={styles.card}>
            <a href={link ? link : "#"} className={styles.anchor} rel='noopener nofollow noreferrer' target='_blank'>
                {title}{nsfw ? <span className={styles.nsfw}> +18</span> : null}</a>
            <div className={classe} title={on == '403'? 'Não foi possível diagonsticar' : on}></div>
        </div>
      );
}