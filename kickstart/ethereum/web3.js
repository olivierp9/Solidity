import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server or the user is not using metamask
  // it's ok to pass key to everyone because no information given with key
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/d1597ab12d094a418b64293c6b48026f"
  );
  web3 = new Web3(provider);
}

export default web3;
