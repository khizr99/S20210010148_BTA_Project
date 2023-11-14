
// const main = async () => {
//   const ticketFactory = await hre.ethers.getContractFactory("TicketVerification");
//   const ticketContract = await ticketFactory.deploy(1000,100);

//   await ticketContract.deployed();

//   console.log("Transactions address: ", ticketContract.address);
// };

// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// runMain();

// import {ethers} from "ethers";
const hre = require("hardhat");

async function main() {
  const TicketVeri = await hre.ethers.getContractFactory("TicketVerification"); //fetching bytecode and ABI

  
const ticketPriceInWei = ethers.utils.parseEther("0.000000000000005");
const totalTickets = 100;
const tv = await TicketVeri.deploy(ticketPriceInWei, totalTickets);

 // const tv = await TicketVeri.deploy(100,20); //creating an instance of our smart contract

  await tv.deployed();//deploying your smart contract

  console.log("Deployed contract address:",`${tv.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Deployed contract address: 0x53919A5CBfd71E4dEb341e8620C7b3715abCB26c
// Deployed contract address: 0x3F22E3bEdFA22cEE1C74cf75B2Cec95343327b64
// Deployed contract address: 0x5dea412903Dd1714DA2e91343FB77c0bE7ed9e59
// const ticketPriceInEther = 1.0; // 1 ether
// const ticketPriceInWei = ethers.utils.parseEther(ticketPriceInEther);
// const totalTickets = 20;
// const tv = await TicketVeri.deploy(ticketPriceInWei, totalTickets);
