import React from 'react'
import leadersData from '../../../leaders.json'
import styles from './Leaders.module.css'

export default function Leaders() { 
  return (
    <div className={styles.leadersContainer}>
      {leadersData.map((leader, index) => (
        <div className={styles.leadersChild} key={index}>
          <div className={styles.leadersImgWrapper}>
          <img src={leader['profile image']} alt="Profile" />
          </div>
          <h4>{leader.name}</h4>
          <p>{leader.role}</p>
        </div>
      ))}
    </div>
  );
}
