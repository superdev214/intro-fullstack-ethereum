// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NDToken is ERC20{
    constructor(uint256 totalSupply) ERC20("Gemanepa Protocol", "GEMANEPA"){
        _mint(msg.sender, totalSupply);
        
    }
}