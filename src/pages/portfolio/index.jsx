import React from 'react'
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import styles from './index.module.css'
import current from '../../assets/images/current2.svg'

export default function page() {
  return (
    <div className={styles.portfolio}>
      <div className='currentContainer'>
      <img src={current} alt='current text' className='current'></img>
      </div>
      
      <Thumbnail />
      
    </div>
  )
}
