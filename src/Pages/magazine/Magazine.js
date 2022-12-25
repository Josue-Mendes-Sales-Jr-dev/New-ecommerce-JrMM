import './magazine.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Magazine=(props)=>{
  return(
    <div className='container' id='magazine'>
      <div className='container cards'>

            
<div className="card card-main">
 <h2>{props.name}</h2>
 <p><strong>{props.price}</strong></p>
 <img className='image img-fluid'src={props.Photo} alt='perfil'/>
 <div className='icon text-center pt-1'>
   <button >
     <a href='/'>
       <FontAwesomeIcon icon={faPlus} />
     </a>
   </button>
 </div>
</div>

<div className="card card-main">
 <h2>{props.name1}</h2>
 <p><strong>{props.price1}</strong></p>
 <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
 <div className='icon text-center pt-1'>
     <button >
         <FontAwesomeIcon icon={faPlus} />
     </button>
 </div>
</div>

<div className="card card-main">
 <h2>{props.name2}</h2>
 <p><strong>{props.price2}</strong></p>
 <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
 <div className='icon text-center pt-1'>
     <button >
         <FontAwesomeIcon icon={faPlus} />
     </button>
     </div>
</div>

</div>


<div className='container cards'>

            
<div className="card card-main">
 <h2>{props.name}</h2>
 <p><strong>{props.price}</strong></p>
 <img className='image img-fluid'src={props.Photo} alt='perfil'/>
 <div className='icon text-center pt-1'>
   <button >
     <FontAwesomeIcon icon={faPlus} />
   </button>
 </div>
</div>

<div className="card card-main">
 <h2>{props.name1}</h2>
 <p><strong>{props.price1}</strong></p>
 <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
 <div className='icon text-center pt-1'>
     <button >
         <FontAwesomeIcon icon={faPlus} />
     </button>
 </div>
</div>

<div className="card card-main">
 <h2>{props.name2}</h2>
 <p><strong>{props.price2}</strong></p>
 <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
 <div className='icon text-center pt-1'>
     <button >
         <FontAwesomeIcon icon={faPlus} />
     </button>
     </div>
</div>

</div>

<div className='container cards'>

            
<div className="card card-main">
 <h2>{props.name}</h2>
 <p><strong>{props.price}</strong></p>
 <img className='image img-fluid'src={props.Photo} alt='perfil'/>
 <div className='icon text-center pt-1'>
   <button >
     <FontAwesomeIcon icon={faPlus} />
   </button>
 </div>
</div>

<div className="card card-main">
 <h2>{props.name1}</h2>
 <p><strong>{props.price1}</strong></p>
 <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
 <div className='icon text-center pt-1'>
     <button >
         <FontAwesomeIcon icon={faPlus} />
     </button>
 </div>
</div>

<div className="card card-main">
 <h2>{props.name2}</h2>
 <p><strong>{props.price2}</strong></p>
 <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
 <div className='icon text-center pt-1'>
     <button >
         <FontAwesomeIcon icon={faPlus} />
     </button>
     </div>
</div>

</div>


        
    </div>
  )
}
export default Magazine