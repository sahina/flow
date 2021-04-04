import { Route, Switch } from "react-router-dom";
import ExploreView from "./views/ExploreView";
import "./style/main.scss";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ExploreView} />
      </Switch>
    </main>
  );
}

export default App;
