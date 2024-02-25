import './Contacts_block.scss';

import { Link } from 'react-router-dom';

const Contacts_block = () =>{
    return(
        <section className="contacts-block">
            <div className="container">
                <div className="contacts-block__row">
                    <div className="contacts-block__col">
                        <div className="contacts-block__slog">
                            <nav className='contacts-block__nav'>
                                <span className='contacts-block__home'>
                                    <Link to="/" className='contacts-block__link'>Главная</Link>
                                </span>
                                <span className='contacts-block__sep'> › </span>
                                <span className='contacts-block__nav-text'>Контакты</span>
                            </nav>
                        </div>
                        <h1 className='contacts-block__title'>КОНТАКТЫ</h1>
                        <div className="contacts-block__content">
                            <p className='contacts-block__text'>
                                <strong className='contacts-block__strong'>Адрес:</strong>
                                {' '}
                                г. Казань, ул. Фатыха Карима, д.9, оф.204 (2 этаж)
                            </p>
                            <p className='contacts-block__text'>
                                <strong className='contacts-block__strong'>Телефон: </strong>
                                {' '}
                                <a href="tel:+79625540525" className='ontacts-block__link'> +7 (962) 554-05-25</a>
                            </p>
                            <p className='contacts-block__text'>
                                <strong className='contacts-block__strong'>E-mail:</strong>
                                {' '}
                                <a href="mailto:marketing@stn-tehnadzor.ru" className='ontacts-block__link'> marketing@stn-tehnadzor.ru</a>
                                {' '}
                                — по вопросам сотрудничества и стоимости услуг
                            </p>
                            <p className='contacts-block__text'>
                                <strong className='contacts-block__strong'>E-mail:</strong>
                                {' '}
                                <a href="mailto:ooo.stroytekhnadzor@yandex.ru" className='ontacts-block__link'> ooo.stroytekhnadzor@yandex.ru</a>
                                {' '}
                                — по общим и производственным вопросам
                            </p> 
                            <p className='contacts-block__text'>
                                <strong className='contacts-block__strong'>Режим работы:</strong>
                                {' '}
                                пн-пт: с 8:00 до 17:00, обед с 12:00 до 13:00
                            </p> 
                            <br />
                        </div>

                        <h1 className='contacts-block__title'>РЕКВИЗИТЫ</h1>
                        <div className="contacts-block__content">
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>Полное наименование:</strong>
                                {' '}
                                ООО "СтройТехнадзор"
                            </p>
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>Руководитель:</strong>
                                {' '}
                                Арефьев Евгений Владимирович, директор (действует на основании Устава)
                            </p>
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>Банк:</strong>
                                {' '}
                                ООО КБЭР "БАНК КАЗАНИ", г. Казань
                            </p>
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>Юр.адрес:</strong>
                                {' '}
                                420139, РТ, г.Казань, ул. Ф. Карима, д.9, оф.204
                            </p>
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>ОГРН:</strong>
                                {' '}
                                1131690022441
                            </p>
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>ИНН:</strong>
                                {' '}
                                1655267078
                            </p>
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>КПП:</strong>
                                {' '}
                                165501001
                            </p>
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>р/с:</strong>
                                {' '}
                                40702810921010005947
                            </p>
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>к/с:</strong>
                                {' '}
                                30101810100000000844
                            </p>
                            <p className='contacts-block__text2'>
                                <strong className='contacts-block__strong'>БИК:</strong>
                                {' '}
                                049205844
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacts_block