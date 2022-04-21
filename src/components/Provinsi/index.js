import Table from "../Tabel";
import styles from "./Provinsi.module.css";

function Provinsi(props){

    const {provinces} = props;
    let number ="";
    return(
        <div className={styles.container}>
            <section className={styles.provinsi}>
                <h2 className={styles.provinsi__title}>Provinsi</h2>
                <p className={styles.provinsi__tagline}>Data Covid Berdasarkan Provinsi</p>
                <div className={styles.table__container}>
                    <table className={styles.table}>
                        <thead className={styles.table__head}>
                            <tr>
                                <th className={styles.list}>No</th>
                                <th className={styles.list}>Provinsi</th>
                                <th className={styles.list}>Positif</th>
                                <th className={styles.list}>Sembuh</th>
                                <th className={styles.list}>Dirawat</th>
                                <th className={styles.list}>Meninggal</th>
                            </tr>
                        </thead>
                        {provinces.map((data)=>{
                            number++
                            return <Table data={data} number={number} />
                        })}
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Provinsi;