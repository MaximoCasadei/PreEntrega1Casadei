import NavBar from './Components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting="Hola - Esta es mi Tienda"/>
    </div>
  );
}

export default App;
