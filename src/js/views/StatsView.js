/**
 * StatsView.js - View for the player's statistics
 * 
 * This class manages the display of the player's statistics
 * such as current location, health, and score.
 */
class StatsView {
    /**
     * Create a new StatsView instance
     * @param {string} locationElementId - ID of the HTML element for location display
     * @param {string} healthElementId - ID of the HTML element for health display
     * @param {string} scoreElementId - ID of the HTML element for score display
     */
    constructor(
        locationElementId = 'player-location',
        healthElementId = 'player-health',
        scoreElementId = 'player-score'
    ) {
        this.locationElement = document.getElementById(locationElementId);
        this.healthElement = document.getElementById(healthElementId);
        this.scoreElement = document.getElementById(scoreElementId);
    }

    /**
     * Update the location display
     * @param {string} locationName - Name of the current location
     */
    updateLocation(locationName) {
        this.locationElement.textContent = locationName;
    }

    /**
     * Update the health display
     * @param {number} health - Current health value
     */
    updateHealth(health) {
        this.healthElement.textContent = health;
        
        // Add visual indication of health status
        this.healthElement.className = '';
        if (health <= 25) {
            this.healthElement.classList.add('danger');
        } else if (health <= 50) {
            this.healthElement.classList.add('warning');
        } else {
            this.healthElement.classList.add('good');
        }
    }

    /**
     * Update the score display
     * @param {number} score - Current score value
     */
    updateScore(score) {
        this.scoreElement.textContent = score;
    }

    /**
     * Update all stats at once
     * @param {string} locationName - Name of the current location
     * @param {number} health - Current health value
     * @param {number} score - Current score value
     */
    updateAll(locationName, health, score) {
        this.updateLocation(locationName);
        this.updateHealth(health);
        this.updateScore(score);
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = StatsView;
}
