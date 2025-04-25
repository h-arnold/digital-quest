/**
 * InventoryView.js - View for the player's inventory
 * 
 * This class manages the display of the player's inventory items
 * in the sidebar of the game interface.
 */
class InventoryView {
    /**
     * Create a new InventoryView instance
     * @param {string} inventoryElementId - ID of the HTML element for inventory display
     */
    constructor(inventoryElementId = 'player-inventory') {
        this.inventoryElement = document.getElementById(inventoryElementId);
    }

    /**
     * Update the inventory display based on the player's current inventory
     * @param {Array} inventory - Array of item objects in the player's inventory
     */
    update(inventory) {
        // Clear the current inventory display
        this.inventoryElement.innerHTML = '';
        
        // If inventory is empty, show a message
        if (!inventory || inventory.length === 0) {
            this.inventoryElement.innerHTML = '<li class="empty-inventory">Your inventory is empty</li>';
            return;
        }
        
        // Add each item to the display
        inventory.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.innerHTML = `<span class="item">${item.name}</span>`;
            itemElement.title = item.description;
            itemElement.dataset.itemId = item.id;
            
            // Add click event to examine the item
            itemElement.addEventListener('click', () => {
                // This will be connected to the game controller later
                if (window.gameController) {
                    window.gameController.processCommand(`examine ${item.name}`);
                }
            });
            
            this.inventoryElement.appendChild(itemElement);
        });
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = InventoryView;
}
