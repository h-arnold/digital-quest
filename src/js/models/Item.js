/**
 * Item.js - Model for game items
 * 
 * This class represents an item in the game world that can be
 * examined, taken, dropped, and used by the player.
 */
class Item {
    /**
     * Create a new Item instance
     * @param {string} id - Unique identifier for the item
     * @param {string} name - Display name of the item
     * @param {string} description - Detailed description of the item
     * @param {string} location - Current location of the item (location ID or 'inventory')
     * @param {boolean} canTake - Whether the player can pick up this item
     * @param {string} useText - Text displayed when the item is used
     */
    constructor(id, name, description, location, canTake = true, useText = "") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.canTake = canTake;
        this.useText = useText;
    }

    /**
     * Get a formatted description of the item
     * @returns {string} - HTML-formatted description
     */
    getDescription() {
        return `<p><span class="item">${this.name}</span>: ${this.description}</p>`;
    }

    /**
     * Use the item and get the result text
     * @param {GameState} gameState - Current game state
     * @returns {string} - Text describing the result of using the item
     */
    use(gameState) {
        // Basic implementation - can be overridden for items with special effects
        return this.useText || `You use the ${this.name}, but nothing special happens.`;
    }

    /**
     * Create an Item instance from raw data
     * @param {object} data - Raw item data
     * @returns {Item} - A new Item instance
     */
    static fromData(data) {
        return new Item(
            data.id,
            data.name,
            data.description,
            data.location,
            data.can_take !== undefined ? data.can_take : true,
            data.use_text || ""
        );
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = Item;
}
