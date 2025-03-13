import { useEffect, useState } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import CarouselImg from './Carrousel';
interface food{
    Page:string;
    Images:string ;
    Text: string;


}
interface foods{
    [key:string]:food[]  ;  
}
interface props {
    title?:string
}
const Detail = ({title}:props)=>{
    const [foods, setFood]= useState<foods>([])
    const api_food=" https://my.api.mockaroo.com/web_parcial.json?key=d49a1240";
    const images:string[]=[]
    useEffect(()=>{
        fetch(api_food).then(data => data.json()).then(data=> (setFood(data) ))
       
    },[]);
    return (
        <Container>
         Title 
        <CarouselImg images={images}/>
        <Row className= {`d-flex justify-content-center`}>
      

        </Row>
        
        </Container>
    );
}

export default Detail;