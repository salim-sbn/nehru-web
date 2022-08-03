import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import CoursesOffered from '../components/home/CoursesOffered'
import { Notices } from '../components/home/Notices'
import { Results } from '../components/home/Result'

import { ContactUsInner } from '../components/contactUsInner'
import { Testimonials } from '../components/home/testimonials'
import styles from '../components/layout.module.css'
import Slider from 'react-slick'

const images = [{
  alt: 'banner1',
  imagePath: '/images/banner1.jpg',
},
{
  alt: 'banner2',
  imagePath: '/images/banner2.jpg',
},
{
  alt: 'banner3',
  imagePath: '/images/banner3.jpg',
}, {
  alt: 'banner4',
 imagePath: '/images/banner4.jpg',
 
}, {
  alt: 'banner5',
  imagePath: '/images/banner5.jpg',
  
 }]

export default function Home () {
  const [name, setName] = useState(false)
  const settings = {
    infinite: true,
        speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  }
  return (
        <Layout>
            <Head>
                <title>{'Nehru Institute | Home'}</title>
            </Head>
            <section className={'z-0'}>
            <Slider {...settings}>
                {images.map((item) => (
                    <img key={item.imagePath} src={item.imagePath} alt={item.alt} className={'home-img'}/>
                ))}
            </Slider>
            </section>
            <section>
                <br/>
               
                <Notices/>
            </section>
            <section>
                <br/>
                {/* <h1>GGGG</h1> */}
                <Results/>
            </section>
            <section>
                <br/>
                <CoursesOffered/>
            </section>
            <section>
                <br/>
                <Testimonials/>
            </section>
            <br/>
            <div>
                <div className={'flex flex-row justify-center items-center'}>
                    <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                        Locate
                    </text>
                    <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
                        {'Us'}
                    </text>
                    {/* <text className={'text-3xl subpixel-antialiased font-semibold'}> */}
                    {/*    Locate Us */}
                    {/* </text> */}
                </div>
                

                <iframe
                    title='Way to Nehru Institute of Information Technology,Araria'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.93527470108!2d87.46570975105293!3d26.133653299400795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef8961e7858c49%3A0x1ab340d366e709d7!2sNehru%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1622487706681!5m2!1sen!2sin"
                    id='gmap_canvas'
                    className='google-map'
                    frameBorder='0'
                    scrolling='no'
                    marginHeight={0}
                    marginWidth={0}
                />
            </div>
            <br/>
            <ContactUsInner/>
        </Layout>
  )
}
