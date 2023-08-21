/* Importando Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/screen/Home/Home';
import Main from "./components/templates/Main/Main";

const App = () => {

  return (
    <>
      <Main>
        <Home />
      </Main>
    </>
  );
};

export default App