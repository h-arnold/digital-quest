/**
 * main.js - Application entry point
 * 
 * This file initializes the game and starts it when the page loads.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create and initialize the game controller
    const gameController = new GameController();
    
    // Initialize the game
    gameController.initialize()
        .then(success => {
            if (!success) {
                console.error("Failed to initialize game");
            }
        })
        .catch(error => {
            console.error("Error initializing game:", error);
        });
});
