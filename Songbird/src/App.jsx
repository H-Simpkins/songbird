import Header from './components/header/Header';
import Searchbar from './components/searchbar/Searchbar';
import About from './components/about/About';
import Album from './components/album/Album';
import Track from './components/track/Track';
import appCSS from './appStyle.module.css';
import dotenv from 'dotenv';

dotenv.config();

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      <Header />
      <Searchbar />
      <div className={appCSS.container}>
        <About />
        <Album />
      </div>
      <Track />
    </>
  )
}

export default App
