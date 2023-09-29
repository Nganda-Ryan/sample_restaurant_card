import React from 'react'
import styles from './info.module.css'

const Info = ({content, variant}) => {
  
  return (
    <span className={`${styles[variant]} ${styles.info}`}>
        {content}
    </span>
  )
}

export default Info