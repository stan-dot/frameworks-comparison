import "./App.css";
import { Button, defaultTheme, Provider } from "@adobe/react-spectrum";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Button variant="accent" onPress={() => alert("hey there!")}>
        Hello react spectrum!
      </Button>
    </Provider>
  );
}

export default App;
