import { Navigate, useNavigate } from "react-router";
import { Container, Row ,Col,Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import styles from "./MainApp.module.scss"


const MainApp = ()=> {
    const menu = "../assets/Menu.png";
    const cart = "../assets/Cart.png";
    const shop = "../assets/shop.png";
    const navigate= useNavigate();
    const handleClick=(page:string)=>{
        navigate("/detail",{title:page})

    };
    return (
        <Container className={styles.main}>
         <Card>     
         <Row className= {`d-flex justify-content-center`}>
            <Col> 
              <Row>
              <Image src={shop}/>
              </Row>
              <Row>
                <div onClick={handleClick}>
                    shop
                </div>
              </Row>  
            </Col>
            <Col> 
              <Row>
              <Image src={shop} />
              </Row>
              <Row>
                Shop
              </Row>  
            </Col>
            <Col> 
              <Row>
              <Image src={shop} />
              </Row>
              <Row>
                Shop
              </Row>  
            </Col>

          </Row>  
          </Card>

        </Container>

    );
}

export default MainApp;