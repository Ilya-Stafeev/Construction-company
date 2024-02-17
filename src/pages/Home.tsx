import { useState } from "react";

import Header from "../components/screens/header/Header"
import Main_blok from "../components/screens/main_block/Main-block"
import Services from "../components/screens/services/Services"
import Preference from "../components/screens/preference/Preference"
import Our_object from "../components/screens/our_object/Our_object"
import Contacts_map from "../components/screens/contacts_map/Contacts_map"
import Footer from "../components/screens/footer/Footer"
import Copyright from "../components/screens/copyright/Copyright"

import Modal_cons from "../components/modals/modal_cons/Modal_cons"
import Modal from "../components/modals/Modal"

const Home = () => {
    const [modalConsActive, setModalConsActive] = useState<boolean>(false)

    return(     
        <>
            <Header/>
            <Main_blok
                active={modalConsActive}
                setActive={setModalConsActive}
            />            
            <Services/>
            <Preference/>
            <Our_object/>
            <Contacts_map/>
            <Footer/>
            <Copyright/>
            <Modal 
                active={modalConsActive}
                setActive={setModalConsActive}
            >
                <Modal_cons
                    active={modalConsActive}
                    setActive={setModalConsActive}
                />
            </Modal>
        </>
    )
}
export default Home