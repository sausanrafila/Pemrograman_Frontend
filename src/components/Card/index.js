import styles from './Card.module.css'

function Card(props){
    const {card,style} = props;

    return(
        <div className={styles.card}>
            <div className={styles.card__detail}>
                <h2>{card.status}</h2>
                <h1 className={styles[style]}>{card.total}</h1>
            </div>
        </div>
    )
}

export default Card;