import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";
import StackNavigation from "./src/navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigation />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
