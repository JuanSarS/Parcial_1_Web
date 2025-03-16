import { Navigate, useNavigate } from "react-router";
import { Container, Row ,Col,Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {IntlProvider} from 'react-intl';
import styles from "./MainApp.module.scss";
import shop from "../assets/shop.png";
import cart from "../assets/Cart.png";
import menu from "../assets/menu.png";

import { FormattedMessage } from 'react-intl';
const MainApp = ()=> {
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
              <Image src={menu}/>
              </Row>
              <Row>
                <div onClick={handleClick}>
                    <FormattedMessage id ="menu"/>
                </div>
              </Row>  
            </Col>
            <Col> 
              <Row>
              <Image src={shop} />
              </Row>
              <Row>
              <FormattedMessage id ="stores"/>
              </Row>  
            </Col>
            <Col> 
              <Row>
              <Image src={cart} />
              </Row>
              <Row>
              <FormattedMessage id ="cart"/>
              </Row>  
            </Col>

          </Row>  
          </Card>

        </Container>

    );
}

export default MainApp;