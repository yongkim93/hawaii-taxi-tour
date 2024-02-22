'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";

export default function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className='flex flex-row w-full'>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <Image
                            src="/banner_1.webp"
                            alt="logo_1"
                            width={500}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                    <div className="embla__slide">
                        <Image
                            src="/banner_2.webp"
                            alt="logo_2"
                            width={500}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                    <div className="embla__slide">
                        <Image
                            src="/banner_3.webp"
                            alt="logo_3"
                            width={500}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
