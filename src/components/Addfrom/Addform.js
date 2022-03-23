import styles from "./Addform.module.css";

function Addform(){
    return(
        <div className={styles.container}>
            <section className={styles.Addform}>
                <div className={styles.Addform__left}>
                    <img className={styles.Addform__image} src="https://picsum.photos/600/400" alt="" />
                </div>
                <div className={styles.Addform__right}>
                    <h1 className={styles.Addform__title}>Add Movie</h1>
                    <form  className={styles.Addform__add} action="Contact">
                        
                        <div className={styles.Addform__control}>
                            <p>Title</p>
                            <input className={styles.Addform__inputone} type="text" />
                        </div>
                        
                        <div className={styles.Addform__control}>
                            <p>Year</p>
                            <input className={styles.Addform__inputtwo} type="date" />
                        </div>
                        
                        
                        <button className={styles.Addform__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Addform;