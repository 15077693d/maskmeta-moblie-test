import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [address, setAddress] = useState("init");
  useEffect(() => {
    // if user has metamask
    if (window.ethereum) {
      console.log(1);
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((_address) => setAddress(_address[0]));
    }
    if (window.ethereum) {
      const handleAccountsChanged = () => {
        if (window.ethereum) {
          console.log(2);
          void window.ethereum
            .request({ method: "eth_accounts" })
            .then((_address) => setAddress(_address[0]));
        }
      };
      // when MetaMask change account, set the account's user select.
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      return () => {
        if (window.ethereum) {
          // clear up event listener when  react component is unmounted
          window.ethereum.removeListener(
            "accountsChanged",
            handleAccountsChanged
          );
        }
      };
    }
  }, []);
  return (
    <div className="App">
      <b>{address}</b>
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
  );
}

export default App;
