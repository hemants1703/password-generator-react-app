import './styles/App.css';

// importing components
import Heading from "./components/Heading";
import Generator from "./components/Generator";
// import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      {/* <Modal /> */}
      <Heading />
      <Generator />
      <footer>
        Developed by <a href="https://www.hemantsharma.dev">Hemant Sharma</a>.
      </footer>
    </div>
  );
}

export default App;
