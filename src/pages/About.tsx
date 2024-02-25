import { Header, About_block, Preference_about, Slider_block, Contacts_map, Footer, Copyright } from '../components/screens'

const About = () =>{
    return(
        <div className='page'>
            <Header/>
            <About_block/>
            <Preference_about/>
            <Slider_block/>
            <Contacts_map/>
            <Footer/>
            <Copyright/>
        </div>
    )
}
export default About