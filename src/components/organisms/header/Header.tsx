import './Header.scss';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__block">
                <div className="header__logo">
                    <Link to="/" className='header__link-logo'> 
                        <img src="./logo.png" alt="logo" className='header__img' />
                    </Link> 
                </div>
                <div className="header__nav">
                    <Link to="/h" className='header__nav-item'>
                        <div className='header__link'> 
                            О нас
                        </div>
                    </Link>
                    
                    <div className='header__nav-item'>
                        <Link to="/" className='header__link'> 
                            Услуги
                        </Link>
                    </div>

                    <div className='header__nav-item'>
                        <Link to="/" className='header__link'> 
                            Портфолио 
                        </Link> 
                    </div>

                    <div className='header__nav-item'>
                        <Link to="/" className='header__link'> 
                            Контакты
                        </Link>
                    </div>
                </div>
                <div className="header__contatcs">
                    <div className="header__soc">
                        <a href="https://t.me/john77kz" className='header__telegram'></a>
                        <a href="https://wa.me/79173987991" className='header__whatsapp'></a>
                    </div>
                    <div className="header__inform">
                        <a href="mailto:marketing@stn-tehnadzor.ru" className='header__mail'>
                            marketing@stn-tehnadzor.ru
                        </a>
                        <a href="tel:+7843554-05-25" className='header__phone'>
                            <span className='header__phone-highlighting'>+7 (962)</span>
                            554-05-25
                        </a>
                    </div>
                </div>
                <div className="header__bar">
                    <nav className='header__mobail-nav' role="navigation">
                        <div className="header__menu" id="menuToggle">
                            <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                            <ul id="menu">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Info</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
