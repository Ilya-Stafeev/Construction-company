import { Header, Contacts_block, Contacts_map, Footer, Copyright } from '../components/screens'

const Contacts = () =>{
    return(
        <div className='page'>
            <Header/>
            <Contacts_block/>
            <Contacts_map/>
            <Footer/>
            <Copyright/>
        </div>
    )
}
export default Contacts