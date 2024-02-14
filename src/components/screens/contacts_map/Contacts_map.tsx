import './Contacts_map.scss';

import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

const Contacts_map: React.FC = () => {
    
    

  return (
    <section className="contacts-map">
      <div className="contacts-map__map"></div>
      <div className="container">
        <div className="contacts-map__row">
          <div className="contacts-map__col">
            <div className="contacts-map__inform">
              <h1 className='contacts-map__title'>связаться с нами</h1>
              <div className="contacts-map__inform-call">
                <p className='contacts-map__lab'>Адрес:</p>
                <p className='contacts-map__text'>420139, РТ, г.Казань, ул. Ф. Карима, д.9, оф.204 (2 этаж)</p>
                <p className='contacts-map__lab'>Телефон:</p>
                <p className='contacts-map__text'>+7 (962) 554-05-25</p>
                <p className='contacts-map__lab'>E-mail:</p>
                <p className='contacts-map__text'>marketing@stn-tehnadzor.ru</p>
                <p className='contacts-map__lab'>График работы:</p>
                <p className='contacts-map__text'>пн-пт: с 8:00 до 17:00, обед с 12:00 до 13:00</p>
              </div>
              <div className="contacts-map__form-wrap">
                <p className="contacts-map__form-title">
                  Оставьте свои контакты и мы свяжемся с Вами в течение 4 часов (в рабочее время)
                </p>
                <form action="" className='contacts-map__form'>
                  <input className='contacts-map__input' type="text" placeholder="Имя" name="your-name"/>
                  <input className='contacts-map__input' type="text" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts_map;
