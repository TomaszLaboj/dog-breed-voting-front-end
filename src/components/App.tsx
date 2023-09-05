import { MyComponent } from "./MyComponent";
import "../styles/App.css";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <MyComponent />
            </ChakraProvider>
        </div>
    );
}

export default App;
