import React from "react";
import Header from "./header";
import { Route } from "react-router-dom";

import Home from "./home";
import Story from "./story";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/code" component={Story} />
        </div>
      </div>
    );
  }
}

export default App;
