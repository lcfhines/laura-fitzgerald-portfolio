import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
