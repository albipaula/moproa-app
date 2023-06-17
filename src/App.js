
import './App.css';
import './css/global.css'
import './css/hero.css';
import './css/cards.css';
import './css/navbar.css';
import './css/moproaSection.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/cards';
import Refugio from './components/refugio';
import Noticias from './components/Noticias';
import Pasos from './components/pasos';
import './components/NavBar';
import './components/cards';
import './components/Noticias';
import './css/pasos.css';




function App() {
  return (
    <div className="App">

      <NavBar />
      <Hero />
      <section  >
      <h1> Queres adoptar ?</h1>
      <div className='pasosContainer'>
      <Pasos
       image='reunion'
        paso = 'PASO 1'
        text= 'Rellena la solicitud de adopción ' />
                <Pasos
                image='interview'
        paso = 'PASO 2'
        text= ' Entrevista y visita domiciliaria' />
                <Pasos
                image='reunion'
        paso = 'PASO 3'
        text= ' Reunión de adopción' />
        </div>
        </section>
        <h2> Veni a conocernos </h2>
      <div className='cardsContainer container'>
     
  
         <Cards  

      nombre= 'Manju'
      image = 'perro3'
      alt =' dog1'
   
      />
         <Cards  
      nombre= 'Pinky'
      image = 'perro2'
      alt =' dog1'
   
      />
            <Cards  
      nombre= 'Pinky'
      image = 'perro1'
      alt =' dog1'
   
      />
            <Cards  
      nombre= 'Pinky'
      image = 'perro3'
      alt =' dog1'
   
      />
              <Cards  
      nombre= 'Pinky'
      image = 'perro3'
      alt =' dog1'
   
      />
              <Cards  
      nombre= 'Pinky'
      image = 'perro3'
      alt =' dog1'
   
      />
      
      </div>
      <section className='moproaSection'>
       
      <h2>Somos Mo.Pro.A  </h2>
      <h2>MOVIMIENTO DE PROTECCION ANIMAL </h2>
      <div className='moproaSectionCard'>


<Refugio image = 'voluntario' />
</div>
      <div>
     
      </div>
      </section>
      <section className='voluntariadoSection'>
<h2>Queres ser voluntario? </h2>

 
</section>
<div className='pasosContainer'>

  
<Pasos 

  image='alimento'
   paso = 'Donacion de alimento'
   text= 'Recibimos alimentos ' />
     <Pasos
           image='reunion'
   paso = 'Ser Voluntario'
   text= 'Jornadas en el Refugio'
   
  />
  
<Pasos
           image='dinero'
   paso = 'Dinero'
   text= ' Alias: refugio.perris.amor'
  />
    <h2>¿En qué consiste ser voluntario de MOPROA?* </h2>
<Refugio  image='voluntario' text='' /> 

   <ul>
    <li>Podes hacer traslados si tenes auto y disponibilidad.</li>
    <li>Podes manejar nuestras redes.</li>
    <li>Podes acercarte a la calle Gutierrez donde nos juntamos a recaudar dinero.</li>
    <li>Acercarte a las jornadas que hacemos en el refugio donde limpiamos los caniles, abrazamos a los peludos, los sacamos al espacio de recreación, les damos muchos besos y arreglamos espacios rotos.
</li>
    <li>Si está en tus posibilidades podes colaborar con dinero.</li>


<h2>¡Toda propuesta que tengas es bienvenida!</h2>

</ul>
</div>


<NavBar />
    </div>
   


  );
}

export default App;
