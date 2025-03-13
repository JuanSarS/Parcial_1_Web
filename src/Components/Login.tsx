import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import styles from "./Login.module.scss"
import { useNavigate } from "react-router";
import { Container, Row ,Col} from 'react-bootstrap';

const Login = ()=>{
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
              setError("Constraseña no válida")
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
                 <Card.Body >
                    <Card.Title>Log in</Card.Title>
                       <Form onSubmit= {handleLogin}>   
                       <Form.Group>
                             <Form.Label >Usuario</Form.Label>
                             <Form.Control  className= {styles.input} 
                                type="user"
                                required  
                                value={formValues.user}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleUserchange(e)
                                }/>
                       </Form.Group>
  
                       <Form.Group>
                             <Form.Label>Contraseña</Form.Label>
                             <Form.Control  className= {styles.input} 
                                type="password"
                                required  
                                value={formValues.password}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handlePasswordchange(e)
                                }/>
                             {error && <Alert variant="danger" key={error}>{error}</Alert>}
                       </Form.Group>
  
                       <Button className="mt-2" type="submit">Log In</Button>
                       </Form>
                 </Card.Body>
           </Card>
        </Col>
     </Row>
    </Container>
    );
}



export default Login; 