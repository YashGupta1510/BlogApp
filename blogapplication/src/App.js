import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Viewblog from './Component/Viewblog';
import Addblog from './Component/Addblog';
import Editblog from './Component/Editblog';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Home from './Component/Home';
import Bloglist from './Component/Bloglist';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={Store}>

    <div className='App'>
    <BrowserRouter>
   
    <Routes>
    <Route path='/' element={<Home></Home>}> </Route>
    <Route path='/blog' element={<Bloglist></Bloglist>}> </Route>
    <Route path='/blog/view/:code' element={<Viewblog></Viewblog>}></Route>
    <Route path='/blog/add' element={<Addblog></Addblog>}></Route>
    <Route path='/blog/edit/:code' element={<Editblog></Editblog>}></Route>

    </Routes>
    </BrowserRouter>
    <ToastContainer ></ToastContainer>  
     </div>
   </Provider>
  );
}

export default App;
