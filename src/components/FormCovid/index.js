import styles from "./FormCovid.module.css"
import img from "../../img/img2.png"
import {useState} from 'react';
import Alert from "../Alert";

function FormCovid(props){
    const {provinces,setProvinces} = props;

    const [provinsi,setProvinsi] = useState("Jakarta")
    const [status,setStatus] = useState("kasus")
    const [jumlah,setJumlah] = useState("")

    
    const [isJumlahEmpty, setIsJumlahEmpty] = useState(false)


    function handleProvinsi(e){
        setProvinsi(e.target.value)
    }
    
    function handleStatus(e){
        setStatus(e.target.value)
    }
    
    function handleJumlah(e){
        setJumlah(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault();

        if(jumlah === ""){
            setIsJumlahEmpty(true);
        }else {
            const province = provinces.map(item =>
                item.kota === provinsi ? { ...item, [status]:Number(jumlah) } : item, 
            );

            setProvinces(province);
        }


    }

    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                    className={styles.form__image} 
                    src={img} 
                    alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Form Covid</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Provinsi</label>
                            <select 
                            name="provinsi" 
                            id="" 
                            className={styles.form__select}
                            value={provinsi}
                            onChange={handleProvinsi}
                            >
                            {provinces.map((kota)=>{
                                    return <option key={kota.kota} value={kota.kota}>{kota.kota}</option>
                            })}
                            </select>
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Status</label>
                            <select 
                            name="status" 
                            id="" 
                            className={styles.form__select}
                            value={status}
                            onChange={handleStatus}
                            >
                            <option value="kasus">Positif</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="dirawat">Dirawat</option>
                            <option value="meninggal">Meninggal</option>
                            </select>
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>Jumlah</label>
                            <input 
                            name="jumlah"
                            type="number" 
                            className={styles.form__input} 
                            min="0"
                            value={jumlah}
                            onChange={handleJumlah}
                            />{isJumlahEmpty && <Alert>Jumlah Wajib Diisi</Alert>}
                        </div>
                        <div>
                            <button className={styles.form__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default FormCovid;