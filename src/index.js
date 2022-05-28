import React from 'react';
// import './index.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route} from "react-router-dom";

// import App from './App';
import reportWebVitals from './reportWebVitals';
import Index from "./views/Index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
      {/* add routes with layouts */}
      {/* <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} /> */}
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}

      <Route path="/" exact component={Index} />

      <Route from="*" to="/" />
  </BrowserRouter>



  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
