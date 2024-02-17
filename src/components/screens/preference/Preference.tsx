import './Preference.scss'

const Preference: React.FC = () => {
 
    return(     
        <section className="preference">
            <div className="container">
                <div className="preference__row">
                    <div className="preference__col">
                        <h1 className='preference__title'>ВАШИ ВЫГОДЫ</h1>
                        <div className="preference__units">
                            <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./vigoda-1.png" alt="" />
                                </div>
                                <p className='preference__text'>Экономия</p>
                                <p className='preference__text'>на исправлении брака и дефектов до 20%</p>
                            </div>
                            <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./vigoda-2.png" alt="" />
                                </div>
                                <p className='preference__text'>
                                    Отсутствие нецелевого использования денежных средств
                                </p>
                            </div>
                            <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./vigoda-3.png" alt="" />
                                </div>
                                <p className='preference__text'>
                                    Отсутствие необоснованного срыва сроков выполнения работ
                                </p>
                            </div>
                            <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./vigoda-4.png" alt="" />
                                </div>
                                <p className='preference__text'>
                                    Отсутствие проблем при сдаче объектов в эксплуатацию
                                </p>
                            </div>
                            <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./vigoda-5.png" alt="" />
                                </div>
                                <p className='preference__text'>
                                    Сокращение количества жалоб от покупателей и арендаторов
                                </p>
                            </div>
                        </div>
                        <h1 className='preference__title'>НАШИ ПРЕИМУЩЕСТВА</h1>
                        <div className="preference__units">
                        <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./priim-1.png" alt="" />
                                </div>
                                <p className='preference__text'>
                                    Работаем
                                    <br />
                                    с 2013 года
                                </p>
                            </div>
                            <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./priim-2.png" alt="" />
                                </div>
                                <p className='preference__text'>
                                    Сопровождаем объекты любой сложности, размера и назначения
                                </p>
                            </div>
                            <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./priim-3.png" alt="" />
                                </div>
                                <p className='preference__text'>
                                    Не завышаем
                                    <br />
                                    стоимость услуг
                                </p>
                            </div>
                            <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./priim-4.png" alt="" />
                                </div>
                                <p className='preference__text'>
                                    Даём рекомендации по оптимизации проектных и технических решений
                                </p>
                            </div>
                            <div className="preference__el">
                                <div className="preference__imgwp">
                                    <img className='preference__img' src="./priim-5.png" alt="" />
                                </div>
                                <p className='preference__text'>
                                    Учитываем
                                    <br />
                                    все пожелания клиента
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Preference