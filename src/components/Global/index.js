import Card from "../Card/index";
import styles from "./Global.module.css"
import data from '../../utils/constants/indonesia'

function Global(){
    const {indonesia} = data;
    const desc = ["positif","sembuh","meninggal"]

    return(
        <div className={styles.container}>
            <section className={styles.global}>
                <h2 className={styles.tittle} >Indonesia</h2>
                <p >Data Covid Berdasarkan Global</p>
                <div className={styles.card__container}>
                    {
                        indonesia.map((status,index) => {
                            return <Card  card={status} style={desc[index]}/>
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Global;