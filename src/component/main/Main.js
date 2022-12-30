import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import './main.css' 


const Main=(props)=>{
      function done(){
        
        const feito=document.getElementById('Feito')
        
        const C=document.getElementById('C')
        const C1=document.getElementById('C1')
        const C2=document.getElementById('C2')

        if(feito.classList.contains('active') && C.classList.contains('card-main')){
          feito.classList.remove('active')
          C1.classList.add('c1')
          C2.classList.add('c2')
      } else{
        feito.classList.add('active')
        C2.classList.remove('c2')
        C1.classList.remove('c1')
        
      }
    }
    function done1(){
        
      const feito1=document.getElementById('Feito1')
      
      const C=document.getElementById('C')
      const C1=document.getElementById('C1')
      const C2=document.getElementById('C2')

      if(feito1.classList.contains('active') && C1.classList.contains('card-main')){
        feito1.classList.remove('active')
        C.classList.add('c')
        C2.classList.add('c2')
    } else{
      feito1.classList.add('active')
      C.classList.remove('c')
      C2.classList.remove('c2')
      
    }
  }
  function done2(){
        
    const feito2=document.getElementById('Feito2')
    
    const C=document.getElementById('C')
    const C1=document.getElementById('C1')
    const C2=document.getElementById('C2')

    if(feito2.classList.contains('active') && C2.classList.contains('card-main')){
      feito2.classList.remove('active')
      C.classList.add('c')
      C1.classList.add('c1')
  } else{
    feito2.classList.add('active')
    C.classList.remove('c')
    C1.classList.remove('c1')
    
  }
  
  
}
function car() {   
  const C=document.getElementById('C')
  C.classList.toggle('jaquetaColor')
  
  if(C.classList.contains('jaquetaColor')){
  C.style.backgroundColor='rgb(96, 255, 189)'}else{
    C.style.backgroundColor='white'
  }
}
function car1(){   

  const C1=document.getElementById('C1')
 
  C1.classList.toggle('jaquetaColor1')

  if(C1.classList.contains('jaquetaColor1')){
    C1.style.backgroundColor='rgb(96, 255, 189)'}else{
      C1.style.backgroundColor='white'
    }
 
}
function car2(){   

  const C2=document.getElementById('C2')
 
  C2.classList.toggle('jaquetaColor2')

  if(C2.classList.contains('jaquetaColor2')){
    C2.style.backgroundColor='rgb(96, 255, 189)'}else{
      C2.style.backgroundColor='white'
    }
 
}
        return(
        <div className="container destaques" id='Main'>
        <h2 className="text-center mt-5 mb-5"> Destaques</h2>

           <div className='container cards'>

            
               <div className="card card-main " id='C' >
                <div className='row'>
                  <div className='col-8'>
                    <h2>{props.name}</h2>
                    <p><strong>{props.price}</strong></p>
                  </div>
                  <div className='col-4 basket'>
                    <button onClick={car}><FontAwesomeIcon icon={faBasketShopping} /></button>
                    </div>

                </div>
                <img className='image img-fluid'src={props.Photo} alt='perfil'/>
                <div className='icon text-center pt-1'>
                  <button  onClick={done}>
                        <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
               </div>
               
               
               <div className="card card-main  " id='C1'>
               <div className='row'>
                  <div className='col-8'>
                    <h2>{props.name1}</h2>
                    <p><strong>{props.price1}</strong></p>
                  </div>
                  <div className='col-4 basket'>
                    <button onClick={car1}><FontAwesomeIcon icon={faBasketShopping} /></button>
                    </div>

                </div>
          
                <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
                <div className='icon text-center pt-1'>
                    <button onClick={done1} >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
               </div>
               
               <div className="card card-main " id='C2'>
               <div className='row'>
                  <div className='col-8'>
                    <h2>{props.name2}</h2>
                    <p><strong>{props.price2}</strong></p>
                  </div>
                  <div className='col-4 basket'>
                    <button onClick={car2}><FontAwesomeIcon icon={faBasketShopping} /></button>
                    </div>

                </div>
                <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
                <div className='icon text-center pt-1'>
                    <button onClick={done2} >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    </div>
               </div>
           </div> 
           

        <div className=' container active'id='Feito'>
          
            <div className='container cards'>   
            
             <div className="card card-main">
               <div className='row'>
               <div className='col-8'>
                 <h2>{props.name}</h2>
                 <p><strong>{props.price}</strong></p>
               </div>
               <div className='col-4 basket'>
                <button >
                <FontAwesomeIcon icon={faBasketShopping} />
                </button>
                
               </div>
               
             </div>
            <img className='image img-fluid'src={props.Photo} alt='perfil'/>
            <div className='icon text-center pt-1'>
            <button  onClick={done}>
              <FontAwesomeIcon icon={faPlus} />
           </button>
         </div>
         </div>

         <div className="card card-main">
               <div className='row'>
               <div className='col-8'>
                 <h2>{props.name}</h2>
                 <p><strong>{props.price}</strong></p>
               </div>
               <div className='col-4 basket'>
                <button >
                <FontAwesomeIcon icon={faBasketShopping} />
                </button>
                
               </div>
               
             </div>
            <img className='image img-fluid'src={props.Photo} alt='perfil'/>
            <div className='icon text-center pt-1'>
            <button  onClick={done}>
              <FontAwesomeIcon icon={faPlus} />
           </button>
         </div>
         </div>

         <div className="card card-main">
               <div className='row'>
               <div className='col-8'>
                 <h2>{props.name}</h2>
                 <p><strong>{props.price}</strong></p>
               </div>
               <div className='col-4 basket'>
                <button >
                <FontAwesomeIcon icon={faBasketShopping} />
                </button>
                
               </div>
               
             </div>
            <img className='image img-fluid'src={props.Photo} alt='perfil'/>
            <div className='icon text-center pt-1'>
            <button  onClick={done}>
              <FontAwesomeIcon icon={faPlus} />
           </button>
         </div>
         </div>
            </div> 

            <div className='container cards'>   
            
            <div className="card card-main">
            <div className='row'>
            <div className='col-8'>
              <h2>{props.name}</h2>
              <p><strong>{props.price}</strong></p>
            </div>
            <div className='col-4 basket'>
             <button >
             <FontAwesomeIcon icon={faBasketShopping} />
             </button>
             
            </div>
            
          </div>
         <img className='image img-fluid'src={props.Photo} alt='perfil'/>
         <div className='icon text-center pt-1'>
         <button  onClick={done}>
           <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      </div>

      <div className="card card-main">
            <div className='row'>
            <div className='col-8'>
              <h2>{props.name}</h2>
              <p><strong>{props.price}</strong></p>
            </div>
            <div className='col-4 basket'>
             <button >
             <FontAwesomeIcon icon={faBasketShopping} />
             </button>
             
            </div>
            
          </div>
         <img className='image img-fluid'src={props.Photo} alt='perfil'/>
         <div className='icon text-center pt-1'>
         <button  onClick={done}>
           <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      </div>

      <div className="card card-main">
            <div className='row'>
            <div className='col-8'>
              <h2>{props.name}</h2>
              <p><strong>{props.price}</strong></p>
            </div>
            <div className='col-4 basket'>
             <button >
             <FontAwesomeIcon icon={faBasketShopping} />
             </button>
             
            </div>
            
          </div>
         <img className='image img-fluid'src={props.Photo} alt='perfil'/>
         <div className='icon text-center pt-1'>
         <button  onClick={done}>
           <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      </div>
         </div>
   
        </div>
           
        <div className=' container active'id='Feito1'>
            <div className='container cards'>   
             <div className="card card-main">
            <div className='row'>
              <div className='col-8'>
                <h2>{props.name1}</h2>
                 <p><strong>{props.price}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>
                
             </div>
            </div>
            <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
            <div className='icon text-center pt-1'>
            <button  onClick={done1}>
     
         <FontAwesomeIcon icon={faPlus} />
     
           </button>
         </div>
         </div>

        <div className="card card-main">
            <div className='row'>
              <div className='col-8'>
                <h2>{props.name1}</h2>
                 <p><strong>{props.price}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
         <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
         <div className='icon text-center pt-1'>
         <button onClick={done1}>
         <FontAwesomeIcon icon={faPlus} />
       </button>
      </div>
          </div>

         <div className="card card-main">
         <div className='row'>
              <div className='col-8'>
                <h2>{props.name1}</h2>
                 <p><strong>{props.price}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
      <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
       <div className='icon text-center pt-1'>
     <button onClick={done1}>
         <FontAwesomeIcon icon={faPlus} />
     </button>
        </div>
       </div>
            </div> 

            <div className='container cards'>

            
               <div className="card card-main">
               <div className='row'>
              <div className='col-8'>
                <h2>{props.name1}</h2>
                 <p><strong>{props.price}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
                <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
                <div className='icon text-center pt-1'>
                  <button  onClick={done1}>
                    
                        <FontAwesomeIcon icon={faPlus} />
                    
                  </button>
                </div>
               </div>
               
               <div className="card card-main">
               <div className='row'>
              <div className='col-8'>
                <h2>{props.name1}</h2>
                 <p><strong>{props.price}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
                <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
                <div className='icon text-center pt-1'>
                    <button onClick={done1}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
               </div>
               
               <div className="card card-main">
               <div className='row'>
              <div className='col-8'>
                <h2>{props.name1}</h2>
                 <p><strong>{props.price}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
                <img className='image img-fluid'src={props.Photo1} alt='perfil'/>
                <div className='icon text-center pt-1'>
                    <button onClick={done1}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    </div>
               </div>
           </div> 
        </div>
        
        <div className=' container active'id='Feito2'>
            <div className='container cards'>   
             <div className="card card-main">
             <div className='row'>
              <div className='col-8'>
                <h2>{props.name2}</h2>
                 <p><strong>{props.price2}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
            <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
            <div className='icon text-center pt-1'>
            <button  onClick={done2}>
     
         <FontAwesomeIcon icon={faPlus} />
     
           </button>
         </div>
         </div>

        <div className="card card-main">
        <div className='row'>
              <div className='col-8'>
                <h2>{props.name2}</h2>
                 <p><strong>{props.price2}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
         <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
         <div className='icon text-center pt-1'>
         <button onClick={done2}>
         <FontAwesomeIcon icon={faPlus} />
       </button>
      </div>
          </div>

         <div className="card card-main">
         <div className='row'>
              <div className='col-8'>
                <h2>{props.name2}</h2>
                 <p><strong>{props.price2}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
      <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
       <div className='icon text-center pt-1'>
     <button onClick={done2}>
         <FontAwesomeIcon icon={faPlus} />
     </button>
        </div>
       </div>
            </div> 

            <div className='container cards'>

            
               <div className="card card-main">
               <div className='row'>
              <div className='col-8'>
                <h2>{props.name2}</h2>
                 <p><strong>{props.price2}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
                <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
                <div className='icon text-center pt-1'>
                  <button  onClick={done}>
                    
                        <FontAwesomeIcon icon={faPlus} />
                    
                  </button>
                </div>
               </div>
               
               <div className="card card-main">
               <div className='row'>
              <div className='col-8'>
                <h2>{props.name2}</h2>
                 <p><strong>{props.price2}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
                <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
                <div className='icon text-center pt-1'>
                    <button onClick={done2}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
               </div>
               
               <div className="card card-main">
               <div className='row'>
              <div className='col-8'>
                <h2>{props.name2}</h2>
                 <p><strong>{props.price2}</strong></p>
              </div>
             <div className='col-4 basket'>
                <button>
                  <FontAwesomeIcon icon={faBasketShopping} />
                </button>   
             </div>
            </div>
                <img className='image img-fluid'src={props.Photo2} alt='perfil'/>
                <div className='icon text-center pt-1'>
                    <button onClick={done2}>
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