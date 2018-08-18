const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'use paddle cargo service lumber song victory series alpha diary potato reject',
    'https://rinkeby.infura.io/v3/9382223d61cf48899dbb5d4fc33bb590'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attemting to deploy from accout ', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode, arguments: ['Hi, there!'] })
        .send({ from: accounts[0] })

    console.log('Contract deployed to ', result.options.address);
}
deploy()