import React from 'react'
import styles from './button.module.css'
import { Link } from 'react-router-dom'

export default function Button({ href, children, width, className }) {
  return (
    <div className={`${styles.navButton} ${className}`} style={{ width }}>
      <Link to={href} className={styles.button}>
        {children}
      </Link>
      <img className={styles.arrow} src="/images/icons/icon-arrow.svg" alt="arrow-right"></img>
    </div>
  )
}
