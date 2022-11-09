import {FC, Key, useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'

import {Link} from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import {Navigation, Pagination, Autoplay} from 'swiper'

import { toAbsoluteUrl } from '../../../_theme/helpers'

type Props = {
  className: string
  text: string
  textClass: string
  buttonText: string
  buttonClass: string
}

export const Banner: FC<Props> = ({className, text, textClass, buttonText, buttonClass}) => {
  const [show, setShow] = useState<boolean>(false)
  const [announ, setAnnoun] = useState<any>([1,2,3,4,5])
  const [swiper, setSwiper] = useState<any>(null)
  const [height, setHeight] = useState(false)
  useEffect(() => {}, [])
  const pagination = {
    clickable: true,
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoHeight={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{delay: 2500}}
        onSwiper={(s) => {
          setSwiper(s)
        }}
      >
        {announ?.map((announ: any, index: Key | null | undefined) => {
          return  (
            <SwiperSlide key={index}>
              <Link
                to='/duyurular/detail'
                state={announ}
                onClick={() => {
                  setShow(!show)
                }}
                
                className={`card bgi-no-repeat bgi-size-cover max-w-100p ${className}`}
                style={{
    
                  backgroundPosition: '100% 100%',
                  backgroundSize: '100% 100%',
                  backgroundImage: `url(${toAbsoluteUrl('/media/misc/city.png')})`,
                  height: 'auto',
                  minHeight: '300px',
                }}
              >
                {/* <Link
                    to='/duyurular/detail'
                    state={announ}
                 
                  
                    onClick={() => {
                      setShow(!show)
                    }}
                  > */}
                {/* <img src={toAbsoluteUrl('/media/misc/city.png')}  /> */}
                {/* </Link> */}

                {/* begin::Body */}

                {/* <div
                  className=' d-flex flex-column justify-content-center ps-lg-15'
                  style={{
                    position: 'absolute',
                    top: '45%',
                  }}
                >
                  <h3
                    className={`${textClass} fs-1 fw-boldest mb-4 mb-lg-8 text-white`}
                    dangerouslySetInnerHTML={{__html: announ?.title}}
                    style={{}}
                  ></h3>
                </div> */}
                <div className='m-0' style={{position: 'absolute', bottom: '10px', left: '15px'}}>
                  {/* eslint-disable-next-line */}
                </div>
              </Link>
            </SwiperSlide>
          ) 
        })}
      </Swiper>

      {/* <Main
        show={show}
        handleClose={() => {
          setShow(false)
        }}
      /> */}
    </>
  )
}
