// import {ethers} from "ethers";
// import { useState } from "react";

// const Purchase = ({state}) => {
//     const [err,setErr] = useState("");
//     const purchase = async(event)=>{
//         event.preventDefault();
//         const {contract} = state;
//         const token = document.querySelector("#token").value;

//         try {
//             const transaction = await contract.purchaseTicket(token,amount);
//             await transaction.wait();
//             console.log("Transaction is successful");
//         } catch (error) {
//             console.log(error);
//             setErr(error.reason);
            
//         }
       
//     }
//     return (<>
//         <form onSubmit={purchase}>
//          <input id="token"></input>
//          <input id="amount"></input>
//          <button>Purchase</button>

//         </form>
//         {
//             err ? (
//                 <p>{err}</p>
//             ): ""
//          }
//     </>
//     )
// }
// export default Purchase;

// const Purchase = ({ state }) => {
//     const [err, setErr] = useState("");
//     const purchase = async (event) => {
//       event.preventDefault();
//       const { contract } = state;
//       const token = document.querySelector("#token").value;
//       const amount = document.querySelector("#amount").value; // Assuming the amount is in wei
  
//       try {
//         const transaction = await contract.purchaseTicket(token, {
//           value: amount, // Pass the value (wei) along with the transaction
//         });
//         await transaction.wait();
//         console.log("Transaction is successful");
//       } catch (error) {
//         console.log(error);
//         setErr(error.reason);
//       }
//     }
  
//     return (
//       <>
//         <form onSubmit={purchase}>
//           <input id="token"></input>
//           <input id="amount"></input>
//           <button>Purchase</button>
//         </form>
//         {err ? <p>{err}</p> : ""}
//       </>
//     );
//   }
//   export default Purchase;


// import { useState } from "react";
// import { ethers } from "ethers"; // Import ethers.js

// const Purchase = ({ state }) => {
//   const [err, setErr] = useState("");
//   const [token, setToken] = useState(""); // State to store the generated token

//   const generateToken = () => {
//     // Generate a unique token using ethers.js (you can use any method you prefer)
//     const uniqueToken = ethers.utils.id(Math.random().toString());
//     setToken(uniqueToken);
//   };

//   const purchase = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const amount = document.querySelector("#amount").value; // Assuming the amount is in wei

//     try {
//       const transaction = await contract.purchaseTicket(token, {
//         value: amount, // Pass the value (wei) along with the transaction
//       });
//       await transaction.wait();
//       console.log("Transaction is successful");
//     } catch (error) {
//       console.log(error);
//       setErr(error.reason);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={purchase}>
//         <input
//           id="token"
//           value={token} // Display the generated token in the input field
//           readOnly
//         />
//         <button type="button" onClick={generateToken}>
//           Generate Token
//         </button>
//         <input id="amount" placeholder="Amount in wei"></input>
//         <button>Purchase</button>
//       </form>
//       {err ? <p>{err}</p> : ""}
//     </>
//   );
// };

// export default Purchase;


// import { useState } from "react";
// import { ethers } from "ethers";
// import QRCode from "qrcode.react"; // Import the QRCode library

// const Purchase = ({ state }) => {
//   const [err, setErr] = useState("");
//   const [token, setToken] = useState(""); // State to store the generated token
//   const [qrCodeData, setQRCodeData] = useState(""); // State to store QR code data

//   const generateToken = () => {
//     // Generate a unique token using ethers.js (you can use any method you prefer)
//     const uniqueToken = ethers.utils.id(Math.random().toString());
//     setToken(uniqueToken);

//     // Generate QR code data from the token
//     setQRCodeData(uniqueToken);
//   };

//   const purchase = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const amount = document.querySelector("#amount").value; // Assuming the amount is in wei

