const { Pool } = require("@uniswap/v3-sdk");
const { Position } = require("@uniswap/v3-sdk");
const { ethers } = require("ethers");
const { BigNumber } = require("@ethersproject/bignumber");
const { abi } = require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json");

const MAX_UINT128 = BigNumber.from(2).pow(128).sub(1);

async function getPositionAndFees(tokenId) {
  const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/OV2Uqs1tC70MAtl88BcFArffiXobkx6T");
  const positionmanagerContractAddress = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
  // Initialize the position manager contract instance
  const positionmanagerContract = new ethers.Contract(positionmanagerContractAddress, abi, provider);
  
  // make a call to the contract to get the ownerOf tokenId
  const owner = await positionmanagerContract.ownerOf(tokenId);
  console.log("Owner:", owner);
  // const owner = "0x539A1dC7A604EDC0696f60FA823Bb07d16690b99"
  
  /* GET ACCRUED UNCLAIMED FEES */
  // callStatic simulates a call without state changes
  var results = await positionmanagerContract.callStatic.collect(
    { tokenId: tokenId, recipient: owner, amount0Max: MAX_UINT128, amount1Max: MAX_UINT128 },
    { from: owner }
  );
  console.log("Fee0:", parseFloat(results.amount0) / 100);
  console.log("Fee1:", parseFloat(results.amount1) / 100);
}

// Call the async function
getPositionAndFees(366096).catch((error) => {
  console.error(error);
});