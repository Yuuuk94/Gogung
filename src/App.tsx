import { Routes, Route } from 'react-router-dom';

import NotFound from 'pages/404';
import Header from './component/common/app-header';
import Footer from './component/common/app-footer';
import Main from './pages/main-page';
import Search from './pages/search-page';
import Gung from './pages/gung-page';
import Gungdetail from './pages/gung-detail-page';

const clientRoutes = [
  {
    path: '/',
    component: <Main />,
  },
  {
    path: '/search',
    component: <Search />,
  },
  {
    path: '/gung/:num',
    component: <Gung />,
  },
  {
    path: '/gungdetail',
    component: <Gungdetail />,
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
