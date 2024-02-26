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
            <p className='pb-20 text-5xl title'>{`Tour Service – 투어서비스`}</p>
            <Image
                src="/tour_1.webp"
                alt="tour_1"
                width={1000}
                height={500}
            />
            <p>하와이 택시&투어의 모든 투어는 하와이에서 가장 저렴하면서 가장 알찬 투어를 서비스 하는 단독 투어 회사입니다.</p>
            <Image
                src="/tour_2.webp"
                alt="tour_2"
                width={1000}
                height={500}
            />
            <Image
                src="/tour_3.webp"
                alt="tour_3"
                width={1000}
                height={500}
            />
            <p>{'오하후 1일 섬일주 $360(8시간 '}<s>$60/Hr</s>{' -> $45/Hr)'}</p>
            <p>{'다이아몬드헤드뷰포인트, 한국지도마을, 라나이전망대, 브로우홀, 마카프포인트, 와이마날로비치, 바람산(팔리룩아웃), 카일루아비치, 라니카이비치, 호오말루히아보태니컬가든, 마카데미아농장, 쿠알로아비치, 새우트럭(중식), 선셋비치, 샥스코브(푸푸케아비치), 거북이비치(라니케아비치), 할레이바히스릭타운, 파인애플농장. (당일 사정상 2~3포인트는 설명으로 대체할 수 있음)'}
            </p>
            <Image
                src="/tour_4.webp"
                alt="tour_4"
                width={1000}
                height={500}
            />
            <p>{'오하우 동부관광 $180(4시간 '}<s>$65Hr</s>{' -> $45/HR)'}</p>
            <p>{'다이아몬드헤드뷰포인트, 한국지도마을, 라나이전망대, 브로우홀, 마카프포인트, 와이마날로비치, 바람산(팔리룩아웃), 카일루아비치, 라니카이비치, 호오말루히아보태니컬가든'}</p>
            <Image
                src="/tour_5.webp"
                alt="tour_5"
                width={1000}
                height={500}
            />
            <p>{'노쇼어 관광 $270(6시간 '}<s>$60/Hr</s>{' -> $45/HR)'}</p>
            <p>{'호오말루히아보태니컬가든, 마카데미아농장, 쿠알로아비치, 새우트럭(중식), 선셋비치, 샥스코브(푸푸케아비치), 거북이비치(라니 케아비치), 할레이바히스릭타운, 파인애플농장.'}</p>
            <Image
                src="/tour_6.webp"
                alt="tour_6"
                width={1000}
                height={500}
            />
            <p>{'오하우 시내 관광 $100~$150 (2~3시간 '}<s>$65/Hr</s>{' -> $50/Hr)'}</p>
            <p>{'와이키키, 주청사, 이올라니 궁전, 킹하메하메하 동상, 차이나 타운, 탄타로스 와이키키 경관'}</p>
            <Image
                src="/tour_7.webp"
                alt="tour_7"
                width={1000}
                height={500}
            />
            <p className='py-0'>{'와이키키 호텔 출발'}</p>
            <p className='py-0'>{'카일루아 & 라니카이 비치 투어 왕복, $120'}</p>
            <p>{'누아누 팔리 전망대, 카일루아 & 라니카이 비치, 카일루아 타운서 자유시간'}</p>
            <Image
                src="/tour_8.webp"
                alt="tour_8"
                width={1000}
                height={500}
            />
            <p className='pb-0'>{'와이키키 호텔 출발'}</p>
            <p className='pt-0'>{'와이켈레아울렛 관광 - 왕복 시간제한없음 $120'}</p>
            <Image
                src="/tour_9.webp"
                alt="tour_9"
                width={1000}
                height={500}
            />
            <p className='pb-0'>{'와이키키 호텔 출발'}</p>
            <p className='pt-0'>{'하나우마베이 관광- 왕복 시간제한없음 $96 | 입장료 $25 별도'}</p>
            <Image
                src="/tour_10.webp"
                alt="tour_10"
                width={1000}
                height={500}
            />
            <p>{'하와이 유명 골프코스 Pick up & Drop (왕복) 20%할인'}</p>
            <Image
                src="/tour_11.webp"
                alt="tour_11"
                width={1000}
                height={500}
            />
            <p className='pb-0'>{'와이키키 호텔 출발'}</p>
            <p className='pt-0'>{'탄타로스 야경 관광 왕복 $70'}</p>
            <Contact />
            <ContactForm />
        </div>
        <Footer />
    </div>
}