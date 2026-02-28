// import Hero from './components/Hero/Hero.js'
// import SearchForm from './components/SearchForm/SearchForm.js';
// import List from './components/List/List.js';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;