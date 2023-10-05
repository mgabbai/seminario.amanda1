import Column from './column'
import styles from '../../styles/components/layout/footer.module.scss'

export default function Footer() {
    return (
        <Column
            component={'footer'}
            className={styles.footer}
        >
            Seminário Ala Jardim Amanda 1 - Estaca Hortolândia
        </Column>
    )
}
