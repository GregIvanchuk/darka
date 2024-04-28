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
        <h2 className={styles.title}>Нічник 3D світильник місяць</h2>
        <p className={styles.subTitle}>Moon Touch Control 15 см, 5 режимів</p>
      </div>
      <div className={styles.imContainer}>
        <Image className={styles.im1} width={400} height={400} src='/im1.jpg' alt='img1' />
        <div className={styles.discont}>-20% знижка</div>
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
            <h2 className={styles.oldPrice}>600 грн.</h2>
          </div>
          <div className={styles.priceItem}>
            <p className={styles.newPriceTitle}>ціна зі знижкою</p>
            <h2 className={styles.newPrice}>420 грн.</h2>
          </div>
        </div>
        <ul className={styles.descrItems}>
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
        </ul>
        <button className={styles.button} onClick={() => openForm()}>
          Придбати зараз
        </button>
        <p className={styles.description1}>
          Лампа Місяць 3D UFT виготовлена ​​за допомогою інноваційної технології 3D-друку. Текстура корпусу
          імітує справжній зовнішній вигляд кратерів на поверхні Місяця і виглядає дуже красиво. М&apos;яке
          світло рівномірно і плавно розсіюється по кімнаті, дає відчуття затишку та тепла. Більше того з ним
          легше заснути, ніж у повній темряві. Такий нічник стане ідеальним доповненням до інтер&apos;єру не
          тільки спальні дорослих, а й дитячої. І найменші зможуть спокійно засинати під його світлом. Такий
          світильник буде оригінальним подарунком коханій людині, другові або дитині.
        </p>
        <Image className={styles.im1} width={400} height={400} src='/gif.gif' alt='img1' />
        <div className={styles.complContainer}>
          <ul className={styles.complItems}>
            <h3 className={styles.complTitle}>Комплектація:</h3>
            <li className={styles.descrItem}>+ світильник;</li>
            <li className={styles.descrItem}>+ дерев&apos;яна підставка;</li>
            <li className={styles.descrItem}>+ USB-зарядка;</li>
            <li className={styles.descrItem}>+ Пульт.</li>
          </ul>
        </div>
        <Image className={styles.im1} width={400} height={400} src='/imEnd.jpg' alt='img1' />
        <div className={styles.priceContainer}>
          <div className={styles.priceItem}>
            <p className={styles.oldPriceTitle}>стара ціна</p>
            <h2 className={styles.oldPrice}>600 грн.</h2>
          </div>
          <div className={styles.priceItem}>
            <p className={styles.newPriceTitle}>ціна зі знижкою</p>
            <h2 className={styles.newPrice}>420 грн.</h2>
          </div>
        </div>
        <button className={styles.button2} onClick={() => openForm()}>
          Придбати зараз
        </button>
        
      </div>
    </main>
  );
}
