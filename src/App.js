import "./styles.css";
import Container from "./Container";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Container />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
