import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import RangeSlider from 'react-bootstrap-range-slider';

function Settings(props){
    const [size, setSize] = useState(7);
    const [percent, setPercent] = useState((props.completion/props.total)*100);

    useEffect(() => {
        var htmlTag = document.getElementsByTagName('html')[0];
        htmlTag.style.fontSize = `${size}px`;
    }, [size]);

    useEffect(()=>{
        setPercent((props.completion/props.total)*100);
    }, [props.completion, props.total])

    return <Container fluid>
        <Row>
          <Col>
            <p style={{fontSize:'25px'}} className='p-3'>{`Each box in the grid is ${props.gridSize[2]} unit size and 1 second in simulator is 1 minute in real life`} </p>
          </Col>  
        </Row>
        <Row className='justify-content-center p-5 m-5'>
            <Col className='col-1'>
                <p style={{fontSize:'25px'}} className='p-3'>Completion&nbsp;&nbsp; </p>
            </Col>
            <Col  className='col-1'>
            <p style={{fontSize:'25px'}} className='p-3'>{percent}% </p>
            </Col>
        </Row>
        <Row className='justify-content-center p-5 m-5'>
            <Col className='col-2'>
                <p style={{fontSize:'25px'}} className='p-3'>Size</p>
                <RangeSlider className='p-3'
                    min={1}
                    max={10}
                    value={size}
                    onChange={e => setSize(e.target.value)}
                />
            </Col>
        </Row>

        <Row className='justify-content-center p-5 m-5'>
            <Col className='col-5'>
                <p style={{fontSize:'25px'}} className='p-3'>Units must be consistent across all the parameters</p>
            </Col>
        </Row>

        <Row className='justify-content-center p-5 m-5'>
        <Col className='col-3' >
                <InputGroup className="mb-3" >
                    <InputGroup.Prepend>
                    <InputGroup.Text id="area" style={{fontSize:'20px'}}>Area (sq units)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl style={{fontSize:'20px'}} 
                        defaultValue={props.state.area}
                        onChange={(e) => e.target.value ? props.dispatch({type:'area', value:e.target.value}) : null}
                        aria-label="area"
                        aria-describedby="area"
                    />
                </InputGroup>
            </Col>
            <Col className='col-3' >
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="impl-width" style={{fontSize:'20px'}}>Impl Width (units)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl style={{fontSize:'20px'}}
                    defaultValue={props.state.implWidth}
                    onChange={(e) => e.target.value ? props.dispatch({type:'implWidth', value:e.target.value}) : null}
                        aria-label="impl-width"
                        aria-describedby="impl-width"
                    />
                </InputGroup>
            </Col>
            <Col className='col-3' >
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="speed" style={{fontSize:'20px'}}>speed (unit/minute)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl style={{fontSize:'20px'}}
                    defaultValue={props.state.speed}
                    onChange={(e) => e.target.value ? props.dispatch({type:'speed', value:e.target.value}) : null}
                        aria-label="speed"
                        aria-describedby="speed"
                    />
                </InputGroup>
            </Col>

            <Col className='col-3' >
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="length" style={{fontSize:'20px'}}>length (unit)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl style={{fontSize:'20px'}}
                    defaultValue={props.state.length}
                    onChange={(e) => e.target.value ? props.dispatch({type:'length', value:e.target.value}) : null}
                        aria-label="length"
                        aria-describedby="length"
                    />
                </InputGroup>
            </Col>
        </Row>
        <Row className='justify-content-center p-5 m-5'>
            <Button variant="outline-primary" onClick={props.traverse}>Start</Button>
        </Row>
    </Container>
}

export default Settings;