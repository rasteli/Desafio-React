import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ServerProvider from "./contexts/ServerContext"
import AppRoutes from "./routes"

const App = () => {
  return (
    <Router>
      <Switch>
        <ServerProvider>
          {AppRoutes.map((route, key) => {
            const { component, path } = route
            const Component = component

            return (
              <Route exact={true} path={path} key={key} render={Component} />
            )
          })}
        </ServerProvider>
      </Switch>
    </Router>
  )
}

export default App
