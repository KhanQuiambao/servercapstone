import React from 'react'
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Resident from './Resident';
import Profile from './Profile';
import Home from './Home';
import AddResident from './AddResident';
import Request from './Request';
import EditResident from './EditResident';
import Start from './Start';
import ResidentLogin from './ResidentLogin';
import ResidentPage from './ResidentPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}>
      <Route path='' element={<Home />}></Route>
        <Route path='/resident' element={<Resident />}></Route>
        <Route path='/request' element={<Request />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/create' element={<AddResident />}></Route>
        <Route path='/residentEdit/:id' element={<EditResident />}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/residentlogin' element={<ResidentLogin />}></Route>
      <Route path='/residentpage/:id' element={<ResidentPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
