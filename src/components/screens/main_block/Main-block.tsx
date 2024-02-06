import './Main_block.scss';

interface DiskMenuProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main_block: React.FC<DiskMenuProps> = ({ active, setActive }) => {
    const handleModalClick = () => {
        setActive(true);
    
        if (!active) {
            document.body.classList.add('menu-active');
        } else {
            document.body.classList.remove('menu-active');
        }
      }

    return(
        <section className="main-block">
            <div className="container">
                <div className="main-block__row">
                    <div className="main-block__info">
                        <h3 className="main-block__title">
                            Управление строительными проектами
                        </h3>

                        <h1 className="main-block__text">
                            Услуги строительного контроля и технического заказчика
                        </h1>

                        <h3 className="main-block__subtitle">
                            Профессиональная помощь в строительстве объектов любой сложности и назначения
                        </h3>

                        <div className="main-block__duties">
                            <p className="main-block__duties-title">
                                <div className='main-block__duties-point'>·</div>
                                &nbsp;Контроль качества строительства                           
                            </p>
                            <p className="main-block__duties-title">
                                <div className='main-block__duties-point'>·</div>
                                &nbsp;Оптимизация технических решений
                            </p>
                            <p className="main-block__duties-title">
                                <div className='main-block__duties-point'>·</div>
                                &nbsp;Получение разрешений и согласований
                            </p>
                        </div>

                        <button className="main-block__btn" onClick={handleModalClick}>
                            <span className="main-block__btn-text">Бесплатная консультация</span>
                        </button>                       

                        <div className="main-block__location">
                            Работаем по Казани и Татарстану
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main_block;