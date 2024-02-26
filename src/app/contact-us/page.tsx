import Header from '../header';
import Image from 'next/image';
import Contact from '../component/contact'
import ContactForm from '../component/contact-form'
import Footer from '../footer';
import HeaderMenu from '../component/header-menu';

export default function Intro() {
    return <div>
        <Header />
        <HeaderMenu />
        <div className='flex flex-col items-center'>
            <p className='text-5xl title'>{'Contact Us – 고객센터'}</p>
            <div className='flex flex-row items-start'>
                <Contact />
            </div>
            <ContactForm />
        </div>
        <Footer />
    </div>
}