import { useState,FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface Images {
    images: string[]

}

const CarouselImg: FC<Images> = ({images}) =>{
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((src,index)=> (
            <Carousel.Item >
                <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="d-block w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                />
            </Carousel.Item>
        ))}
        
        <Carousel.Item>
          
        </Carousel.Item>
        <Carousel.Item>
        
        </Carousel.Item>
      </Carousel>
    );
  }

export default CarouselImg;
