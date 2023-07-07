const Web3 = require('web3');

async function main() {
  try {
    // Step 1: Connect to the Ethereum network
    const infuraUrl = 'https://eth.llamarpc.com';
    const web3 = new Web3(infuraUrl);

    // Step 2: Load the smart contract
    const contractAddress = '0x9Ad8d0df2dA118DcE898b7F5BD9Ab749c593A5d9'; // Replace with the actual contract address
    const contractABI = require('src/getUnderlyingBalances.js'); // Replace with the actual ABI file path
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Step 3: Call the getUnderlyingBalances function
    const functionResult = await contract.methods.getUnderlyingBalances().call();
    console.log('Function result:', functionResult);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
