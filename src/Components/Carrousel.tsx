import { useState,FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface Images {
    images: string[]

}

const CarouselImg: FC<Images> = ({images}) =>{
    const [index, setIndex] = useState(0);
    console.log(index)
    console.log(images,"Imagenes")
    const handleSelect = (selectedIndex:number) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} variant= "dark">
        {images.map((src,index)=> (
            <Carousel.Item key={index} >
                <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="d-block w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                />
            </Carousel.Item>
        ))}
        
     </Carousel>
    );
  }

export default CarouselImg;
