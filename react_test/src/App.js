import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Games from "./Games/container/gamesContainer";
import Cart from "./Cart/ButtonComponant/Cart";
import PaymentIndex from './Payment/PaymentIndex';
import Sdata from "./Data";
import "./App.css";

function App() {
  return (
    <>
      <Cart></Cart>
      <div className="App">
        <Router>
          <div>
            <Sidebar />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/games" exact component={GamesPage}></Route>
              <Route path="/gamesNews" exact component={GameNews}></Route>
              <Route path="/payment" exact component={PaymentIndex}></Route>
              <Redirect to="/games" />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

function Home() {
  return (
    <div id="page-wrap">
      <div className="App-header">
        <h1>Welcome to my page</h1>
        <h2>Check out our tutorials the side menubar</h2>
      </div>
    </div>
  );
}

function GameNews() {
  return (
    <div id="page-wrap">
      <div className="App-header">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
}

const GamesPage = () => {
  return <Games sDataList={Sdata}></Games>;
};

export default App;
