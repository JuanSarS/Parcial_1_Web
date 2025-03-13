import {Container,Row,Col} from "react-bootstrap";

const MainView= ()=> {

    return( 
        <Container fluid ="md" className="text-center py-3">
           <Row className= {`d-flex justify-content-center`}>
            <Col ><h1>S</h1></Col>
            <Col ><h1>I</h1></Col>
            <Col ><h1>U</h1></Col>
           
            </Row>
        </Container>
    );

     
} 
export default  MainView;