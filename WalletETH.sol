//SPDX-License-Identifier:MIT
pragma solidity >=0.8.7;

contract Transactions {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function deposit() external payable {
    }

    function withdrawAll() public payable {
        (bool os,)= payable(owner).call{value:address(this).balance}("");
        require(os);
    }

    function withdraw(uint _amount) external {
        require(msg.sender == owner, "Maaf anda bukan Owner");    
        payable(msg.sender).transfer(_amount);
    }

    function sendEth(address payable receiver, uint _amount) external {
        receiver.transfer(_amount);
    }

    function getBalance() external view returns(uint) {
        return address(this).balance;
    }

    function getAddress() external view returns(address) {
        return address(this);
    }
}