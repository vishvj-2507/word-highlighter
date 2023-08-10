import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/main';
import Viewer from '../pages/viewer/Viewer';
import Home from '../pages/home/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='/viewer' element={<Viewer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
