import styles from './Card.module.css'

export default function Card({data,index}){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.groupname}>Grup {index+=1}</p>
                <p className={styles.total}>{data.length} Anggota</p>
            </div>
            <ul>
                {
                    data.map((val,key) => {
                        return(
                        <li key={key}>{val}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}