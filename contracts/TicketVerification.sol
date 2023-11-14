// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract TicketVerification {

    address public owner;
    uint256 public ticketPrice;
    uint256 public totalTickets;
    uint256 public ticketsSold;
    mapping(address => uint256) public userTicketCount;
    mapping(uint256 => string) public ticketTokens; //STEP 3:- Will provide tokens to users that is same token which is generated from QR code

    event TicketPurchased(address indexed user, uint256 ticketId);
    event TicketRefunded(address indexed user, uint256 ticketId);
    event TokenStored(string token, address storedBy);
    
    constructor(uint256 _ticketPrice, uint256 _totalTickets) {
        owner = msg.sender;
        ticketPrice = _ticketPrice;
        totalTickets = _totalTickets;
        ticketsSold = 0;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    //STEP 2:- It will store token which is generated from QR code

        function storeToken(string memory token) public onlyOwner {
        ticketTokens[ticketsSold] = token;
        ticketsSold++;
        emit TokenStored(token, msg.sender);
    }

    //STEP 1:- User will purchase Ticket first
     function purchaseTicket(string memory token) public payable {
    require(msg.value == ticketPrice, "Payment should be equal to the ticket price");
    require(ticketsSold < totalTickets, "All tickets have been sold already");

    // Assign the ticket to the user
    userTicketCount[msg.sender]++;

    // Emit the event for ticket purchase
    emit TicketPurchased(msg.sender, ticketsSold);

    // Pass the token to the storeToken function
    storeToken(token);
}


    //STEP 4:- USER WILL BE VERIFIED "OLD"
    function verifyToken(string memory userToken) public view returns (bool) {
        for (uint256 i = 0; i < ticketsSold; i++) {
            if (keccak256(abi.encodePacked(userToken)) == keccak256(abi.encodePacked(ticketTokens[i]))) {
                return true;
            }
        }
        return false;
    }

    //event TicketVerified(address user, bool success);

// function verifyToken(string memory userToken) public view returns (bool) {
//     for (uint256 i = 0; i < ticketsSold; i++) {
//         if (keccak256(abi.encodePacked(userToken)) == keccak256(abi.encodePacked(ticketTokens[i]))) {
//             emit TicketVerified(msg.sender, true); // Token verification success
//             return true;
//         }
//     }
//     emit TicketVerified(msg.sender, false); // Token verification failure
//     return false;
// }

}
