import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from 'react-intl';
import { useLanguage } from '../context/i18n';
import {useState} from 'react';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import styles from "./Login.module.scss"
import { useNavigate } from "react-router";
import { Container, Row ,Col} from 'react-bootstrap';
import { useIntl } from 'react-intl';
import co from "../assets/colombiaFLG.svg";
import uk from "../assets/ukFLG.svg";

const Login = ()=>{
    const imageUrl = "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D";

    const intl = useIntl();
    const { switchLanguage, locale } = useLanguage();
    const [formValues, setFormvalues]= useState({password:"" , user:""})   
    const [error , setError] = useState("");
    const navigate= useNavigate();
    const handleUserchange= ((e:React.ChangeEvent<HTMLInputElement>) =>{
       const user= e.target.value
       setFormvalues({...formValues,user:user}) ;
    });
    const handlePasswordchange= ((e:React.ChangeEvent<HTMLInputElement>) =>{
       const password= e.target.value
       setFormvalues({...formValues,password:password}) ;
       if ((password.length <= 8 && password.length>=5) || !password )
           {
              setError("")
              console.log("No error")
           }else {
              setError(intl.formatMessage({ id: 'error' }))
              console.log("Error")
           };
    });
    const handleLogin =((event: React.FormEvent)=> {
        event.preventDefault(); // Evita la recarga de la página
         if (error === ""){
            navigate("/main_app");
        }
     }) ; 

    return (
        <Container fluid className={styles.container}>
         <Row className={`d-flex justify-content-center`}>
            <Col md={8} className={`p-4 ${styles.banner}`} style={{ backgroundColor: "#F5EDE9" }}>
               <h2 className="text-center text-dark">TOO GOOD TO GO</h2>
               <h3 className="text-center text-secondary"><FormattedMessage id = "slogan"/></h3>
               <Image src={imageUrl} rounded className={styles.img} />
            </Col> 
           <Col className="bg-white p-8  shadow-md w-96">
             
              
              <Card className={styles.card} >
              <div className="d-flex justify-content-end gap-2">
              <Button
                        variant={"light"}
                        onClick={() => switchLanguage('es')}
                        className={`me-2 ${styles.button} p-2`}
                        disabled={locale === "es"}
                        >
               <img src={co} className={styles.flag} alt="español" />
               </Button>  
              
               <Button
                        variant={"light"}
                        onClick={() => switchLanguage('en')}
                        className={`me-2 ${styles.button} p-2`}
                        disabled={locale === "en"}
                        >
               <img src={uk} className={styles.flag} alt="english" />
               </Button> 
               </div>
                 <Card.Body className={styles.body}>
                       <Form onSubmit= {handleLogin}  >   
                       <Form.Group className="mb-3">
                             <Form.Control  className= {styles.input} 
                                type="user"
                                required 
                                placeholder={ intl.formatMessage({ id: 'username' })} 
                                value={formValues.user}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleUserchange(e)
                                }/>
                       </Form.Group>
  
                       <Form.Group className="mb-3">
                            
                             <Form.Control  className= {styles.input} 
                                type="password"
                                required  
                                placeholder={ intl.formatMessage({ id: 'password' })}
                                value={formValues.password}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handlePasswordchange(e)
                                }/>
                             {error && <Alert variant="danger" className={styles.alert} key={error}>{error}</Alert>}
                       </Form.Group>
                       <p className="text-white text-center"><FormattedMessage id="forgot_password"/></p>            
                       <Button className={`mt-3 w-50 py-2 fw-bold ${styles.loginbutton}`} type="submit"><FormattedMessage id="login"/></Button>
                       </Form>
                 </Card.Body>
           </Card>
        </Col>
     </Row>
    </Container>
    );
}



export default Login; 