/**
 * SaveLoadController.js - Controller for managing game save/load functionality
 * 
 * This class handles saving and loading game state, including
 * local storage and file download/upload operations.
 */
class SaveLoadController {
    /**
     * Create a new SaveLoadController instance
     * @param {GameController} gameController - Reference to the main game controller
     * @param {string} localStorageKey - Key to use for localStorage
     */
    constructor(gameController, localStorageKey = 'gcse_adventure_save') {
        this.gameController = gameController;
        this.storageManager = new StorageManager(localStorageKey);
        
        // Set up event listeners for the save/load buttons
        this.setupEventListeners();
    }

    /**
     * Set up event listeners for save/load UI elements
     */
    setupEventListeners() {
        // Save button
        const saveButton = document.getElementById('save-game-btn');
        if (saveButton) {
            saveButton.addEventListener('click', () => {
                this.saveToFile();
            });
        }
        
        // Load button
        const loadButton = document.getElementById('load-game-btn');
        if (loadButton) {
            loadButton.addEventListener('click', () => {
                // Trigger file input click
                const fileInput = document.getElementById('load-game-file');
                if (fileInput) {
                    fileInput.click();
                }
            });
        }
        
        // File input change
        const fileInput = document.getElementById('load-game-file');
        if (fileInput) {
            fileInput.addEventListener('change', (event) => {
                if (event.target.files && event.target.files.length > 0) {
                    this.loadFromFile(event.target.files[0]);
                }
            });
        }
    }

    /**
     * Save the current game state to localStorage
     * @returns {boolean} - Whether the save was successful
     */
    saveToLocalStorage() {
        const gameState = this.gameController.getGameState();
        if (!gameState) {
            return false;
        }
        
        const stateJson = gameState.serialize();
        return this.storageManager.saveToLocalStorage(stateJson);
    }

    /**
     * Load game state from localStorage
     * @returns {boolean} - Whether the load was successful
     */
    loadFromLocalStorage() {
        const stateJson = this.storageManager.loadFromLocalStorage();
        if (!stateJson) {
            return false;
        }
        
        return this.gameController.loadGameState(stateJson);
    }

    /**
     * Save the current game state to a downloadable file
     * @param {string} filename - Name of the file to download
     * @returns {boolean} - Whether the save was successful
     */
    saveToFile(filename = 'gcse_adventure_save.json') {
        const gameState = this.gameController.getGameState();
        if (!gameState) {
            return false;
        }
        
        const stateJson = gameState.serialize();
        return this.storageManager.saveToFile(stateJson, filename);
    }

    /**
     * Load game state from an uploaded file
     * @param {File} file - The uploaded file object
     * @returns {Promise<boolean>} - Promise resolving to whether the load was successful
     */
    async loadFromFile(file) {
        try {
            const stateJson = await this.storageManager.loadFromFile(file);
            return this.gameController.loadGameState(stateJson);
        } catch (error) {
            console.error("Error loading game from file:", error);
            return false;
        }
    }

    /**
     * Check if there is a saved game in localStorage
     * @returns {boolean} - Whether a saved game exists
     */
    hasSavedGame() {
        return !!this.storageManager.loadFromLocalStorage();
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = SaveLoadController;
}
