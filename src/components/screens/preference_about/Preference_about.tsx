import './Preference_about.scss'

const Preference: React.FC = () => {
 
    return(     
        <section className="preference-about">
            <div className="container">
                <div className="preference__row">
                    <div className="preference__col">                       
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
                                    Даём рекомендации по
                                    <br />
                                    оптимизации проектных и
                                    <br />
                                    технических решений
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