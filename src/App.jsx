import Menu from './components/Menu';
import Apresentacao from './components/Apresentacao';
import Seta from './components/Seta';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';

const App = () => {
  return (
    <div>
      <Menu/>
      <Apresentacao/>
      <Seta/>
      <Sobre/>
      <Projetos/>
    </div>
  );
}

export default App;
