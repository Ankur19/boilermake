import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RangeSlider from 'react-bootstrap-range-slider';

function Settings(props){
    const [size, setSize] = useState(1);

    return <Container fluid>
        <Row>
            <Col>
                <p style={{fontSize:'25px'}}>Size</p>
            </Col>
            <Col>
                <RangeSlider
                value={size}
                onChange={e => setSize(e.target.value)}
          />
            </Col>
            <Col></Col>
        </Row>
    </Container>
}

export default Settings;