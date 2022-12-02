import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Project />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
