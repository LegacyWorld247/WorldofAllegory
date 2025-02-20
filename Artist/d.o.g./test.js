// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.17;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract SecureToken is ReentrancyGuard, Ownable, Pausable {
    // Use specific data types to save gas
    uint256 private constant INITIAL_SUPPLY = 1000000;
    mapping(address => uint256) private balances;

    // Events for important state changes
    event Transfer(address indexed from, address indexed to, uint256 value);
    event ContractPaused(address admin);

    // Custom errors are more gas-efficient than require strings
    error InsufficientBalance(uint256 requested, uint256 available);
    error InvalidAddress();
    error TransferFailed();

    constructor() {
        balances[msg.sender] = INITIAL_SUPPLY;
    }

    // External functions are more gas-efficient than public
    function transfer(address to, uint256 amount) external nonReentrant whenNotPaused returns(bool) {
        // Zero address check
        if (to == address(0)) revert InvalidAddress();

        // Check-Effects-Interactions pattern
        uint256 senderBalance = balances[msg.sender];
        if (senderBalance < amount) revert InsufficientBalance(amount, senderBalance);

        // Update balances before external calls
        unchecked {
            // Safe math is handled by Solidity 0.8.x, use unchecked for gas optimization
            balances[msg.sender] = senderBalance - amount;
            balances[to] += amount;
        }
        
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    // View functions marked as view for gas optimization
    function balanceOf(address account) external view returns(uint256) {
        return balances[account];
    }

    // Admin functions
    function pause() external onlyOwner {
        _pause();
        emit ContractPaused(msg.sender);
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    // Emergency function with timelock
    uint256 private constant EMERGENCY_WAIT_TIME = 24 hours;
    uint256 private emergencyUnlockTime;

    function initiateEmergencyProcedure() external onlyOwner {
        emergencyUnlockTime = block.timestamp + EMERGENCY_WAIT_TIME;
    }

    function executeEmergency() external onlyOwner {
        require(block.timestamp >= emergencyUnlockTime, "Timelock active");
        // Emergency logic here
    }
}