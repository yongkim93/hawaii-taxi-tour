import Header from '../header';
import Image from 'next/image';
import Contact from '../component/contact'
import ContactForm from '../component/contact-form'
import Footer from '../footer';

export default function Intro() {
    return <div>
        <Header />
        <div className='flex flex-col items-center'>
            <Image
                src="/about.webp"
                alt="about"
                width={1000}
                height={500}
            // layout='responsive'
            />
            <div className='pt-20'>
                <p className='text-lg font-semibold'>저희 하와이 택시&투어는 관광객 여러분들을 위해 항상 최상의 서비스를 준비하고 있습니다.</p>
                <p>보다 편안하고 보다 알찬 하와이 관광을 위해 항상 최선을 다하고 있습니다.</p>
                <p>저희 하와이 택시&투어는 하와이 현지에서 운영되고 있는 관광 서비스업 업체이며 택시 서비스와 투어서비스를 병행하며 하와이 한인 관광객분들을 위해 최선을 다하고 있습니다.</p>
                <p>저희 하와이 택시&투어는 신혼여행, 가족여행, 개인관광, 효도관광 등 각종 관광을 서비스 하고 있습니다.</p>
                <p>저희 하와이 택시&투어는 커미션 및 별도 서비스비를 추가하지 않으며 가방 및 화물도 무료로 옮겨 드립니다.</p>
                <p>저희 하와이 택시&투어에서는 모든 결제를 투어가 끝난 후에 결제합니다.</p>
                <p>또한 저희는 개인관광 위주로 7인승 럭셔리벤을 운행 하며 하와이 관광청 PUC 면허 차량 및 호놀룰루시 택시 면허증을 보유한 차량을 운행합니다.</p>
                <p>저희 하와이 택시&투어는 다른 어느 관광 업체  및 택시 업체와 비교하여 전혀 부족함이 없는 업체로써 항상 믿고 맡길 수 있는 업체가 되기 위해 언제나 노력하며 발전해 나가고 있습니다.</p>
                <p>언제 어디서나 하와이 택시&투어는 고객 여러분들의 편안함과 신뢰감을 바탕으로 열심히 하는 업체가 되도록 노력 하겠습니다.</p>
                <p>감사합니다.</p>
            </div>
            <Contact />

            <ContactForm />
        </div>

        <Footer />
    </div>
}