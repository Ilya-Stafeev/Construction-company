import './Header.scss';

import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(screenWidth < 991);
    const [logoPath, setLogoPath] = useState(isMobile ? './logo.png' : './logo2.png');
    const [imageStyle, setImageStyle] = useState(isMobile ? { width: 270, height: 41.25 } : {});
    const [isMenuActive, setIsMenuActive] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setScreenWidth(newWidth);
            setIsMobile(newWidth < 991);
            setLogoPath(newWidth < 991 ? './logo2.png' : './logo.png');
            setImageStyle(newWidth < 991 ? { width: 270, height: 41.25 } : {});
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuButtonClick = () => {
        setIsMenuActive(!isMenuActive)

        if (!isMenuActive) {
            document.body.classList.add('menu-active');
        } else {
            document.body.classList.remove('menu-active');
        }
    }
    
    const navClass = isMenuActive ? 'header__nav active' : 'header__nav';

  return (
    <section className='header'>
        <div className="container">
            <div className="header__block">
                <div className="header__logo">
                    <Link to="/" className='header__link-logo'> 
                        <img {...imageStyle} src={logoPath} alt="logo" className='header__img' />
                    </Link> 
                </div>

                <div className={navClass}>
                    <ul className='header__nav-menu'>
                        <li className='header__nav-item'>
                            <Link to="/about" className='header__link'> 
                                О нас
                            </Link>
                        </li>
                        
                        <li className='header__nav-item'>
                            <Link to="/services" className='header__link'> 
                                Услуги
                            </Link>
                        </li>

                        <li className='header__nav-item'>
                            <Link to="/portfolio" className='header__link'> 
                                Портфолио 
                            </Link> 
                        </li>

                        <li className='header__nav-item'>
                            <Link to="/contacts" className='header__link'> 
                                Контакты
                            </Link>
                        </li>
                    </ul>

                    <div className="header__mobail-info">
                        <a className='header__mobail-link'> 
                            <span>+7 (962)</span> 554-05-25
                        </a>

                        <a className='header__mobail-link'> 
                            marketing@stn-tehnadzor.ru	
                        </a>
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
                    <button className={`header__menu-btn ${isMenuActive ? 'is-active' : ''}`} onClick={handleMenuButtonClick}>
                        <span className='header__menu-line'></span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Header;
