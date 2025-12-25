import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.logo}>Apurba Ovi</h3>
      <button>Save</button>
    </div>
  )
}

export default Header
