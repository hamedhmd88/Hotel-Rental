
import HomePage from './pages/HomePage/HomePage';
import {
  Route,
  Routes,
} from "react-router-dom";

import ListPage from './pages/ListPage/ListPage';
import Layout from './pages/Layout/Layout';
import SingPage from './pages/SingePage/SingPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';


function App() {

  

  return (
   
    <Layout>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/List' element={<ListPage/>}/>
      <Route path=':id' element={<SingPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
    </Layout>

    // <RouterProvider router={router} />

  )
}

export default App;