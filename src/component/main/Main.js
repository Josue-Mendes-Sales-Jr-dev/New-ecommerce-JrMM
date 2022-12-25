import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './main.css' 


const Main=(props)=>{
      function done(){
        const feito=document.getElementById('Feito')
        feito.classList.toggle('active')
      }
        return(
        <div className="container destaques" id='Main'>
        <h2 className="text-center mt-5 mb-5"> Destaques</h2>

           <div className='container cards'>

            
               <div className="card card-main">
                <h2>{props.name}</h2>
                <p><strong>{props.price}</strong></p>
                <img className='image img-fluid'src={props.Photo} alt='perfil'/>
                <div className='icon text-center pt-1'>
                  <button  onClick={done}>
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
           
           <div className=' container active'id='Feito'>
<div className='container cards'>   
<div className="card card-main">
 <h2>{props.name}</h2>
 <p><strong>{props.price}</strong></p>
 <img className='image img-fluid'src={props.Photo} alt='perfil'/>
 <div className='icon text-center pt-1'>
   <button  onClick={done}>
     
         <FontAwesomeIcon icon={faPlus} />
     
   </button>
 </div>
</div>

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
 <h2>{props.name}</h2>
 <p><strong>{props.price}</strong></p>
 <img className='image img-fluid'src={props.Photo} alt='perfil'/>
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
                  <button  onClick={done}>
                    
                        <FontAwesomeIcon icon={faPlus} />
                    
                  </button>
                </div>
               </div>
               
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
                <h2>{props.name}</h2>
                <p><strong>{props.price}</strong></p>
                <img className='image img-fluid'src={props.Photo} alt='perfil'/>
                <div className='icon text-center pt-1'>
                    <button >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    </div>
               </div>
           </div> 
            </div>
           
           
         

           </div>     

    )
}
export default Main