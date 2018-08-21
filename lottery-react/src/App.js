import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import web3 from "./web3";
import lottery from "./lottery";
// need to do input validatio and only contact owner need to see pickawinner
class App extends Component {
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    message: "Cmon you gotta enter",
    lastWinner: ""
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const lastWinner = await lottery.methods.lastWinner().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance, lastWinner });
  }
  // with this syntax we don't have to worry with this.onSubmit
  // event objet represent form submission
  onSubmit = async event => {
    // prevent to send form in std html
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });
    // 15 to 30 seconds to be processed
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    });

    this.setState({ message: "You have been entered." });
  };

  onClick = async event => {
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: "Waiting on transaction success..." });
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    const lastWinner = await lottery.methods.lastWinner().call();
    console.log(lastWinner);
    this.setState({
      lastWinner,
      message: "A winner has been picked! Address of the last winner:"
    });
  };

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}. There are currently{" "}
          {this.state.players.length} people entered, competing to win{" "}
          {web3.utils.fromWei(this.state.balance, "ether")} ether!{" "}
        </p>
        <hr />
        {/* excecute function onSubmit when submit*/}
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              // change with every modification
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>
        <hr />
        <h1>{this.state.message}</h1>
        <h4>lastWinner:{this.state.lastWinner}</h4>
      </div>
    );
  }
}

export default App;
