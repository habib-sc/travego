import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
