import './Contacts_map.scss';

import { useState } from "react";

const Contacts_map: React.FC = () => {
  const [isCheckActive, setIsCheckActive] = useState<boolean>(false);    
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }

  const handleCheckClick = () => {    
    setIsCheckActive(!isCheckActive);
    setFormSubmitted(true);
    if (!name.trim() || !phone.trim()) {
      return;
    }
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  return (
    <section className="contacts-map">
      <div className="contacts-map__map">
        <iframe className='contacts-map__iframe' src="https://yandex.ru/map-widget/v1/?um=constructor%3A5bfa336f602417a2bbdee3a5bcf442b26623b758329aeb65d0de060283ace21d&amp;source=constructor" width="100%" height="100%"></iframe>
      </div>
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
                  <div className='contacts-map__input-block'>
                    <input className='contacts-map__input' type="text" placeholder="Имя" name="your-name" value={name} onChange={handleNameChange}/>
                    {formSubmitted && !name.trim() && <span className='contacts-map__error'>Поле обязательно для заполнения.</span>}
                  </div>
                  <div className='contacts-map__input-block'>
                    <input className='contacts-map__input' type="tel" placeholder="Телефон" name="phone" value={phone} onChange={handlePhoneChange}/>
                    {formSubmitted && !phone.trim() && <span className='contacts-map__error'>Поле обязательно для заполнения.</span>}
                    {formSubmitted && phone.trim() && !/^\d+$/.test(phone) && <span className='contacts-map__error'>Введён некорректный телефонный номер.</span>}
                  </div>
                  <label className={`contacts-map__checker ${isCheckActive ? 'active' : ''}`} onClick={handleCheckClick}>
                    Я даю согласие на обработку персональных данных и соглашаюсь с <a className='contacts-map__checker-link' href="/">политикой конфиденциальности</a>
                  </label>
                  <button className={`contacts-map__btn ${isCheckActive ? '' : 'not-allowed'}`} onClick={handleButtonClick}>
                    <span className='contacts-map__btn-text'>свяжитесь со мной</span>
                  </button>
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
