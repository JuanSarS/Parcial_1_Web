import { useEffect, useState } from 'react';
import {Container,Row,Col,Card} from "react-bootstrap";
import { Link } from "react-router";
import CarouselImg from './Carrousel';
import { useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import styles from "./Detail.module.scss";
import { FormattedMessage, useIntl } from 'react-intl';
import shop from "../assets/shop.png";
import cart from "../assets/Cart.png";
import menu from "../assets/menu.png";

interface food{
    Page:string;
    Images:string ;
    Text: string;


}
type foods= food[]  ;  

const Detail = ()=>{
    const intl= useIntl();
    const location = useLocation();
    const title = location.state?.title;
    const [foods, setFood]= useState<foods>([])
    const [images, setImages] = useState<string[]>([]);

    const api_food=" https://my.api.mockaroo.com/web_parcial.json?key=d49a1240";
    useEffect(()=>{
        fetch(api_food).then(data => data.json()).then(data=> (setFood(data) ));
        
    },[]);

    useEffect(() => {
        if (foods) {
       
            if (foods.length > 0) {
                const filteredImages = foods
                    .slice(0, 5)  // Solo tomamos las primeras 5 imágenes (ajústalo según necesites)
                    .map((item) => item.Images);
                setImages(filteredImages);
            }
            
        }
    }, [foods, title]);
    let headerImg: string | null = "";
    switch (title) {
        case intl.formatMessage({ id: 'stores' }):
          headerImg = shop;
          break;
        case intl.formatMessage({ id: 'cart' }):
          headerImg = cart;
          break;
        case intl.formatMessage({ id: 'menu' }):
          headerImg = menu;
          break;
    
        default:
          break;
      }
    
    return (
         <Container fluid className="m-0 p-0">
            
            <Row className={`text-center m-0 p-0 ${styles.menu_header}`}>
                
                <Col xs={"auto"}>
                    {headerImg && (
                        <img
                        className={styles.header_img}
                        src={headerImg}
                        alt="header logo"
                        />
                    )}
                </Col>
                <Col>
                    {title}
                </Col>
                <Col xs={"auto"}>
                    {headerImg && (
                        <img
                        className={styles.header_img}
                        src={headerImg}
                        alt="header logo"
                        />
                    )}
                </Col>  
              </Row>
            <Row>
            {images.length > 0 ? (
            <CarouselImg images={images} />
             ) : (
            <p className="text-center">Cargando imágenes...</p>
             )}
             </Row>
            <Row className="d-flex justify-content-center">
                {foods.length>0  ? (foods.slice(0, 4).map((food, index) => (
                        <Col>
                        <Card key={index} className={`text-center m-2 ${styles.card}`}>
                            <img 
                                src={food.Images} 
                                alt={food.Text} 
                                className="img-fluid rounded" 
                                style={{ maxWidth: "150px", height: "auto" }} 
                            />
                            <p>{food.Text}</p>
                        </Card>
                        </Col>
                    ))) :(  <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>)
                }
            </Row>
            <Row className="d-flex justify-content-center">
                <Link to="/main_app" className={styles.links}>
                    <FormattedMessage id="back"/>
                </Link>
            </Row>
        </Container>
    );
}

export default Detail;