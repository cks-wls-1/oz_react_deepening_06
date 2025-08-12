import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/admin/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/admin__dashboard/Dashboard';
import Users from './pages/admin__users/Users';
import UserDetail from './pages/admin__users/UserDetail';
import Settings from './pages/admin__settings/Settings';
import NotFound from './pages/admin__notfound/NotFound';

function App() {  
  return(
    <Routes>
      <Route element = {<Layout />}>
        <Route path = '/' element = {<Home />}></Route>
        <Route path = '/admin' element = {<Dashboard />}></Route>
        <Route path = '/admin/users' element = {<Users />}></Route>
        <Route path = '/admin/users/:id' element = {<UserDetail />}></Route>
        <Route path = '/admin/setting' element = {<Settings />}></Route>
        <Route path = '*' element = {<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
