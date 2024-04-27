import styles from './FormFeedback.module.css';
import React from 'react';
import { useState,  } from 'react'; 
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import axios from 'axios';
function  FormFeedback({openForm}) {
  const [loading, setLoading] = React.useState(false);
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    axios.post("/api/blogs", data)
    .then((response) => {
      if (response.status === 200) {
        alert('Form submitted successfully!');
        setLoading(false);
        openForm()
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      alert('Form submission failed.');
    });
  };

    return (
    <div className={styles.wrapper} >
       {loading ? (
                    <div className={styles.loaderContainer}>
                        <Image
                            width={200}
                            height={200}
                            src="/loading.gif"
                            alt="dmdedjm"
                        />
                    </div>
                ) : ( 
    <div className={styles.container}>
    <div className={styles.closeButton}>
  <span className={styles.closeIcon} onClick={() => openForm()}></span>
</div>
    <section id='home'>
    <h1 className={styles.h1}>ШВИДКИЙ ЗВ&apos;ЯЗОК З НАМИ!
ЗАЛИШТЕ ЗАПИТ І МИ З ВАМИ ЗВ&apos;ЯЖЕМОСЬ!</h1>
    </section>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.item}>
        <label htmlFor="name"></label>
        <input placeholder=" прізвище ім'я" type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="phone"></label>
        <input placeholder=" номер телефону"  type="phone" id="phone" {...register('phone', { required: true })} />
        {errors.phone && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      {/* <div className={styles.item}>
        <label htmlFor="email"></label>
        <input placeholder=" електронна адреса" type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div> */}
      <button className={styles.button} type="submit">Надіслати</button>
    </form>
    </div>
                )}
   </div>
    )}
    export default FormFeedback;