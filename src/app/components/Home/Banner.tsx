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
}

export const Banner: FC<Props> = ({className}) => {
  const [show, setShow] = useState<boolean>(false)
  const [announ, setAnnoun] = useState<any>([{id:1, url:'https://cdn.yenicaggazetesi.com.tr/news/646611.jpg'},{id:1, url:'https://cdn.yenicaggazetesi.com.tr/news/716643.jpg'},
  {id:1, url:'https://sendikaorg.fra1.digitaloceanspaces.com/wp-content/uploads/2022/01/03034038/neriman-usta-tablo-1.png'}])
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
        {announ?.map((ann:any) => {
          return  (
            <SwiperSlide key={ann.id}>
              <div
               
                
                className={`card bgi-no-repeat bgi-size-cover max-w-100p ${className}` }
                style={{
    
                  backgroundPosition: '100% 100%',
                  backgroundSize: '100% 100%',
                  backgroundImage: `url(${ann.url})`,
                  height: '400px',
                  minHeight: '400px',
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
              </div>
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
