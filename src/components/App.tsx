import { DogVotingApp } from "./DogVotingApp";
import "../styles/App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <DogVotingApp />
            </ChakraProvider>
        </div>
    );
}

export default App;