//     try {
//       const transaction = await contract.purchaseTicket(token, {
//         value: amount, // Pass the value (wei) along with the transaction
//       });
//       await transaction.wait();
//       console.log("Transaction is successful");
//     } catch (error) {
//       console.log(error);
//       setErr(error.reason);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={purchase}>
//         <QRCode value={qrCodeData} /> {/* Display QR code */}
//         <input
//           id="token"
//           value={token} // Display the generated token in the input field
//           readOnly
//         />
//         <button type="button" onClick={generateToken}>
//           Generate Token
//         </button>
//         <input id="amount" placeholder="Amount in wei"></input>
//         <button>Purchase</button>
//       </form>
//       {err ? <p>{err}</p> : ""}
//     </>
//   );
// };

// export default Purchase;


// import { useState } from "react";
// import { ethers } from "ethers";
// import QRCode from "qrcode.react"; // Import the QRCode library

// const Purchase = ({ state }) => {
//   const [err, setErr] = useState("");
//   const [token, setToken] = useState(""); // State to store the generated token
//   const [qrCodeData, setQRCodeData] = useState(""); // State to store QR code data
//   const [showQRCode, setShowQRCode] = useState(false); // State to control whether to display the QR code

//   const generateToken = () => {
//     // Generate a unique token using ethers.js (you can use any method you prefer)
//     const uniqueToken = ethers.utils.id(Math.random().toString());
//     setToken(uniqueToken);

//     // Generate QR code data from the token
//     setQRCodeData(uniqueToken);

//     // Display the QR code
//     setShowQRCode(true);
//   };

//   const purchase = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const amount = document.querySelector("#amount").value; // Assuming the amount is in wei

//     try {
//       const transaction = await contract.purchaseTicket(token, {
//         value: amount, // Pass the value (wei) along with the transaction
//       });
//       await transaction.wait();
//       console.log("Transaction is successful");
//     } catch (error) {
//       console.log(error);
//       setErr(error.reason);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={purchase}>
//         {showQRCode && <QRCode value={qrCodeData} />} {/* Display QR code conditionally */}
//         <input
//           id="token"
//           value={token} // Display the generated token in the input field
//           readOnly
//         />
//         <button type="button" onClick={generateToken}>
//           Generate Token
//         </button>
//         <input id="amount" placeholder="Amount in wei"></input>
//         <button>Purchase</button>
//       </form>
//       {err ? <p>{err}</p> : ""}
//     </>
//   );
// };

//export default Purchase;

import { useState } from "react";
import { ethers } from "ethers";
import QRCode from "qrcode.react";
import './Purchase.css';


const Purchase = ({ state }) => {
  const [err, setErr] = useState("");
  const [token, setToken] = useState(""); // State to store the generated token
  const [qrCodeData, setQRCodeData] = useState(""); // State to store QR code data
  const [showQRCode, setShowQRCode] = useState(false); // State to control whether to display the QR code

  const generateToken = () => {
    // Generate a unique token using ethers.js (you can use any method you prefer)
    const uniqueToken = ethers.utils.id(Math.random().toString());
    setToken(uniqueToken);

    // Generate QR code data from the token
    setQRCodeData(uniqueToken);

    // Display the QR code
    setShowQRCode(true);
  };

  const purchase = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const amount = document.querySelector("#amount").value; // Assuming the amount is in wei

    try {
      const transaction = await contract.purchaseTicket(token, {
        value: amount, // Pass the value (wei) along with the transaction
      });
      await transaction.wait();
      alert("Transaction is successful");
    } catch (error) {
      console.log(error);
      setErr(error.reason);
    }
  };


  return (
    <>
      <form onSubmit={purchase}>
        {showQRCode && <QRCode id="qr-code" value={qrCodeData} />}
        <input
          id="token"
          value={token}
          readOnly
        />
        <button type="button" onClick={generateToken}>
          Generate Token
        </button>
        <input id="amount" placeholder="Ticket Price is 5000 wei"></input>
        <button>Purchase</button>
      </form>
      {err ? <p>{err}</p> : ""}
    </>
  );
};

export default Purchase;
