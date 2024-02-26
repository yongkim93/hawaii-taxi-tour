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
        <div className='flex flex-col items-center tour-service'>
            <Image
                src="/event.webp"
                alt="event"
                width={1000}
                height={500}
            />
            <div className="flex flex-col items-center">
                <p className="text-4xl text-red-500 title">
                    {`공항 <-> 와이키키내 호텔은 할인 정액 편도 35달러`}</p>
                <p className="text-2xl sub-title">{`정상가격 $50~$55`}</p>
                <div className='flex flex-col item-start'>
                    <p className="text-2xl sub-title">공항에서 호텔 이동시나 반대일 경우 다른 승객과 합승하는 회사가 대부분 입니다 저희 회사는
                        절대로 다른 승객과 합승을 하지 않으며 <span className="text-red-500">손님을 단독 이동으로 진행 합니다.</span></p>

                    <p className="text-2xl sub-title">그리고 투어도 <span className="text-red-500">단독 투어</span>로 진행 됩니다.</p>

                    <p className="text-2xl sub-title">저희 <span className="text-red-500">블로그</span>에는 하와이에 대한 정보가 가득 들어 있습니다 저희 <span className="text-red-500">블로그</span>에 들어 가셔서 유익한 많은 정보 얻어 가시기 바랍니다.</p>
                </div>
            </div>

            <Contact />
        </div>
        <Footer />
    </div>
}