import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Cards from "./components/Cards/Cards";
import MenuList from "./service/MenuList";
import OrderList from "./containers/orderlist/OrderList";
import MainWindow from "./containers/MainWindow/MainWindow";
import Cart from "./containers/Cart/Cart";
import {RecoilRoot} from "recoil"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MainWindow />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
