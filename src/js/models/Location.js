/**
 * Location.js - Model for game locations
 * 
 * This class represents a location in the game world with description,
 * exits, and contents. It provides methods for examining and interacting
 * with the location.
 */
class Location {
    /**
     * Create a new Location instance
     * @param {string} id - Unique identifier for the location
     * @param {string} name - Display name of the location
     * @param {string} description - Detailed description of the location
     * @param {Array} exits - Array of exit objects connecting to other locations
     */
    constructor(id, name, description, exits = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.exits = exits;
    }

    /**
     * Get a formatted description of the location
     * @param {Array} items - Items present in this location
     * @param {Array} npcs - NPCs present in this location
     * @param {Array} challenges - Challenges available in this location
     * @param {Array} dangers - Danger scenarios in this location
     * @returns {string} - HTML-formatted description
     */
    getDescription(items = [], npcs = [], challenges = [], dangers = []) {
        let output = `<h2>${this.name}</h2>`;
        output += `<p>${this.description}</p>`;
        
        // List exits
        if (this.exits && this.exits.length > 0) {
            output += "<p>Exits: ";
            output += this.exits.map(exit => 
                `<span class="exit">${exit.direction}</span> to the ${exit.destination_name}`
            ).join(', ');
            output += "</p>";
        }
        
        // List items in the location
        if (items.length > 0) {
            output += "<p>You can see: ";
            output += items.map(item => 
                `<span class="item">${item.name}</span>`
            ).join(', ');
            output += "</p>";
        }
        
        // List NPCs in the location
        if (npcs.length > 0) {
            output += "<p>Present here: ";
            output += npcs.map(npc => 
                `<span class="npc">${npc.name}</span>`
            ).join(', ');
            output += "</p>";
        }
        
        // List challenges in the location
        if (challenges.length > 0) {
            output += "<p>Challenges: ";
            output += challenges.map(challenge => 
                `<span class="challenge">${challenge.title}</span>`
            ).join(', ');
            output += "</p>";
        }
        
        // List danger scenarios in the location
        if (dangers.length > 0) {
            output += "<p>You notice: ";
            output += dangers.map(danger => 
                `<span class="danger">${danger.description}</span>`
            ).join(', ');
            output += "</p>";
        }
        
        return output;
    }

    /**
     * Find an exit in a specific direction
     * @param {string} direction - The direction to check
     * @returns {object|null} - The exit object if found, null otherwise
     */
    getExit(direction) {
        return this.exits.find(exit => 
            exit.direction.toLowerCase() === direction.toLowerCase() ||
            exit.destination_name.toLowerCase() === direction.toLowerCase()
        ) || null;
    }

    /**
     * Check if this location has an exit to a specific destination
     * @param {string} destinationId - The ID of the destination location
     * @returns {boolean} - Whether an exit to the destination exists
     */
    hasExitTo(destinationId) {
        return this.exits.some(exit => exit.destination === destinationId);
    }

    /**
     * Create a Location instance from raw data
     * @param {object} data - Raw location data
     * @returns {Location} - A new Location instance
     */
    static fromData(data) {
        return new Location(
            data.id,
            data.name,
            data.description,
            data.exits || []
        );
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = Location;
}
