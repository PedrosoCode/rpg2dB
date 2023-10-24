import logo from './logo.svg';
import './bulma/css/bulma.min.css';
import './App.css';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 




function App() {
  return (
    <div>
      <Navbar />
      {/* Outro conteúdo do seu aplicativo */}
      <section className="section is-medium">
        <h1 className="title">Uma Breve introdução ao sistema RPG2D</h1>
        <h2 className="subtitle">
          Um sistema <strong>Universal, e simples</strong>, Para a sua mesa de RPG.
        </h2>
      </section>
      <Footer />
      
    </div>
  );
}


export default App;
