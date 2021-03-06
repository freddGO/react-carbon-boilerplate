import React from "react";
import "./App.scss";
import { Content } from "carbon-components-react/lib/components/UIShell";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import LandingPage from "./content/LandingPage";

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </Content>
    </>
  );
};

export default App;
