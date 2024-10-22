// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SandySand is ERC20 {
    uint constant _initial_supply = 100 * (10**18);
    constructor() ERC20("SandySand", "SdS") {
        _mint(msg.sender, _initial_supply);
    }
}
