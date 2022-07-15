// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./GameItems.sol";

contract Marketplace {
    GameItems private _item;

    //Map item ID to price
    mapping(uint => uint) price;

    constructor(GameItems item) {
        require(address(item) != address(0));
        _item = item;
        price[0] = 100000000000000;
        price[1] = 200000000000000;
        price[2] = 300000000000000;
    }

    function buyItem(uint _itemId) public payable {
        uint sentAmount = msg.value;
        require(sentAmount >= price[_itemId], "Not enough funds");
        require(price[_itemId] != 0, "This item is not available");

        _item.mint(_itemId, 1, msg.sender);
    }
}