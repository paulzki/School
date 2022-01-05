import React from "react";
import ReactDOM from "react-dom";
function Submit() {
  var a = document.get;
}
var Web3 = require("web3");
var web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:7545"
);

const ABI = [
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const contractAddress = "0xb3DEfe12D489bED816B52bA6965cB34Fcf353737";
async function Recieve() {
  var currentAccount = null;
  const metamask = window.ethereum;
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

      async function getValue() {
        var contract = new web3.eth.Contract(ABI, contractAddress, {
          from: currentAccount,
        });
        var store = await contract.methods.get().call();
        console.log(store);
        class Store extends React.Component {
          render() {
            return <span>{store}</span>;
          }
        }
        ReactDOM.render(<Store />, document.getElementById("reciever"));
        console.log("Connected to MetaMask.");
      }
      getValue();
    }
  }
  console.log("rec");

  // set provider for all later instances to use
}

async function set() {
  var currentAccount = null;
  const metamask = window.ethereum;
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
      let input_value1 = document.getElementById("in").value;
      async function setValue() {
        var contract = new web3.eth.Contract(ABI, contractAddress);
        contract.methods.set(input_value1).send({ from: currentAccount });
      }
      setValue();
    }
  }
  console.log("rec");

  // set provider for all later instances to use
}

function MainBox() {
  return (
    <div id="main_area">
      <div id="main_box">
        <div id="main_grid">
          <div id="main_item1">
            <button onClick={Recieve}>Recieve</button>
          </div>
          <div id="main_item2">
            <div class="input" id="reciever"></div>
          </div>
          <div id="main_item3">
            <button onClick={set}>Update</button>
          </div>
          <div id="main_item4">
            <input
              class="input"
              id="in"
              placeholder="Enter a your text"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainBox;
