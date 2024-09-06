import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Container.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGO_MASKER from './img/LOGO_MASKER.png';
import MEMBERS_MASKER from './img/MEMBERS_MASKER.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function ResponsiveExample() {
  return (
    <div className='con-top'>
        <Container>
            
            <Row>
                <Col xs={12} md={5} className="intro">
                    <div>
                        <img src={LOGO_MASKER}></img>
                    </div>
                    <div>
                        <h3>月光教堂下的假面舞會</h3>
                    </div>
                    <div>
                        <p>由荒川靜帶領的具有神秘風格的團體。團體運用面具下掩藏令人遐想的特點，帶給觀眾多變的表演。提供真誠且多樣的粉絲福利。在媒體曝光方面以廣告、時裝模特兒、綜藝節目嘉賓、談話性節目及劇團演出等能發揮表現自我特色的工作為主。代表色是<span className='masker_color'>海軍藍</span>。</p>
                    </div>
                    <div className='logobtn'>
                        <div className='circle'><FontAwesomeIcon icon={ faFacebookF } /></div>
                        <div className='circle'><FontAwesomeIcon icon={ faEnvelope } /></div>
                        <div className='circle'><FontAwesomeIcon icon={ faMasksTheater } /></div>
                        <div className='circle'><FontAwesomeIcon icon={ faCirclePlay } /></div>
                    </div>
                </Col>
                <Col xs={12} md={7} className="memimg">
                    <img src={MEMBERS_MASKER}></img>
                </Col>
            </Row>
        </Container>
    </div>
    
  );
}

export default ResponsiveExample;