import { useState } from "react";

import Header from "../components/screens/header/Header"
import Main_blok from "../components/screens/main_block/Main-block"
import Services from "../components/screens/services/Services"
import Preference from "../components/screens/preference/Preference"
import Our_object from "../components/screens/our_object/Our_object"

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
                    active={modalConsActive}
                    setActive={setModalConsActive}
                />
            </Modal>
            <Services/>
            <Preference/>
            <Our_object/>
            <div>Дом</div>
        </>
    )
}
export default Home