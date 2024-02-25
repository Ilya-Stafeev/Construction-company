import './Services_block.scss'

const Services_block: React.FC = () => {
 
    return(     
        <section className="services-block">
            <div className="container">
                <div className="services__row">
                    <div className="services__col">
                        <h1 className='services__title'>Услуги</h1>
                        <div className="services__blocks">
                            <div className="services__card">
                                <div className="services__card-el">
                                    <h2 className='services__card-title'>Технический заказчик</h2>
                                    <div className="services__card-image">
                                        <img className='services__card-img' src="./img-card1.jpg" alt="img-card1" />
                                    </div>
                                    <div className="services__card-content">
                                        <p className='services__card-text'>
                                            Управление строительством на всех стадиях инвестиционного проекта
                                        </p>
                                    </div>
                                    <div className="services__card-btnblock">
                                        <a className='services__card-btn' href="">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                            <div className="services__card">
                                <div className="services__card-el">
                                    <h2 className='services__card-title'>Строительный контроль</h2>
                                    <div className="services__card-image">
                                        <img className='services__card-img' src="./img-card2.jpg" alt="img-card2" />
                                    </div>
                                    <div className="services__card-content">
                                        <p className='services__card-text'>
                                            Контроль за качеством выполнения строительно - монтажных работ
                                        </p>
                                    </div>
                                    <div className="services__card-btnblock">
                                        <a className='services__card-btn' href="">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services_block