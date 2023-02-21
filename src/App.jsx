import styles from './App.module.css'
import Card from './components/Card'
import groupDivider from './misc/groupdivider.js'

import { useState } from 'react'

function App() {
  let [ data, setData ] = useState("")
  let [ mode, setMode ] = useState(1)
  let [ jumlah, setJumlah ] = useState(1)
  let [ group,setGroup ] = useState([])
  let [ dataTotal,setDataTotal ] = useState(0)


  let handleClick = () => {
    let groupData = groupDivider(data,{ mode,jumlah })
    setGroup(groupData.data)
    setDataTotal(groupData.total)
  }

  return (
    <div className={styles.app}>
      <div className={styles.header}>Easy Group Divider</div>
      <div className={styles.form}>
        <div className={styles.formItem}>
          <label htmlFor="data" className={styles.label}>Masukkan data</label>
          <textarea name="data" spellCheck="false" className={styles.textarea} id="data" cols="30" rows="10" onChange={(e)=>setData(e.target.value)}></textarea>
          <p className={styles.info}>*Pisahkan setiap data dengan enter atau koma</p>
        </div>
        <div className={styles.formItem}>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <label htmlFor="mode" className={styles.label}>Mode Pembagian</label>
              <select name="mode" id="mode" className={styles.input} onChange={(e)=>setMode(e.target.value)}>
                <option value="1">Jumlah Grup</option>
                <option value="2">Jumlah Data</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="jumlah" className={styles.label}>Jumlah</label>
              <input type="number" name="jumlah" id="jumlah" className={styles.input} required defaultValue={jumlah} onChange={(e)=>setJumlah(parseInt(e.target.value))}/>
            </div>
          </div>
        </div>
        <button className={styles.divide} onClick={handleClick}>Bagi</button>
      </div>
      <div className={styles.content}>
        <p className={styles.summary}>Total Grup: {group.length} <span>Total Data: {dataTotal}</span></p>
        {
          group.map((group,index) => {
            return (
              <Card data={group} key={index} index={index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
