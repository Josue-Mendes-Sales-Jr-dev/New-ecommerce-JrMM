import './contact.css'

const Contact=(props)=>{
    return(
        <div className='container box-ct mb-1 mt-5' id="contact">
           
            <div className='container ct row'>

                <div className='container ct-contact col-md-6'>

                  <div className="container ct-social">
                  <h2>Fone: </h2>
                    <a href='/#'>(81) 99009-9889</a>
                  </div>

                  <div className="container ct-social">
                    <h2>Email: </h2>
                    <a href='/#'>jmcompany@gmail.com</a>
                  </div>

                  <div className="container ct-social">
                    <h2>Facebook </h2>
                    <a href='/#'>JM_modamasculina</a>
                  </div>

                  <div className="container ct-social">
                    <h2>Instagram</h2>
                    <a href='/#'>@JM.Moda_masculina</a>
                  </div>

                  <div className="container ct-social">
                    <h2>Twiter</h2>
                    <a href='/#'>@JM.M.Masculina</a>
                 </div>

                </div>

                <div className='conteiner form-ct col-md-6'>
                      <h2 className='text-center'>Formulário</h2>
                       <form>
                        <label htmlFor='#name'>Name:</label>
                        <input id='name' type='text' placeholder='Digite seu nome'/>
                        <label htmlFor='#email'>Email:</label>
                        <input id='email' type='text' placeholder='Digite seu email'/>
                        <label htmlFor='#text' >Write:</label>
                        <input id='white' type='text' placeholder='Escreva..'/>
                        <input type='button' id='btn-input' value='enviar'/>
                       </form>
                 </div>
                   
            </div>

        </div>
    )
}

export default Contact