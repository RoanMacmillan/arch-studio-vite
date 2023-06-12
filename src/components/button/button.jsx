import React from 'react'
import styles from './button.module.css'
import { Link } from 'react-router-dom'

export default function Button({ href, children, width, className }) {
  return (
    <Link to={href} className={styles.button}>
      <div className={`${styles.navButton} ${className}`} style={{ width }}>
        {children}
        <img className={styles.arrow} src="/images/icons/icon-arrow.svg" alt="arrow-right"></img>
      </div>
    </Link>
  )
}
