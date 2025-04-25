/**
 * UIController.js - Controller for the user interface
 * 
 * This class manages the user interface, coordinating between the game state
 * and the various view components.
 */
class UIController {
    /**
     * Create a new UIController instance
     * @param {TerminalView} terminalView - Reference to the terminal view
     * @param {InventoryView} inventoryView - Reference to the inventory view
     * @param {StatsView} statsView - Reference to the stats view
     */
    constructor(terminalView, inventoryView, statsView) {
        this.terminalView = terminalView;
        this.inventoryView = inventoryView;
        this.statsView = statsView;
        
        // Set default screen clearing behavior to true (Zork-style)
        this.terminalView.setClearOnCommand(true);
    }

    /**
     * Initialize the UI with game data
     * @param {GameState} gameState - The current game state
     * @param {Object} locationData - Map of location data
     * @param {Object} itemData - Map of item data
     */
    initialize(gameState, locationData, itemData) {
        // Display welcome message
        this.displayMessage(`<h1>GCSE Digital Technology Adventure</h1>
            <p>Welcome to the Digital Quest, a text adventure game designed to help you revise GCSE Digital Technology concepts.</p>
            <p>Type 'help' for a list of commands, or 'look' to examine your surroundings.</p>`);
        
        // Update the UI components
        this.updateUI(gameState, locationData, itemData);
    }

    /**
     * Display a message in the terminal
     * @param {string} message - HTML-formatted message to display
     * @param {boolean} append - Whether to append to existing content
     * @param {boolean} preserveContent - Whether to preserve existing content regardless of clearOnCommand setting
     */
    displayMessage(message, append = false, preserveContent = false) {
        this.terminalView.display(message, append, preserveContent);
    }

    /**
     * Display a command in the terminal
     * @param {string} command - The command entered by the player
     * @param {boolean} preserveContent - Whether to preserve existing content
     */
    displayCommand(command, preserveContent = false) {
        this.terminalView.displayCommand(command, preserveContent);
    }

    /**
     * Update all UI components with current game state
     * @param {GameState} gameState - The current game state
     * @param {Object} locationData - Map of location data
     * @param {Object} itemData - Map of item data
     */
    updateUI(gameState, locationData, itemData) {
        // Update stats view
        this.updateStats(gameState, locationData);
        
        // Update inventory view
        this.updateInventory(gameState, itemData);
    }

    /**
     * Update the stats view
     * @param {GameState} gameState - The current game state
     * @param {Object} locationData - Map of location data
     */
    updateStats(gameState, locationData) {
        const location = locationData[gameState.currentLocation];
        const locationName = location ? location.name : 'Unknown';
        
        // Fixed: Changed updateStats to updateAll to match the method name in StatsView
        this.statsView.updateAll(locationName, gameState.health, gameState.score);
    }

    /**
     * Update the inventory view
     * @param {GameState} gameState - The current game state
     * @param {Object} itemData - Map of item data
     */
    updateInventory(gameState, itemData) {
        const inventoryItems = gameState.inventory
            .map(id => itemData[id])
            .filter(item => item !== undefined);
        
        // Fixed: Changed updateInventory to update to match the method name in InventoryView
        this.inventoryView.update(inventoryItems);
    }
    
    /**
     * Toggle the screen clearing behavior
     * @returns {boolean} - The new screen clearing setting
     */
    toggleScreenClearing() {
        const currentSetting = this.terminalView.getClearOnCommand();
        this.terminalView.setClearOnCommand(!currentSetting);
        return !currentSetting;
    }
    
    /**
     * Set the screen clearing behavior
     * @param {boolean} clearOnCommand - Whether to clear the screen on each command
     */
    setScreenClearing(clearOnCommand) {
        this.terminalView.setClearOnCommand(clearOnCommand);
    }
    
    /**
     * Get the current screen clearing setting
     * @returns {boolean} - Whether the screen clears on each command
     */
    getScreenClearing() {
        return this.terminalView.getClearOnCommand();
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = UIController;
}
