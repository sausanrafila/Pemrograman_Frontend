import styles from './Tabel.module.css'

function Provinsi(props){
    // console.log(props.table);
    const {data,number} = props;
    return(
        <tbody className={styles.table__body}>
                <tr className={styles.table__row}>
                    <td className={styles.td}>{number}</td>
                        <td className={styles.td}>{data.kota}</td>
                        <td className={styles.td}>{data.kasus}</td>
                        <td className={styles.td}>{data.sembuh}</td>
                        <td className={styles.td}>{data.dirawat}</td>
                        <td className={styles.td}>{data.meninggal}</td>
                </tr>
        </tbody>

    )
}

export default Provinsi;