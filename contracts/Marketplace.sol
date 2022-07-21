// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./GameItems.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Marketplace {
    GameItems private _item;
    ERC20 private _potato;

    //Map item ID to price
    mapping(uint => uint) price;

    constructor(GameItems item, ERC20 potato) {
        require(address(item) != address(0));
        _item = item;
        _potato = potato;
        price[0] = 100000000000000;
        price[1] = 100000000000000;
        price[2] = 300000000000000;
    }

    function buyItem(uint _itemId) public payable {
        require(price[_itemId] != 0, "This item is not available");
        _potato.transferFrom(msg.sender, address(this), price[_itemId]);
        _item.mint(_itemId, 1, msg.sender);
    }
}