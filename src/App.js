import logo from './logo.svg';
import './App.css';
import { Button } from './component/button';
import { ReactBenifits } from './component/Reactbenifits';
import { ReactLogo } from './component/ReactLogo';

function App() {
  return (
    <div className="App">
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>Benifits of using react ...</h3>
          <ol type='1'>
           <li>Component-based architecture</li> 
           <li>Virtual DOM for efficient updates</li> 
           <li>Rich ecosystem and community</li>
           <li>Cross-platform development</li>
           <li>Strong community support</li>
            <button>Get Started ..</button>
            
          </ol>
        </p>
       
      </header> */}
      <Button/>
    </div>
  );
}

export default App;
