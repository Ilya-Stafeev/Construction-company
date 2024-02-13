import './Our_object.scss'

import { Link } from 'react-router-dom';

const Services: React.FC = () => {
 
    return(     
        <>  
           <div className="our-object">
                <div className="container">
                    <div className="our-object__row">
                        <div className="our-object__col">
                            <h1 className='our-object__title'>НАШИ ОБЪЕКТЫ</h1>
                            <div className="our-object__blocks">
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object1.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title">Гипермаркет «Лента»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Строительный контроль
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            ООО "Лента"
                                        </div>
                                        <div className="our-object__text">
                                            Услуги строительного контроля при выполнении работ по усилению грунтов основания и конструкции полов гипермаркета «Лента» в г. Казани		
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object2.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title">ЖК «Изумрудный»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Строительный контроль
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            ООО CЗ "ИЗУМРУДНЫЙ"
                                        </div>
                                        <div className="our-object__text">
                                            Услуги строительного контроля при выполнении работ по усилению грунтов основания и конструкции полов гипермаркета «Лента» в г. Казани		
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object3.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title">Станция метро «Академическая»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Строительный контроль
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            ООО «Апекс»		
                                        </div>
                                        <div className="our-object__text">
                                            Услуги строительного контроля при выполнении работ по усилению грунтов основания и конструкции полов гипермаркета «Лента» в г. Казани		
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object4.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title">Гипермаркет «Лента»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Строительный контроль
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            ООО "Лента"
                                        </div>
                                        <div className="our-object__text">
                                            Услуги строительного контроля при выполнении работ по усилению грунтов основания и конструкции полов гипермаркета «Лента» в г. Казани		
                                        </div>
                                    </div>
                                </Link>                       
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Services