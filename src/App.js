import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <div className="container">
          <Switch>
            <Route path={"/"} component={Home} exact />
            <Route path={"/about"} component={About} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
