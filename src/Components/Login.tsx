import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from 'react-intl';
import { useLanguage } from '../context/i18n';
import {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import styles from "./Login.module.scss"
import { useNavigate } from "react-router";
import { Container, Row ,Col} from 'react-bootstrap';
import { useIntl } from 'react-intl';
import co from "../assets/colombiaFLG.svg";
import uk from "../assets/ukFLG.svg";

const Login = ()=>{
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
       if (password.length <= 8 && password.length>=5)
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
           <Col className={styles.container} >
        
           </Col> 
           <Col className="bg-white p-8 rounded shadow-md w-96">
             
              
              <Card className={styles.card} >
              <div className="d-flex justify-content-end gap-2">
              <Button
                        variant={"light"}
                        onClick={() => switchLanguage('es')}
                        className={`me-2 ${styles.button}`}
                        disabled={locale === "es"}
                        >
               <img src={co} className={styles.flag} alt="español" />
               </Button>  
              
               <Button
                        variant={"light"}
                        onClick={() => switchLanguage('en')}
                        className={`me-2 ${styles.button}`}
                        disabled={locale === "en"}
                        >
               <img src={uk} className={styles.flag} alt="english" />
               </Button> 
               </div>
                 <Card.Body >
                    <Card.Title><FormattedMessage id="login"/></Card.Title>
                       <Form onSubmit= {handleLogin}>   
                       <Form.Group>
                             <Form.Label ><FormattedMessage id="username"/></Form.Label>
                             <Form.Control  className= {styles.input} 
                                type="user"
                                required  
                                value={formValues.user}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleUserchange(e)
                                }/>
                       </Form.Group>
  
                       <Form.Group>
                             <Form.Label><FormattedMessage id="password"/></Form.Label>
                             <Form.Control  className= {styles.input} 
                                type="password"
                                required  
                                value={formValues.password}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handlePasswordchange(e)
                                }/>
                             {error && <Alert variant="danger" key={error}>{error}</Alert>}
                       </Form.Group>
  
                       <Button className="mt-2" type="submit"><FormattedMessage id="login"/></Button>
                       </Form>
                 </Card.Body>
           </Card>
        </Col>
     </Row>
    </Container>
    );
}



export default Login; 