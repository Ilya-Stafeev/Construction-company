import { Header, Services_block, Contacts_map, Footer, Copyright } from '../components/screens'

const Services = () =>{
    return(     
        <div className='page'>
            <Header/>
            <Services_block/>
            <Contacts_map/>
            <Footer/>
            <Copyright/>   
        </div>
    )
}
export default Services