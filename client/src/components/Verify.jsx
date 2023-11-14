// import { useState } from "react";

// const Verify = ({state}) => {
//     const [err,setErr] = useState("");
//     const verify = async(event)=>{
//         event.preventDefault();
//         const {contract} = state;
//         const token = document.querySelector("#token").value;
//         try {
//             const transaction = await contract.verifyToken(token);
//             await transaction.wait();
//             console.log("You are accepted");
//         } catch (error) {
//             console.log(error);
//             setErr(error.reason);
            
//         }
       
//     }
//     return(
//         <>
//          <form onSubmit={verify}>
//          <input id="token"></input>
//          <button>Verify</button>

//         </form>
//         {
//             err ? (
//                 <p>{err}</p>
//             ): ""
//          }
//         </>
//     ) 
// }
// export default Verify;


// import { useState } from "react";

// const Verify = ({ state }) => {
//   const [result, setResult] = useState(""); // To store the verification result

//   const verify = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const token = document.querySelector("#token").value;

//     try {
//       const verificationResult = await contract.verifyToken(token);

//       if (verificationResult) {
//         setResult("Welcome! You are accepted");
//       } else {
//         setResult("Sorry! Enter the correct hash");
//       }
//     } catch (error) {
//       console.log(error);
//       setResult("Error: " + error.reason);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={verify}>
//         <input id="token" placeholder="Enter token"></input>
//         <button>Verify</button>
//       </form>
//       {result ? <p>{result}</p> : ""}
//     </>
//   );
// };

// export default Verify;


// import { useState } from "react";
// import './Verify.css';

// const Verify = ({ state }) => {
//    const [result, setResult] = useState(""); // To store the verification result

//   const verify = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const token = document.querySelector("#token").value;

//     try {
//       const verificationResult = await contract.verifyToken(token);

//       if (verificationResult) {
//         setResult("Welcome! You are accepted");
//       } else {
//         setResult("Sorry! Enter the correct hash");
//       }
//     } catch (error) {
//       console.log(error);
//       setResult("Error: " + error.reason);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={verify}>
//         <input id="token" placeholder="Enter token"></input>
//         <button>Verify</button>
//       </form>
//       {result ? <p>{result}</p> : ""}
//     </>
//   );
// };

// export default Verify;



// import { useState } from "react";
// import './Verify.css';

// const Verify = ({ state }) => {
//   const [result, setResult] = useState(""); // To store the verification result
//   const [showFlower, setShowFlower] = useState(false); // To control the flower animation

//   const verify = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const token = document.querySelector("#token").value;

//     try {
//       const verificationResult = await contract.verifyToken(token);

//       if (verificationResult) {
//         setResult("Welcome! You are accepted");
//         setShowFlower(true); // Trigger the flower animation
//       } else {
//         setResult("Sorry! Enter the correct hash");
//       }
//     } catch (error) {
//       console.log(error);
//       setResult("Error: " + error.reason);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={verify}>
//         <input id="token" placeholder="Enter token"></input>
//         <button>Verify</button>
//       </form>
//       {result ? <p>{result}</p> : ""}
//       {showFlower && <span className="falling-flower">🌸</span>}
//     </>
//   );
// };

// export default Verify;

// import { useState, useEffect } from "react";
// import './Verify.css';

// const Verify = ({ state }) => {
//   const [result, setResult] = useState(""); // To store the verification result
//   const [showFlowers, setShowFlowers] = useState(false); // To control the flower animation

//   useEffect(() => {
//     if (showFlowers) {
//       setTimeout(() => setShowFlowers(false), 3000); // Hide flowers after 3 seconds
//     }
//   }, [showFlowers]);

//   const verify = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const token = document.querySelector("#token").value;

//     try {
//       const verificationResult = await contract.verifyToken(token);

//       if (verificationResult) {
//         setResult("Welcome! You are accepted");
//         setShowFlowers(true); // Trigger the flower animation
//       } else {
//         setResult("Sorry! Enter the correct hash");
//       }
//     } catch (error) {
//       console.log(error);
//       setResult("Error: " + error.reason);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={verify}>
//         <input id="token" placeholder="Enter token"></input>
//         <button>Verify</button>
//       </form>
//       {result ? <p>{result}</p> : ""}
//       {showFlowers && (
//         <div className="falling-flowers-container">
//           {Array.from({ length: 10 }).map((_, index) => (
//             <span key={index} className="falling-flower">
//               🌸
//             </span>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Verify;

// Verify.jsx

import { useState } from "react";
import '../App.css'; // Import the main App.css file

const Verify = ({ state }) => {
  const [result, setResult] = useState(""); // To store the verification result
  const [showFlowers, setShowFlowers] = useState(false); // To control the flower animation

  const verify = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const token = document.querySelector("#token").value;

    try {
      const verificationResult = await contract.verifyToken(token);

      if (verificationResult) {
        setResult("Welcome! You are accepted");
        setShowFlowers(true); // Trigger the flower animation
      } else {
        setResult("Sorry! Enter the correct hash");
      }
    } catch (error) {
      console.log(error);
      setResult("Error: " + error.reason);
    }
  };

  return (
    <>
      <form onSubmit={verify}>
        <input id="token" placeholder="Enter token"></input>
        <button>Verify</button>
      </form>
      {result ? <p>{result}</p> : ""}
      {showFlowers && (
        <div className="falling-flowers-container">
          {/* Render multiple flowers */}
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} className="falling-flower">
              🌸
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Verify;


