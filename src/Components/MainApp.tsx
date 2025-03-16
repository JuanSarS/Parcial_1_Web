import { useNavigate,Link } from "react-router";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FormattedMessage } from "react-intl";
import styles from "./MainApp.module.scss";
import shop from "../assets/shop.png";
import cart from "../assets/Cart.png";
import menu from "../assets/menu.png";
import { useIntl } from 'react-intl';
const MainApp = () => {
  const intl= useIntl();
  const navigate = useNavigate();

  const handleClick = (page: string) => {
    navigate("/detail",{ state: { title: page } });
  };

  return (
    <Container fluid className={styles.main}>
      <Card className={styles.card}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <div className={styles.iconContainer} onClick={() => handleClick(intl.formatMessage({ id: 'menu' }))}>
              <Image src={menu} className={styles.icon} />
              <p className={styles.text}> 
              <FormattedMessage id="menu"  />
              </p>
            </div>
          </Col>
          <Col className="text-center">
            <div className={styles.iconContainer} onClick={() => handleClick(intl.formatMessage({ id: 'stores' }))}>
              <Image src={shop} className={styles.icon} />
              <p className={styles.text}> 
              <FormattedMessage id="stores" />
              </p>
            </div>
          </Col>
          <Col className="text-center">
            <div className={styles.iconContainer} onClick={() => handleClick(intl.formatMessage({ id: 'cart' }))}>
              <Image src={cart} className={styles.icon} />
              <p className={styles.text}> 
              <FormattedMessage id="cart"  />
              </p> 
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
        <Link to="/" className={styles.links}>
                    <FormattedMessage id="close"/>
                </Link>
        </Row> 
      </Card>
    </Container>
  );
};

export default MainApp;