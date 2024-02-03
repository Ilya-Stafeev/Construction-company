import { useState } from "react";

import Header from "../components/screens/header/Header"
import Main_blok from "../components/screens/main_block/Main-block"
import Modal_cons from "../components/interfaces/modals/modal_cons/Modal_cons"
import Modal from "../components/interfaces/modals/Modal"

const Home = () => {
    const [modalConsActive, setModalConsActive] = useState<boolean>(false)

    return(     
        <>
            <Header/>
            <Main_blok
                active={modalConsActive}
                setActive={setModalConsActive}
            />
            <Modal 
                active={modalConsActive}
                setActive={setModalConsActive}
            >
                <Modal_cons
                    setActive={setModalConsActive}
                />
            </Modal>            
            <div>Дом</div>
        </>
    )
}
export default Home