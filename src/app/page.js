'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import FormFeedback from './FormFeedback';

export default function Home() {
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []); // Потрібно передати порожній масив для запуску ефекту тільки після монтування компонента

  function openForm() {
    setIsOpen(!isOpen);
  }

//   function calculateTimeLeft() {
//     const deadline = new Date('2024-04-21T22:00:00'); // Дата та час закінчення акції
//     const currentTime = new Date();

//     let difference = deadline.getTime() - currentTime.getTime();

//     let timeLeft = {};

//     if (difference > 0) {
//         timeLeft = {
//             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//             minutes: Math.floor((difference / (1000 * 60)) % 60),
//             seconds: Math.floor((difference / 1000) % 60) // Додаємо розрахунок секунд
//         };
//     }

//     return timeLeft;
// }

// setInterval(() => {
//     const timeLeft = calculateTimeLeft();
//     console.log(`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`); // Виведення часу в консоль (можна замінити це на відображення на веб-сторінці)
// }, 1000); // Оновлюємо таймер кожну секунду
  return (
    <main className={styles.main}>
      {isOpen ? 
      <FormFeedback openForm={openForm}/>:false
    }
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Нічник 3D світильник місяць</h2>
        <p className={styles.subTitle}>Moon Touch Control 15 см, 5 режимів</p>
      </div>
      <div className={styles.imContainer}>
        <Image className={styles.im1} width={400} height={400} src='/im1.jpg' alt='img1' />
        <div className={styles.discont}>-20% знижка</div>
        <div className={styles.timer}>
          <p className={styles.timerTitle}>До кінця акції залишилось: </p>
          {/* <p className={styles.timerTime}>{timeLeft.hours}:{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds} </p> */}
        </div>
      </div>
      <div className={styles.priceSection}>
      <div className={styles.priceContainer}>
      <div className={styles.priceItem}>
        <p className={styles.oldPriceTitle}>стара ціна</p>
        <h2 className={styles.oldPrice}>600 грн.</h2>
        </div>
        <div className={styles.priceItem}>
        <p className={styles.newPriceTitle}>ціна із знижкою</p>
        <h2 className={styles.newPrice}>420 грн.</h2>
        </div>
        </div>
        <ul className={styles.descrItems}>
            <li className={styles.descrItem} >
            <Image width={20} height={20} src='/iconItem.png' alt='img1' />
            м&apos;яке світло для спокійного сну;
            </li>
            <li className={styles.descrItem} >
            <Image  width={20} height={20} src='/iconItem.png' alt='img1' />
            сенсорний перемикач;
            </li>
            <li className={styles.descrItem} >
            <Image width={20} height={20} src='/iconItem.png' alt='img1' />
            додаткові варіанти світла.
            </li>
        </ul>
        <button className={styles.button} onClick={() => openForm()}>Придбати зараз</button>
        <p className={styles.description1}>Лампа Місяць 3D UFT виготовлена ​​за допомогою інноваційної технології 3D-друку. Текстура корпусу імітує справжній зовнішній вигляд кратерів на поверхні Місяця і виглядає дуже красиво. М&apos;яке світло рівномірно і плавно розсіюється по кімнаті, дає відчуття затишку та тепла. Більше того з ним легше заснути, ніж у повній темряві. Такий нічник стане ідеальним доповненням до інтер&apos;єру не тільки спальні дорослих, а й дитячої. І найменші зможуть спокійно засинати під його світлом. Такий світильник буде оригінальним подарунком коханій людині, другові або дитині.
</p>
<Image className={styles.im1} width={400} height={400} src='/gif.gif' alt='img1' />
<div className={styles.complContainer}>
<ul className={styles.complItems}>
<h3 className={styles.complTitle}>Комплектація:</h3>
            <li className={styles.descrItem} >
           + світильник;
            </li>
            <li className={styles.descrItem} >
            + дерев&apos;яна підставка;
            </li>
            <li className={styles.descrItem} >
            + USB-зарядка;
            </li>
            <li className={styles.descrItem} >
            + Пульт.
            </li>
            
        </ul>
        </div>
        <Image className={styles.im1} width={400} height={400} src='/imEnd.jpg' alt='img1' />
        <button className={styles.button} onClick={() => openForm()}>Придбати зараз</button>
      </div>
    </main>
  );
}
