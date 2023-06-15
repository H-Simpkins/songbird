import Header from './components/header/Header';
import Searchbar from './components/searchbar/Searchbar';
import About from './components/about/About';
import Album from './components/album/Album';
import Track from './components/track/Track';
import appCSS from './appStyle.module.css';

function App() {


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
