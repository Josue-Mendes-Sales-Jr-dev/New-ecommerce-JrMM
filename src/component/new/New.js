import Pants from '../img/bermuda01.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './new.css'

const New=(props)=>{
    return(
       <div className='contaner-fluid New' id='new'>
               <h2 className="text-center mt-5 mb-5">Tendências</h2>
          <div className='container card-new' >
              <Card  className='cardd'>
               <Card.Img variant="top" className='image-Card' src={Pants}/>
                <Card.Body>
                 <Card.Title>{props.title}</Card.Title>
                  <Card.Text>
                 {props.price}
                  </Card.Text>
               <Button variant="primary" id='btn-comprar'>Comprar</Button>
                    </Card.Body>
                  </Card>
                  <Card className='cardd'>
               <Card.Img variant="top" className='image-Card' src={Pants}/>
                <Card.Body>
                 <Card.Title>{props.title1}</Card.Title>
                  <Card.Text>
                 {props.price1}
                  </Card.Text>
               <Button variant="primary" id='btn-comprar'>Comprar</Button>
                    </Card.Body>
                  </Card>
                  <Card className='cardd'>
               <Card.Img variant="top" className='image-Card' src={Pants}/>
                <Card.Body>
                 <Card.Title>{props.title2}</Card.Title>
                  <Card.Text>
                 {props.price2}
                  </Card.Text>
               <Button variant="primary" id='btn-comprar'>Comprar</Button>
                    </Card.Body>
                  </Card>
                  <Card className='cardd'>
               <Card.Img variant="top" className='image-Card' src={Pants}/>
                <Card.Body>
                 <Card.Title>{props.title3}</Card.Title>
                  <Card.Text>
                 {props.price3}
                  </Card.Text>
               <Button variant="primary" id='btn-comprar'>Comprar</Button>
                    </Card.Body>
                  </Card>
          
          </div>
       </div>
    )
}
export default New