import React from 'react';
import Routes from './routes'

import './App.css';
import { RecoilRoot } from 'recoil';

function App() { 
    return  (<RecoilRoot>
             <Routes></Routes>   
            </RecoilRoot>) 
}

export default App;
