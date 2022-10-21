import { Routes, Route } from 'react-router-dom';

import NotFound from 'pages/404';
import Header from './component/common/app-header';
import Footer from './component/common/app-footer';
import Main from './pages/main-page';
import Search from './pages/search-page';

// import Gung from './component/Gung';
// import Login from './component/Login';
// import Join from './component/Join';
// import Like from './component/Like';
// import Listdetail from './component/Listdetail';

const clientRoutes = [
  {
    path: '/',
    component: <Main />,
  },
  {
    path: '/search',
    component: <Search />,
  },
];

function App() {
  return (
    <>
      <Header />
      <Routes>
        {clientRoutes.map((route) => (
          <Route path={route.path} key={route.path} element={route.component} />
        ))}
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/" element={<Main />} />
        <Route path="/gung/:num" element={<Gung />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listdetail/:num" element={<Listdetail />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
