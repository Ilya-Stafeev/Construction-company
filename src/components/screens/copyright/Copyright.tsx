import './Copyright.scss';

const Copyright: React.FC = () => {

  return (
    <section className="copyright">
      <div className="container">
        <div className="copyright__row">
            <div className="copyright__col">
                <div className="copyright__left-el">
                    <p className='copyright__text'>2020 © Стройтехнадзор</p>
                    <p className='copyright__text'>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при</p>
                    <p className='copyright__text'>каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ.</p>
                </div>
                <div className="copyright__right-el">
                    <p className='copyright__text'>Разработчик сайта:</p>
                    <p className='copyright__text'>Стафеев Илья Сергеевич</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
