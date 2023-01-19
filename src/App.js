import { Provider } from "react-redux";
import store from "./store/store";
import Calculator from "./Calculator";

function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;
