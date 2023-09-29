import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import Info from '../Info/Info';
import Link from 'next/link';

const Card = ({img, categories, name, close, location, price, id}) => { 

  const handleClick = (e) => {
    console.log('Zaza');
  }

  return (
    <span className={styles.card} onClick={handleClick}>
      <Image 
        src={img}
        alt='glass'
        width={720}
        height={960}
        className={styles.image}
      />
      <div className={`${styles.description}`}>
        <div className={`${styles.row}`}>
          {categories.map(item => (
            <Info content={item.content} variant={item.variant} key={uuidv4()}/>
          ))}
        </div>
        <div className={`${styles.row + ' ' + styles.name}`}><Link href={`/restaurant?id=${id}`}><h2>{name}</h2></Link></div>
        <div className={`${styles.row}`}>{close ? 'Fermé' : 'Ouvert'} . {location}</div>
        <div className={`${styles.row}`}>Prix Moyen: FCFA {price}</div>
      </div>
    </span>
  )
}

export default Card