import styles from '../../styles/Filter.module.css'

export default function Filter() {
  return (
    <main className={styles.container}>
        <section className={styles.multiSelction}>
            <h3>Colors</h3>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"red"}/> Red 
            </div>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"blue"}/> Blue 
            </div>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"green"}/> Green
            </div>
        </section>
        
        <section className={styles.multiSelction}>
            <h3>Gender</h3>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"men"}/> Men 
            </div>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"women"}/> Women 
            </div>
        </section>
        <section className={styles.multiSelction}>
            <h3>Price</h3>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"0-250"}/> Rs 0 - 250
            </div>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"251-450"}/> Rs 251-450 
            </div>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"450"}/> Rs 450 
            </div>
        </section>
        <section className={styles.multiSelction}>
            <h3>Type</h3>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"polo"}/> Polo 
            </div>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"hoodie"}/> Hoodie 
            </div>
            <div className={styles.selctbox}>
                <input name='color' type="checkbox" value={"basic"}/> Basic 
            </div>
        </section>
    </main>
  )
}
