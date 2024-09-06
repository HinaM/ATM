import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Member.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sei from './img/arakawa_sei.png';
import Rio from './img/ebihara_rio.png';
import Jyuushi from './img/mitarai_jyuushi.png';
import Hinata from './img/miyazaki_hinata.png';



function Members() {
  return (
    <div className='members'>
        <Container>
            
            <Row>
                <Col xs={12} className="me_12">
                    <h1 className='me_h1'>MEMBERS</h1>
                </Col>
            </Row>
            <Row className='mem_imgs'>
                <Col xs={6} md={3} className="me_block">
                    <div className='me_block_img one'>
                        <img src={Sei}></img>
                    </div>
                </Col>
                <Col xs={6} md={3} className="me_block">
                    <div className='me_block_img two'>
                        <img src={Rio}></img>
                    </div>
                </Col>
                <Col xs={6} md={3} className="me_block">
                    <div className='me_block_img three'>
                        <img src={Jyuushi}></img>
                    </div>
                </Col>
                <Col xs={6} md={3} className="me_block">
                    <div className='me_block_img four'>
                        <img src={Hinata}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    
  );
}

export default Members;