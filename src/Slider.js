import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination } from 'swiper/modules';
import gallery1 from './img/蘇伍柒_靜理央.jpg';
import gallery2 from './img/哺會通靈_MSK.png';
import gallery3 from './img/巴拉魚_靜理央.png';
import gallery4 from './img/2q1tDJPdiwWvptMoSCvOZp.jpg';
import gallery5 from './img/3XV1kTQFwrSogAlrjaX2Kj.jpg';
import gallery6 from './img/IMG_2352.PNG';
import gallery7 from './img/IMG_2365.PNG';
import gallery8 from './img/CE_靜理央.png';
import gallery9 from './img/寶貝畫給我ㄉ耶.png';
import gallery10 from './img/MicheRoro_偵探怪盜日拾肆 (1).jpg';
import Rio from './img/ebihara_rio.png';
import Jyuushi from './img/mitarai_jyuushi.png';
import Hinata from './img/miyazaki_hinata.png';
import { Controller } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Slider() {

    
    return (
        <div className='sli_al'>
            <Container className='sli'>
        <h1>GALLERY</h1>
        <Swiper slidesPerView={1} spaceBetween={10} 
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
            <SwiperSlide>
                <img src={gallery1} />
                <p className='sli_intro'>@蘇伍柒</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={gallery2} />
                <p className='sli_intro'>@哺會通靈</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={gallery9} />
                <p className='sli_intro'>@ㄐ寶貝🥰</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={gallery3} />
                <p className='sli_intro'>@巴拉魚</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={gallery4} />
                <p className='sli_intro'>@거품</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={gallery5} />
                <p className='sli_intro'>@거품</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={gallery6} />
                <p className='sli_intro'>@茯黎</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={gallery7} />
                <p className='sli_intro'>@茯黎</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={gallery8} />
                <p className='sli_intro'>@CE</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={gallery10} />
                <p className='sli_intro'>@MicheRoro</p>
            </SwiperSlide>
      </Swiper>
      </Container>
        </div>
      
      
    );
  }
  
  export default Slider;