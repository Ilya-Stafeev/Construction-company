import './About_block.scss';

import { Link } from 'react-router-dom';

const About_block = () =>{
    return(
        <section className="about-block">
            <div className="container">
                <div className="about-block__row">
                    <div className="about-block__col">
                        <div className="about-block__slog">
                            <nav className='about-block__nav'>
                                <span className='about-block__home'>
                                    <Link to="/" className='about-block__link'>Главная</Link>
                                </span>
                                <span className='about-block__sep'> › </span>
                                <span className='about-block__nav-text'>О нас</span>
                            </nav>
                        </div>
                        <h1 className='about-block__title'>О КОМПАНИИ</h1>
                        <div className="about-block__content">
                            <figure className='about-block__figure'>
                                <img className='about-block__img' src="./about-img.png" alt="about-img" />
                            </figure>
                            <p className='about-block__content-text'>
                                <strong className='about-block__content-strong'>ООО «СтройТехнадзор</strong>
                                » — специализированное предприятие, предоставляющее услуги 
                                {' '}
                                <Link to="/" className='about-block__link'>
                                    <strong className='about-block__link-strong'>строительного контроля</strong>
                                </Link>
                                {' '}
                                и 
                                {' '}
                                <Link to="/" className='about-block__link'>
                                    <strong className='about-block__link-strong'>технического заказчика</strong>
                                </Link>
                                {' '}
                                в сфере капитального строительства, реконструкции и ремонта.
                            </p>
                            <p className='about-block__content-text'>
                                <strong className='about-block__content-strong'>Наша миссия:</strong>
                                {' '}
                                Обеспечение качественного результата строительства при строгом контроле целевого использования
                                вложенных средств для дальнейшей безопасной, безаварийной и эффективной эксплуатации построенных 
                                и отремонтированных объектов. Повышение уровня жизни граждан России.
                            </p>
                            <p className='about-block__content-text'>
                                Предприятие укомплектовано штатом квалифицированных опытных специалистов.
                                Также имеется полный комплект контрольно-измерительной техники 
                                и договоры со строительными лабораториями Казани.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About_block