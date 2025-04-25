/**
 * StorageManager.js - Utility for managing game state storage
 * 
 * This class provides methods for saving and loading game state
 * using browser localStorage and file downloads/uploads.
 */
class StorageManager {
    /**
     * Create a new StorageManager instance
     * @param {string} localStorageKey - Key to use for localStorage
     */
    constructor(localStorageKey = 'gcse_adventure_save') {
        this.localStorageKey = localStorageKey;
    }

    /**
     * Save game state to localStorage
     * @param {string} stateJson - Serialized game state JSON
     * @returns {boolean} - Whether the save was successful
     */
    saveToLocalStorage(stateJson) {
        try {
            localStorage.setItem(this.localStorageKey, stateJson);
            return true;
        } catch (error) {
            console.error("Error saving to localStorage:", error);
            return false;
        }
    }

    /**
     * Load game state from localStorage
     * @returns {string|null} - Serialized game state JSON or null if not found
     */
    loadFromLocalStorage() {
        try {
            return localStorage.getItem(this.localStorageKey);
        } catch (error) {
            console.error("Error loading from localStorage:", error);
            return null;
        }
    }

    /**
     * Save game state to a downloadable file
     * @param {string} stateJson - Serialized game state JSON
     * @param {string} filename - Name of the file to download
     */
    saveToFile(stateJson, filename = 'gcse_adventure_save.json') {
        try {
            // Create a blob with the JSON data
            const blob = new Blob([stateJson], { type: 'application/json' });
            
            // Create a URL for the blob
            const url = URL.createObjectURL(blob);
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            
            // Append to the document, click it, and remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Release the URL object
            URL.revokeObjectURL(url);
            
            return true;
        } catch (error) {
            console.error("Error saving to file:", error);
            return false;
        }
    }

    /**
     * Load game state from an uploaded file
     * @param {File} file - The uploaded file object
     * @returns {Promise<string>} - Promise resolving to serialized game state JSON
     */
    loadFromFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (event) => {
                try {
                    const stateJson = event.target.result;
                    resolve(stateJson);
                } catch (error) {
                    reject(error);
                }
            };
            
            reader.onerror = (error) => {
                reject(error);
            };
            
            reader.readAsText(file);
        });
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = StorageManager;
}
