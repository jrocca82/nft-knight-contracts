// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameItems is ERC1155, Ownable {
    uint256 public constant PumpTalisman = 0;
    uint256 public constant SuperBoots = 1;
    uint256 public constant TimewarpCape = 2;
    address public marketplace;

    modifier onlyMarketplace() {
        require(msg.sender == marketplace, "Unauthorized. Marketplace only.");
        _;
    }

    constructor() ERC1155("") {
    }

    function setMarketplace(address _marketplace) public onlyOwner {
        marketplace = _marketplace;
    }

    function mint(uint _itemId, uint _amount, address _to) external onlyMarketplace {
        _mint(_to, _itemId, _amount, "");
    }
}