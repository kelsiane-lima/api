import './styles.css'
import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
return(
    <>


<section>
    <div className="container-nav" id="container-nav">
    <header>
    <nav>   

            <img src={require('../../img/text10.png')} align="left" alt="logo"/>
          <a href="#container-nav">Página inicial</a>
          <a href="#container-home">Sobre</a>
          <a href="#footer">Contato</a>
          <Link to="/login"><button>ACESSAR</button></Link>
          
      </nav>
      </header>
    </div> 
    <div className="container-home" id="container-home">
        <h1>TURBINE O CONTROLE DE ESTOQUE DA SUA EMPRESA</h1>
        <h2>Todos os produtos da sua empresa sob controle para você acessar de onde você estiver.</h2>
        <button>COMECE A USAR GRATUITAMENTE</button>    
    </div>
    
    <div className="image" >
    <img src={require('../../img/mokaup.PNG')} height="50%" width="50%" alt="mokaup"/>
    </div>
   </section>
   <section>
       <div className="container-funcionalidades">
        <i class="fa fa-cog"  aria-hidden="true" height="50%" width="50%"></i>   

        <h1>Funcionalidades</h1>
        
        <div className="container-grid">
        <div>
            <img src={require('../../img/ilustra-fornecedores.png')} alt="fornecedores"/>
            <h2>Cadastro de Foenecedores</h2>
            <p>Cadastrar seus fornecedores, fabricantes ajudará você <br></br>
                 a conhecer quem são seus melhores parceiros na hora de comprar.</p>
        
        </div>
        <div>
            <img src={require('../../img/ilustra-produtos.png')} alt="produtos"/>
            <h2>Cadastro de Produtos</h2>
            <p>Todos os produtos sob controle é o primeiro passo <br></br>
                para turbinar a gestão de estoque da sua empresa.</p>

            </div>
            <div>
                <img src={require('../../img/ilustra-relatorios.png')} alt="ilustra-relatorios"/>
                <h2>Relatórios</h2>
                <p>Registre as movimentações de entrada e saída de <br></br>
                    produtos do seu estoque de forma rápido e fácil.</p>
    
                </div>
        </div>
    </div>
   </section>
   <div className="footer" id="footer">
       <h1>Fale conosco</h1>
       
       <i class="fa fa-map-marker pr-10 text-default"></i> <a href="https://www.google.com.br/maps/place/Reserva+Extrativista+Prainha+Do+Canto+Verde/@-4.316114,-37.9514284,13z/data=!4m5!3m4!1s0x7b8660a806a763b:0xdb174ea328c034a8!8m2!3d-4.3172266!4d-37.9317999">Endereço: Prainha do Canto Verde,
        Beberibe, Ceará, 62840-000 Brasil.</a>  
    <br></br>
    
    <i class="fa fa-map-marker pr-10 text-default"></i> <a href="https://api.whatsapp.com/send?phone=5588981283542&text=Mande%20sua%20mensagem!" >Celular: (88) 981293542</a>
    <br></br>

    <i class="fa fa-map-marker pr-10 text-default"></i> <a href="mailto:kelsianesilva74@gmail.com?subject=Hello">Email: kelsianesilva74@gmail.com</a>  
    
</div> 

    </>
);
}