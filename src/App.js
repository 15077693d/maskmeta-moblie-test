import logo from "./logo.svg";
import "./App.css";
import Wallet from "./wallet";
import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";
function App() {
  function getLibrary(provider) {
    return new ethers.providers.Web3Provider(provider);
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Wallet />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
