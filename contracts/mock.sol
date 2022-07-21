//SPDX-License-Identifier: MIT
pragma solidity 0.5.12;

contract Mock {
    event AdminChanged(address addr);

    address public admin;

    constructor(uint256 t) public {
        admin = msg.sender;

        if (t == 1) {
            revert("failed");
        } else if (t == 2) {
            selfdestruct(msg.sender);
        }
    }

    function transferAdmin(address to) external {
        require(msg.sender == admin, "only call by admin");
        require(to != address(0), "invalid to address");
        admin = to;
        emit AdminChanged(to);
    }
}
