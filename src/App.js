import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Muitable from './Muitable';
import './App.css';
import CustomerModal from './component/Model';
import { Grid,Table } from '@mui/material';
import UserTable from './component/Table';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './component/Store';

function App() {
  return (
    <Provider store={store}>
    <Grid>
      {/* <UserTable/> */}
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Muitable/>}></Route> */}
      <Route path='/' element={<UserTable/>}></Route>
      
      <Route path='/' element={<CustomerModal/>}></Route>

    </Routes>
    </BrowserRouter>
    </Grid>
    </Provider>
    
  );
}

export default App;

