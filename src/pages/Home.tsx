import { useState } from "react";

import { Header, Main_blok, Services_home, Preference, Our_object, Contacts_map, Footer, Copyright } from '../components/screens'

import Modal_cons from "../components/modals/modal_cons/Modal_cons"
import Modal from "../components/modals/Modal"

const Home = () => {
    const [modalConsActive, setModalConsActive] = useState<boolean>(false)

    return(     
        <div className="home">
            <Header/>
            <Main_blok
                active={modalConsActive}
                setActive={setModalConsActive}
            />
            <Services_home/>
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
        </div>
    )
}
export default Home