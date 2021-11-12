import React from "react";
import { injected } from "./utils";
import { useWeb3React } from "@web3-react/core";
const Wallet = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  console.log(active, account);

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div>
      <b>active: {active}</b>
      <br />
      <b>account: {account}</b>
      <br />
      <button onClick={connect}>connect</button>
      <br />
      <button onClick={disconnect}>disconnect</button>
    </div>
  );
};

export default Wallet;
