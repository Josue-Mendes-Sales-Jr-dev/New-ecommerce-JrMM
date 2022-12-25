import Carousel from 'react-bootstrap/Carousel';
import Photo from '../img/img-h-01.jpg'
import Photo01 from '../img/img-h-02.jpg'
import Photo02 from '../img/img-h-03.jpg'
import './slide.css'

function Slider() {
  return (
    <div className='container box-slider mt-5 mb-5' id='slider'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 image-slider"
            src={Photo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-slider"
            src={Photo01}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-slider"
            src={Photo02}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;