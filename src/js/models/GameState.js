/**
 * GameState.js - Core model for managing the game state
 * 
 * This class represents the entire state of the game, including player position,
 * inventory, health, score, and game flags. It provides methods for state changes
 * and serialization for save/load functionality.
 */
class GameState {
    /**
     * Create a new GameState instance
     * @param {string} currentLocation - The ID of the starting location
     * @param {number} health - Initial player health
     * @param {number} score - Initial player score
     */
    constructor(currentLocation = 'digital_nexus', health = 100, score = 0) {
        this.currentLocation = currentLocation;
        this.health = health;
        this.score = score;
        this.inventory = [];
        this.visitedLocations = {};
        this.gameFlags = {};
        this.currentChallenge = null;
        this.currentQuiz = null;
        this.currentDanger = null;
    }

    /**
     * Move the player to a new location
     * @param {string} locationId - The ID of the destination location
     * @returns {boolean} - Whether the move was successful
     */
    moveToLocation(locationId) {
        // Check if the location exists
        if (!locationData[locationId]) {
            return false;
        }
        
        this.currentLocation = locationId;
        this.visitedLocations[locationId] = true;
        return true;
    }

    /**
     * Add an item to the player's inventory
     * @param {string} itemId - The ID of the item to add
     * @returns {boolean} - Whether the item was successfully added
     */
    addToInventory(itemId) {
        // Check if the item exists
        if (!itemData[itemId]) {
            return false;
        }
        
        this.inventory.push(itemId);
        return true;
    }

    /**
     * Remove an item from the player's inventory
     * @param {string} itemId - The ID of the item to remove
     * @returns {boolean} - Whether the item was successfully removed
     */
    removeFromInventory(itemId) {
        const index = this.inventory.indexOf(itemId);
        if (index === -1) {
            return false;
        }
        
        this.inventory.splice(index, 1);
        return true;
    }

    /**
     * Check if the player has a specific item
     * @param {string} itemId - The ID of the item to check
     * @returns {boolean} - Whether the player has the item
     */
    hasItem(itemId) {
        return this.inventory.includes(itemId);
    }

    /**
     * Modify the player's health
     * @param {number} amount - The amount to change (positive for healing, negative for damage)
     * @returns {number} - The new health value
     */
    modifyHealth(amount) {
        this.health += amount;
        
        // Ensure health doesn't go below 0
        if (this.health < 0) {
            this.health = 0;
        }
        
        // Cap health at 100
        if (this.health > 100) {
            this.health = 100;
        }
        
        return this.health;
    }

    /**
     * Modify the player's score
     * @param {number} amount - The amount to change
     * @returns {number} - The new score value
     */
    modifyScore(amount) {
        this.score += amount;
        return this.score;
    }

    /**
     * Set a game flag
     * @param {string} flag - The flag name
     * @param {any} value - The flag value
     */
    setFlag(flag, value) {
        this.gameFlags[flag] = value;
    }

    /**
     * Get a game flag
     * @param {string} flag - The flag name
     * @returns {any} - The flag value, or undefined if not set
     */
    getFlag(flag) {
        return this.gameFlags[flag];
    }

    /**
     * Start a challenge
     * @param {string} challengeId - The ID of the challenge
     * @returns {boolean} - Whether the challenge was successfully started
     */
    startChallenge(challengeId) {
        // Check if the challenge exists
        if (!challengeData[challengeId]) {
            return false;
        }
        
        this.currentChallenge = challengeId;
        return true;
    }

    /**
     * End the current challenge
     */
    endChallenge() {
        this.currentChallenge = null;
    }

    /**
     * Start a quiz
     * @param {string} npcId - The ID of the NPC giving the quiz
     * @param {object} quiz - The quiz object
     * @returns {boolean} - Whether the quiz was successfully started
     */
    startQuiz(npcId, quiz) {
        this.currentQuiz = {
            npcId: npcId,
            quiz: quiz,
            currentQuestion: 0,
            correctAnswers: 0
        };
        return true;
    }

    /**
     * End the current quiz
     */
    endQuiz() {
        this.currentQuiz = null;
    }

    /**
     * Trigger a danger scenario
     * @param {string} dangerId - The ID of the danger scenario
     * @returns {boolean} - Whether the danger scenario was successfully triggered
     */
    triggerDanger(dangerId) {
        // Check if the danger scenario exists
        if (!dangerScenarioData[dangerId]) {
            return false;
        }
        
        this.currentDanger = dangerId;
        return true;
    }

    /**
     * End the current danger scenario
     */
    endDanger() {
        this.currentDanger = null;
    }

    /**
     * Serialize the game state to JSON for saving
     * @returns {string} - JSON string representation of the game state
     */
    serialize() {
        return JSON.stringify({
            currentLocation: this.currentLocation,
            health: this.health,
            score: this.score,
            inventory: this.inventory,
            visitedLocations: this.visitedLocations,
            gameFlags: this.gameFlags,
            currentChallenge: this.currentChallenge,
            currentQuiz: this.currentQuiz,
            currentDanger: this.currentDanger
        });
    }

    /**
     * Deserialize a JSON string to restore game state
     * @param {string} jsonString - The serialized game state
     * @returns {boolean} - Whether deserialization was successful
     */
    deserialize(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            
            this.currentLocation = data.currentLocation;
            this.health = data.health;
            this.score = data.score;
            this.inventory = data.inventory;
            this.visitedLocations = data.visitedLocations;
            this.gameFlags = data.gameFlags;
            this.currentChallenge = data.currentChallenge;
            this.currentQuiz = data.currentQuiz;
            this.currentDanger = data.currentDanger;
            
            return true;
        } catch (error) {
            console.error("Error deserializing game state:", error);
            return false;
        }
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = GameState;
}
