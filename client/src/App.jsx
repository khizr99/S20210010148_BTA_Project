// import { useState,useEffect } from 'react'
// import abi from "./contractJson/TicketVerification.json"
// import {ethers} from "ethers"
// import Purchase from './components/Purchase'
// import Verify from './components/Verify'
// import './App.css'

// function App() {
//   const [state,setState]=useState({
//     provider:null,
//     signer:null,
//     contract:null
//   });
//   const [account,setAccount]=useState('Not connected');
//   useEffect(()=>{
//     const template=async()=>{
   
//       // const contractAddres="0x53919A5CBfd71E4dEb341e8620C7b3715abCB26c";
//       const contractAddres="0x5dea412903Dd1714DA2e91343FB77c0bE7ed9e59";
//       const contractABI=abi.abi;
//       //Metamask part
//       //1. In order do transactions on goerli testnet
//       //2. Metmask consists of infura api which actually help in connectig to the blockhain
//       try{

//         const {ethereum}=window;
//         const account = await ethereum.request({
//           method:"eth_requestAccounts"
//         })
 
//         window.ethereum.on("accountsChanged",()=>{
//          window.location.reload()
//         })
//         setAccount(account);
//         const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
//         const signer =  provider.getSigner(); //write the blockchain
        
//         const contract = new ethers.Contract(
//           contractAddres,
//           contractABI,
//           signer
//         )
//         console.log(contract)
//       setState({provider,signer,contract});
       
//       }catch(error){
//         console.log(error)
//       }
//     }
//     template();
//   },[])

//   return (
//     <>
//      <div className='App'>
//         Connected account : {account}
//       <Purchase state={state}></Purchase>
//       <Verify state={state}></Verify>
//      </div>
//     </>
//   )
// }

// export default App



import { useState, useEffect } from 'react'
import abi from "./contractJson/TicketVerification.json"
import { ethers } from "ethers"
import Purchase from './components/Purchase'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Verify from './components/Verify'
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });
  const [account, setAccount] = useState('Not connected');

  const connectToMetaMask = async () => {
    try {
      const { ethereum } = window;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });

      ethereum.on("accountsChanged", () => {
        setAccount(accounts[0]);
      });

      setAccount(accounts[0]);

      const provider = new ethers.providers.Web3Provider(ethereum); // read the Blockchain
      const signer = provider.getSigner(); // write the blockchain

      const contractAddress = "0x5dea412903Dd1714DA2e91343FB77c0bE7ed9e59";
      const contractABI = abi.abi;

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      setState({ provider, signer, contract });

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const template = async () => {
      // Your existing code for connection
    };
    template();
  }, []);

  return (
    <>
      <div className='App'>
      <Navbar />
      <small>Connected Account - {account}</small>
        <button onClick={connectToMetaMask}>Connect to MetaMask</button>
        <div className='between'>
        <Purchase state={state}></Purchase>
        <Verify state={state}></Verify>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default App



// import { useState, useEffect } from 'react';
// import abi from "./contractJson/TicketVerification.json";
// import { ethers } from "ethers";
// import Purchase from './components/Purchase';
// import Verify from './components/Verify';
// import './App.css';

// function App() {
//   const [state, setState] = useState({
//     provider: null,
//     signer: null,
//     contract: null
//   });
//   const [account, setAccount] = useState('Not connected');

//   const connectToMetaMask = async () => {
//     try {
//       const { ethereum } = window;
//       const accounts = await ethereum.request({
//         method: "eth_requestAccounts"
//       });

      // ethereum.on("accountsChanged", () => {
      //   setAccount(accounts[0]);
      // });

      // setAccount(accounts[0]);

      // const provider = new ethers.providers.Web3Provider(ethereum); // read the Blockchain
      // const signer = provider.getSigner(); // write the blockchain

      // const contractAddress = "0x5dea412903Dd1714DA2e91343FB77c0bE7ed9e59";
//       const contractABI = abi.abi;

//       const contract = new ethers.Contract(
//         contractAddress,
//         contractABI,
//         signer
//       );

//       setState({ provider, signer, contract });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     const template = async () => {
//       // Your existing code for connection
//     };
//     template();
//   }, []);

//   return (
//     <>
//       <div className='App'>
//         <div className="navbar">
//           <div>
//             <button onClick={connectToMetaMask}>Connect to MetaMask</button>
//           </div>
//           <div>
//             <a href="#verify">Go to Verify</a>
//             <a href="#purchase">Purchase Ticket</a>
//           </div>
//         </div>

//         <div id="verify" className="page">
//           <Verify state={state}></Verify>
//         </div>

//         <div id="purchase" className="page">
//           <Purchase state={state}></Purchase>
//         </div>

//         <div className="footer">
//           © 2023 Ticket Verification. All rights reserved.
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
