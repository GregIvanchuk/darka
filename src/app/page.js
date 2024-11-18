'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import FormFeedback from './FormFeedback';
import { useTimer } from 'react-timer-hook';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1200); // Додати 1200 секунд до поточного часу

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, autoStart: true });

  function openForm() {
    setIsOpen(!isOpen);
  }

  // Функція для форматування чисел з ведучим нулем, якщо вони менше 10
  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <main className={styles.main}>
      {isOpen ? <FormFeedback openForm={openForm} /> : false}
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>МАГІЧНИЙ НІЧНИК</h2>
        <p className={styles.subTitle}>з ефектом дощу</p>
      </div>
      <div className={styles.imContainer}>
        <Image className={styles.im1} width={400} height={400} src='/IMG_8003.PNG' alt='img1' />
        {/* <div className={styles.discont}>-20% знижка</div> */}
        <div className={styles.timer}>
          <p className={styles.timerTitle}>До кінця акції залишилось: </p>
          <p className={styles.timerTime}>
            {`${days}0:${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`}
          </p>
        </div>
      </div>
      <div className={styles.priceSection}>
        <div className={styles.priceContainer}>
          <div className={styles.priceItem}>
            <p className={styles.oldPriceTitle}>стара ціна</p>
            <h2 className={styles.oldPrice}>800 грн.</h2>
          </div>
          <div className={styles.priceItem}>
            <p className={styles.newPriceTitle}>ціна зі знижкою</p>
            <h2 className={styles.newPrice}>699 грн.</h2>
          </div>
        </div>
        {/* <ul className={styles.descrItems}>
          <li className={styles.descrItem}>
            <Image width={20} height={20} src='/iconItem.png' alt='img1' />
            м&apos;яке світло для спокійного сну;
          </li>
          <li className={styles.descrItem}>
            <Image width={20} height={20} src='/iconItem.png' alt='img1' />
            сенсорний перемикач;
          </li>
          <li className={styles.descrItem}>
            <Image width={20} height={20} src='/iconItem.png' alt='img1' />
            додаткові варіанти світла.
          </li>
        </ul> */}
        <button className={styles.button} onClick={() => openForm()}>
          Придбати зараз
        </button>
        <h3 className={styles.title1} >ТРЕНД ТІК-ТОКУ </h3>
        <h5 className={styles.title2} >Чому тобі варто його придбати ?</h5>
          <ul className={styles.descrItems}>
          <li className={styles.descrItem}>
          - Оригінальний дизайн  <br></br>
Зволожувач Гриб принесе в інтер‘єр затишок і забезпечить природне зволоження повітря.

          </li>
          <li className={styles.descrItem}>
          - Краплі дощу  <br></br>
          Створює білий шум дощу, що дарує розслаблення.
          </li>
          <li className={styles.descrItem}>
          - Кольори підсвічування  <br></br>
За замовчуванням 7 кольорів плавно змінюють один одного, ви також можете зафіксувати один колір.

          </li>
          <li className={styles.descrItem}>
          - Живлення USB <br></br>
          Зволожувач споживає мінімум енергії, підключається через type-C до мережі.
          </li>
          <li className={styles.descrItem}>
          - Резервуари для води <br></br>
          Зручний верхній залив води, автоматичне відключення при відчутності води в резервуарі.
          </li>
        </ul>
        <video 
  className={styles.im1} 
  width={400} 
  height={400} 
  autoPlay 
  loop 
  muted 
>
  <source src='/IMG_8005.MOV' type='video/mp4' />
  Your browser does not support the video tag.
</video>
        <div className={styles.complContainer}>
          <ul className={styles.complItems}>
            <h3 className={styles.complTitle}>Комплектація:</h3>
            <li className={styles.descrItem}>+ нічник</li>
            <li className={styles.descrItem}>+ кабель для зарядки;</li>
          </ul>
        </div>
        <Image className={styles.im1} width={400} height={400} src='/IMG_8008.PNG' alt='img1' />
        <div className={styles.priceContainer}>
          <div className={styles.priceItem}>
            <p className={styles.oldPriceTitle}>стара ціна</p>
            <h2 className={styles.oldPrice}>800 грн.</h2>
          </div>
          <div className={styles.priceItem}>
            <p className={styles.newPriceTitle}>ціна зі знижкою</p>
            <h2 className={styles.newPrice}>699 грн.</h2>
          </div>
        </div>
        <button className={styles.button2} onClick={() => openForm()}>
          Придбати зараз
        </button>
        
      </div>
    </main>
  );
}
