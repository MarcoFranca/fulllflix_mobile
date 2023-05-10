
import AppContainer from "./src/router/RouterNavigation";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";


export default function App() {
  return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
  )
}