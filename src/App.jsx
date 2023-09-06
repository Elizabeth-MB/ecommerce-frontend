/* Importando Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/screen/Home/Home';
import Main from "./components/templates/Main/Main";
import Navbar from './components/templates/Navbar/Navbar';

const App = () => {

  return (
    <div
    >
      <Navbar></Navbar>
      <Main>
        <Home />
      </Main>
    </div>
  );
};

export default App