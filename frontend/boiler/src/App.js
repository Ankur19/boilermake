import './App.css';
import Grids from './Components/Grids/Grids';
import Settings from './Components/Settings/Settings';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container fluid id="main-container">
          <Grids/>
          <Settings/>
      </Container>
    </div>
  );
}

export default App;
