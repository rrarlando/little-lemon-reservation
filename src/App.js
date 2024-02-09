import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import BookingPage from './components/BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
