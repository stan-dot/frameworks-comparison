import "./App.css";
import { Button, defaultTheme, Provider } from "@adobe/react-spectrum";
import { Theme } from "@react-types/provider";

const diamondTheme: Theme ={
};

function App() {
  // return <h2>hello world</h2>
  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <Button variant="accent" onPress={() => alert("hey there!")}>
        Hello react spectrum!
      </Button>
    </Provider>
  );
}

export default App;
