import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingGames from './components/TrendingGames';
import Subscriptions from './components/Subscriptions';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
      <TrendingGames />
      <Subscriptions />
      <Contact />
      <Footer />
    
    </>
  );
}

export default App