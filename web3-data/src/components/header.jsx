import React from "react";
import ReactDOM from "react-dom";

let metamask = window.ethereum;
let currentAccount = null;
metamask
  .request({ method: "eth_accounts" })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts will return an empty array.
    console.error(err);
  });

function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log("Please connect to MetaMask.");
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    console.log("Connected to MetaMask.");
    class Connected extends React.Component {
      render() {
        return (
          <button id="connect_btn" class="connect_active">
            Connected
          </button>
        );
      }
    }
    ReactDOM.render(<Connected />, document.getElementById("mid"));
    // Do any other work!
  }
}
function connect() {
  metamask
    .request({ method: "eth_requestAccounts" })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log("Please connect to MetaMask.");
      } else {
        console.error(err);
      }
    });
}

function Header() {
  return (
    <header>
      <div id="mid">
        <button onClick={connect} id="connect_btn">
          Connect to Wallet
        </button>
      </div>
    </header>
  );
}
export default Header;
