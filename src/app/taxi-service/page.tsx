import Header from '../header';
import Image from 'next/image';
import Contact from '../component/contact'
import ContactForm from '../component/contact-form'
import PriceTable from '../component/price-table';
import Footer from '../footer';

export default function Intro() {
    return <div>
        <Header />
        <div className='flex flex-col items-center'>
            <p className='pb-20 text-5xl'>{`Taxi Service – 택시서비스`}</p>
            <Image
                src="/banner_4.webp"
                alt="about"
                width={1000}
                height={500}
            // layout='responsive'
            />
            <div className='pt-20'>
                <div className='flex flex-col items-center'>
                    <p className='text-4xl text-red-500'>{'공항 <-> 와이키키내 호텔은 할인 정액 편도 35달러'}</p>
                    <p className='text-2xl'>정상 가격 $50~$55</p>
                </div>
                <p>공항에서 호텔 이동시나 반대일 경우 다른 승객과 합승하는 회사가 대부분 입니다 저희 회사는 절대로 다른 승객과 합승을 하지 않으며 <span className="text-red-500">손님을 단독 이동</span>으로 진행 합니다.</p>
                <p>그리고 투어도 <span className="text-red-500">단독 투어</span>로 진행 됩니다.</p>
                <p>저희 <span className="text-red-500">블로그</span>에는 하와이에 대한 정보가 가득 들어 있습니다 저희 <span className="text-red-500">블로그</span>에 들어 가셔서 유익한 많은 정보 얻어 가시기 바랍니다.</p>
                {/* <div className='bg-slate-300'> */}
                    <p className='text-2xl pb-0 font-semibold bg-slate-300'>택시 서비스</p>
                    <p className='pt-0 font-semibold bg-slate-300'>공항에서 호텔 및 주요 관광지 택시 요금이 하와이에서 가장 저렴한 회사입니다.</p>
                {/* </div> */}
                <p>하와이 택시&투어는 연중무휴로 24시간 항시대기로 빠르고 친절한 서비스를 제공합니다.</p>
                <div className='p-group'>
                    <p>● 공항에서 이용 시</p>
                    <p>{'– 호놀룰루 공항에 도착하여 입국 심사를 마치시고 수화물을 찾으신 후 전화 (808) 479-0000으로  전화 주시거나 카카오톡 ID: hitourtx or 보이스톡을 주시면 약 10분정도 후에 저희 택시가 손님이 계신 장소로 도착합니다.'}</p>
                    <p>{'– 전화하실 때 인원과 특징점을 말씀하여 주시면 더욱 빨리 만날 수 있습니다.'}</p>
                    <p>{'– 국제선 출구 바로 앞 (택시타는 곳이 아닌 일반차량 탑승하는 곳) 에서 잠시 기다리시면 기사가 찾아갑니다.'}</p>
                    <p>{'– 공항-호텔, 호텔-공항을 왕복 정액 35달러에 할인 받으실 수 있습니다 .'}</p>
                </div>
                <div className='p-group'>
                    <p>● 요금</p>
                    <p>{'– 하와이 택시는 하와이 호놀룰루 시의 규정에 의한 미터 요금을 기준으로 합니다.'}</p>
                </div>
                <div className='p-group'>
                    <p>● 가방, 화물 무료 서비스</p>
                    <p>{'– 하와이 택시 & 투어는 가방 및 화물 픽업 시 추가 비용은 받지 않습니다.'}</p>
                    <p>타 로컬 택시 업체의 경우 작은 가방, 큰 가방 비용이 추가로 발생 합니다.</p>
                </div>
                {/* <div className='p-group bg-slate-300'> */}
                    <p className='text-2xl font-semibold bg-slate-300 pb-0'>택시 가격표</p>
                    <p className='font-semibold bg-slate-300 pt-0'>공항에서 호텔 왕복 택시요금과 주요 관광지 투어 요금이 하와이에서 가장 저렴한 요금과 더불어 최상의 서비스를 제공하며 또한 보유중인 모든 차량은 최신 모델의 차량으로만 서비스하고 있습니다.</p>
                {/* </div> */}
                <PriceTable />
                <p>{'※ 공항택시 및 투어를 이용하실때는 반드시 예약을 해주시기 바랍니다. 당일 예약시에는 차량 배차를 못하는 경우가 있을 수 있습니다. (예약은 전화. 카카오톡, 보이스톡, 이메일 모두 가능합니다.)'}</p>
            </div>
            <Contact />
            <ContactForm />
        </div>
        <Footer />
    </div>
}