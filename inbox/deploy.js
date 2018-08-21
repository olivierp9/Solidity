const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'hollow deer lock purse pet rack pizza team area mosquito wealth motion',
  'https://rinkeby.infura.io/v3/d1597ab12d094a418b64293c6b48026f'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x'+ bytecode, arguments: ['Hi there!']})
    .send({gas:'1000000', from: accounts[0] });

  console.log('contract deployed to', result.options.address);
};

deploy();
