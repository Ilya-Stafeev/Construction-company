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
                                        <div className="our-object__title-card">Гипермаркет «Лента»</div>
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
                                        <div className="our-object__title-card">ЖК «Изумрудный»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Строительный контроль
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            ООО CЗ "ИЗУМРУДНЫЙ"
                                        </div>
                                        <div className="our-object__text">
                                            Услуги строительного контроля при строительстве жилого комплекса "Изумрудный" по ул. Кул Гали г. Казани.		
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object3.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title-card">Станция метро «Академическая»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Строительный контроль
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            ООО «Апекс»		
                                        </div>
                                        <div className="our-object__text">
                                            Услуги строительного контроля (технического надзора) при строительстве станции метро «Академическая» Казанского метрополитена		
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object4.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title-card">Административное здание</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Строительный контроль
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            Физическое лицо
                                        </div>
                                        <div className="our-object__text">
                                            Услуги строительного контроля и технического заказчика при реконструкции административного здания по ул. Некрасова, д.32А, Казань		
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object5.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title-card">ЖК «Зимний сад»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Строительный контроль
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            ООО "СЗ "ЖК "УДАЧНЫЙ"
                                        </div>
                                        <div className="our-object__text">
                                            Услуги строительного контроля при строительстве 1-ой очереди жилого комплекса «Зимний сад» в п. Осиново (Зеленодольский район, РТ)			
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object6.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title-card">ЖК «Дом у озера»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Технический заказчик
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            ООО "CЗ "ДЕВЕЛОПЕР №1"
                                        </div>
                                        <div className="our-object__text">
                                            Услуги технического заказчика при строительстве жилого комплекса «Дом у озера» в п. Осиново по ул. Спортивная (Зеленодольский район, РТ)		
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object7.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title-card">ЖК «Гравитация»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Технический заказчик
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            Группа компаний ЖИК г. Казани
                                        </div>
                                        <div className="our-object__text">
                                            Услуги технического заказчика при строительстве жилого комплекса «Гравитация» по ул. Гагарина г. Казани		
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="our-object__card">
                                    <div className="our-object__el">
                                        <div className="our-object__image">
                                            <img className='our-object__img' src="./our-object8.jpg" alt="" />
                                        </div>
                                        <div className="our-object__title-card">ЖК «Открытие»</div>
                                        <div className="our-object__serv">
                                            <i className='our-object__indent'>Услуга:</i>
                                            Технический заказчик
                                        </div>
                                        <div className="our-object__client">
                                            <i className='our-object__indent'>Заказчик:</i>
                                            ООО СЗ «Тектум»
                                        </div>
                                        <div className="our-object__text">
                                        Услуги технического заказчика при строительстве жилого комплекса «Открытие» по ул. Аделя Кутуя г. Казани		
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='object__btn-block'>
                                <Link  to="/" className='object__btn'>
                                    Все объекты
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