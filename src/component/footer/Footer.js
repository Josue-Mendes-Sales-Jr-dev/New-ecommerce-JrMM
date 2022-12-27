import './footer.css'

const Footer=()=>{
    return(
        <div className="footer">
                <div className='container footer-text'>
                    
                    <div className="container footer-link"> 
                    <h4 className='mb-4'>Lojas</h4>
                    <a href='/#'>JM Pernambuco</a>
                    <a href='/#'>JM Piauí</a>
                    <a href='/#'>JM São Paulo</a>
                    <a href='/#'>JM Rio de janeiro</a>
                    </div>
                    
                    <div className="container footer-link ">
                    <h4 className='mb-4'>Acessórios</h4>
                    <a href='/#'>Oculos</a>
                    <a href='/#'>Bermudas</a>
                    <a href='/#'>Jaquetas</a>
                    <a href='/#'>Calças</a>

                    </div>
                    
                    <div className="container footer-link">
                    <h4 className='mb-4'>Site</h4>
                    <a href='/#'>Home</a>
                    <a href='#destaques'>Destaques</a>
                    <a href='#new'>Novos</a>
                    <a href='#contacts'>Contatos</a>
                    </div>
                    
                    <div className="container footer-link">
                    <h4 className='mb-4'>Parceiros</h4>
                    <a href='/#'>GH sites</a>
                    <a href='/#'>Magazine Gh</a>
                    <a href='/#'>Codizilland</a>
                    <a href='/#'>Create 02</a>
                    </div>
                </div>
        
        </div>
    )
}
export default Footer