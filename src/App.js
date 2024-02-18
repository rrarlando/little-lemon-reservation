import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className="wrapper">
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
