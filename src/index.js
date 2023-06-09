import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './18n';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
      <App />
      </Provider>
   
    </Suspense>
    </BrowserRouter>

</>
 

);

