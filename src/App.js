import './css/App.scss';

import { HashRouter, Routes, Route} from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Gung from './component/Gung';
import Login from './component/Login';
import Join from './component/Join';
import Like from './component/Like';
import Search from './component/Search';
import Listdetail from './component/Listdetail';

function App() {
  return (
    <HashRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/gung/:num" element={<Gung/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/jogin" element={<Join/>}/>
          <Route path="/like" element={<Like/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/listdetail/:num" element={<Listdetail/>}/>
        </Routes>
      </main>
      <Footer/>
    </HashRouter>
  );
}

export default App;
