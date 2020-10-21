import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from 'react-redux';
import MainScreen from "./screens/MainScreen";
import theme from "./constants/theme";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <MainScreen/>
          </ThemeProvider>
      </Provider>
  )
}

export default App;
