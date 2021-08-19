import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AppNavigator from "./app/navigator/AppNavigator";
import rootReducer from "./app/store/reducers/rootReducer";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      {/* <SafeAreaView /> */}
      <AppNavigator />
      <StatusBar style="light" />
    </Provider>
  );
};

export default App;
