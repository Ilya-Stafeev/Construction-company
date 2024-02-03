import { useState } from 'react';
import './Modal_cons.scss'

interface ModalProps {
    setActive: React.Dispatch<React.SetStateAction<boolean>>;    
}

const Modal_cons: React.FC<ModalProps> = ({ setActive }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [showNameError, setShowNameError] = useState(false);
    const [showPhoneError, setShowPhoneError] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleCloseModal = () => {
        setActive(false)
    };

    const handleSubmit = () => {
        if (!name) {
          setShowNameError(true);
        } else {
          setShowNameError(false);
        }
    
        if (!phone) {
          setShowPhoneError(true);
        } else {
          setShowPhoneError(false);
        }
    
        if (!name || !phone) {
          setShowErrorMessage(true);
          setShowSuccessMessage(false);
          return;
        }

        setName('');
        setPhone('');

        setShowErrorMessage(false);
        setShowSuccessMessage(true);
      };
    return(     
        <>  
            <div className="modal__content">
                <div className="modal__body">
                    <button className='modal__btn' onClick={handleCloseModal}>×</button>
                    <h3 className='modal__title'>Получить консультацию</h3>
                    <h4 className='modaal__subtitle'>Отправьте заявку и мы свяжемся с Вами в течение 4 часов (в рабочее время)</h4>
                    <div className='modal__form'>
                        <div className='modal__field'>                 
                            <input 
                                className='modal__input'    
                                type="text"  
                                placeholder='Имя'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {showNameError && <span className="modal__required">Поле обязательно для заполнения.</span>}
                        </div> 

                        <div className='modal__field'>  
                            <input 
                                className='modal__input' 
                                type="text" 
                                placeholder='Телефон'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {showPhoneError && <span className="modal__required">Поле обязательно для заполнения.</span>}
                        </div>

                        <textarea className='modal__textarea' placeholder='Вопрос (необязательно)'/>
                        <input className='modal__btn-send' type="submit" value="Отправить" onClick={handleSubmit}/>
                    </div>

                    {showErrorMessage && (
                        <div className="modal__message">    
                            Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.
                        </div>
                     )}

                    {showSuccessMessage && (
                        <div className="modal__message success" >
                            Заявка успешно отправлена.
                        </div>
                    )}

                    <p className='modal__policy '>
                        Нажимая на кнопку, Вы даете согласие на обработку своих персональных данных согласно
                        <a className='modal__policy-link' href="/">политике конфиденциальности</a>
                    </p>
                </div>               
            </div>   
        </>
    )
}
export default Modal_cons