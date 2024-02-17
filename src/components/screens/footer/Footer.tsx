import './Footer.scss';

import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

  return (
    <section className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__col">
            <Link to="/" className="footer__logo">
              <img src="./logo-white.png" alt="" className='footer__img'/>
            </Link>
            <div className="footer__nav">
              <ul className='footer__menu'>
                <li className='footer__el'>
                  <Link to="/about" className='footer__link'> 
                    О нас
                  </Link>
                </li>
                <li className='footer__el'>
                  <Link to="/services" className='footer__link'> 
                    Услуги
                  </Link>
                </li>
                <li className='footer__el'>
                  <Link to="/portfolio" className='footer__link'> 
                    Портфолио
                  </Link>
                </li>
                <li className='footer__el'>
                  <Link to="/contacts" className='footer__link'> 
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__phone">
              <a href="tel:+7 843554-05-25" className='footer__phone-link'>
                <span className='footer__phone-bold'>+7 (962)</span>
                554-05-25
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
