import React from 'react';

import './App.css';
import JoinPage from './page/JoinPage';
import LoginPage from './page/LoginPage';
import MeetingPage from './page/MeetingPage'
import MainPage from './page/MainPage';
import LibraryPage from './page/LibraryPage';
import AppStateProvider from './providers/AppStateProvider';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';

function App() {
  return (
    <>
    
      <AppStateProvider>
        <BrowserRouter>
          <Switch>
            <Route component={MainPage} exact path='/' />
            <Route compoennt={LibraryPage} path='/library' />
            <Route component={MeetingPage} path='/meeting'/>
            <Route component={LoginPage} path='/login'/>
            <Route component={JoinPage} path='/join'/>
          </Switch>
        </BrowserRouter>
      </AppStateProvider>
      
    </>
  );
}

export default App;
