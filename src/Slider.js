import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Slider() {

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  


  var img_list = [
    {id: 0,name: gallery1,artist: "蘇伍柒"},
    {id: 1,name: gallery2,artist: "哺會通靈"},
    {id: 2,name: gallery3,artist: "巴拉魚"},
    {id: 3,name: gallery4,artist: "거품"},
    {id: 4,name: gallery5,artist: "거품"},
    {id: 5,name: gallery6,artist: "茯黎"},
    {id: 6,name: gallery7,artist: "茯黎"},
    {id: 7,name: gallery8,artist: "CE"},
    {id: 8,name: gallery9,artist: "ㄐ寶貝🥰"},
    {id: 9,name: gallery10,artist: "MicheRoro"}
  ];

  const [countimg, setCountimg] = useState(img_list[0].name);

  function handleShow(breakpoint,n) {
    setFullscreen(breakpoint);
    setShow(true);
    setCount(n);
    setCountimg(img_list[n].name);
  }

  
  
  
    
    return (
        <div className='sli_al'>
            <Container className='sli'>
        <h1 className='sl_h1'>GALLERY</h1>
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
            
            
            {img_list.map((gallery, index) => 
              <SwiperSlide key={index} onClick={() => handleShow(true,index)}>
                <img src={gallery.name} />
                <p className='sli_intro'>@{gallery.artist}</p>
              </SwiperSlide>
              
            )}

            

      </Swiper>
      </Container>
      
      
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          Modal body content{count}
          
          <img src={countimg} />
          
          
            
          
        </Modal.Body>
      </Modal>

      </div>
      
      
    );
  }
  
  export default Slider;