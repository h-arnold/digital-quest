/**
 * GameEngine.js - Main game engine that connects all components
 * 
 * This file serves as the central controller that connects the game state,
 * data, and UI components to create a complete interactive experience.
 */

class GameEngine {
  /**
   * Constructor for the GameEngine
   * @param {CommandController} commandController - Controller for processing commands
   * @param {UIController} uiController - Controller for updating the UI
   * @param {SaveLoadController} saveLoadController - Controller for save/load functionality
   */
  constructor(commandController, uiController, saveLoadController) {
    this.gameState = new GameState();
    this.commandController = commandController;
    this.uiController = uiController;
    this.saveLoadController = saveLoadController;
    this.dataLoader = new GameDataLoader();
    this.dataIntegrator = null;
    this.isInitialized = false;
    this.isGameOver = false;
  }

  /**
   * Initializes the game engine and loads all data
   * @returns {Promise} Resolves when initialization is complete
   */
  async initialize() {
    try {
      // Display loading message
      this.uiController.displayMessage("Loading the Digital Quest world...");
      
      // Load all game data
      const dataLoaded = await this.dataLoader.loadAllData();
      
      if (!dataLoaded) {
        throw new Error("Failed to load game data");
      }
      
      // Get the loaded game data
      const gameData = this.dataLoader.getGameData();
      
      // Create the data integrator
      this.dataIntegrator = new GameDataIntegrator(this.gameState, gameData);
      
      // Initialize the game world
      this.dataIntegrator.initializeGameWorld();
      
      // Set up controllers with game state
      this.commandController.setGameState(this.gameState);
      this.saveLoadController.setGameState(this.gameState);
      
      // Display welcome message
      this.displayWelcomeMessage();
      
      // Display current location
      this.displayCurrentLocation();
      
      this.isInitialized = true;
      return true;
    } catch (error) {
      console.error("Error initializing game engine:", error);
      this.uiController.displayError("Failed to initialize the game: " + error.message);
      return false;
    }
  }

  /**
   * Displays the welcome message
   */
  displayWelcomeMessage() {
    const welcomeMessage = `
  Welcome to Digital Quest: A GCSE Digital Technology Adventure!
  You're in the Central Hub of the Digital Realm, where computing concepts take physical form. Explore this world, solve challenges, and learn about digital technology.
  During your journey, you'll find:
  - Locations representing digital technology areas
  - Educational items with key concepts
  - NPCs offering knowledge quizzes
  - Challenges testing your understanding

  Type 'help' for commands.
  `;
    this.uiController.displayMessage(welcomeMessage);
  }

  /**
   * Displays the current location description
   */
  displayCurrentLocation() {
    const currentLocation = this.gameState.getCurrentLocation();
    
    if (!currentLocation) {
      this.uiController.displayError("Error: No current location found");
      return;
    }
    
    // Display location name and description
    this.uiController.displayLocation(currentLocation);
    
    // Display items in the location
    this.displayItemsInLocation(currentLocation);
    
    // Display NPCs in the location
    this.displayNPCsInLocation(currentLocation);
    
    // Display challenges in the location
    this.displayChallengesInLocation(currentLocation);
    
    // Display exits from the location
    this.displayExitsFromLocation(currentLocation);
  }

  /**
   * Displays items in the current location
   * @param {Location} location - The current location
   */
  displayItemsInLocation(location) {
    const itemIds = location.getItems();
    
    if (itemIds.length > 0) {
      let itemsText = "You see:";
      
      for (const itemId of itemIds) {
        const item = this.gameState.getItem(itemId);
        if (item) {
          itemsText += `\n- ${item.getName()}`;
        }
      }
      
      this.uiController.displayMessage(itemsText);
    }
  }

  /**
   * Displays NPCs in the current location
   * @param {Location} location - The current location
   */
  displayNPCsInLocation(location) {
    const npcIds = location.getNPCs();
    
    if (npcIds.length > 0) {
      let npcsText = "Characters present:";
      
      for (const npcId of npcIds) {
        const npc = this.gameState.getNPC(npcId);
        if (npc) {
          npcsText += `\n- ${npc.getName()}`;
        }
      }
      
      this.uiController.displayMessage(npcsText);
    }
  }

  /**
   * Displays challenges in the current location
   * @param {Location} location - The current location
   */
  displayChallengesInLocation(location) {
    const challengeIds = location.getChallenges();
    
    if (challengeIds.length > 0) {
      let challengesText = "Challenges:";
      
      for (const challengeId of challengeIds) {
        const challenge = this.gameState.getChallenge(challengeId);
        if (challenge) {
          challengesText += `\n- ${challenge.getTitle()}: ${challenge.getDescription()}`;
        }
      }
      
      this.uiController.displayMessage(challengesText);
    }
  }

  /**
   * Displays exits from the current location
   * @param {Location} location - The current location
   */
  displayExitsFromLocation(location) {
    const exits = location.getExits();
    
    if (Object.keys(exits).length > 0) {
      let exitsText = "Exits:";
      
      for (const direction in exits) {
        const targetLocationId = exits[direction];
        const targetLocation = this.gameState.getLocation(targetLocationId);
        
        if (targetLocation) {
          exitsText += `\n- ${direction}: to ${targetLocation.getName()}`;
        }
      }
      
      this.uiController.displayMessage(exitsText);
    }
  }

  /**
   * Processes a user command
   * @param {string} commandText - The command text entered by the user
   */
  processCommand(commandText) {
    if (!this.isInitialized) {
      this.uiController.displayError("Game is not initialized yet. Please wait...");
      return;
    }
    
    if (this.isGameOver) {
      this.uiController.displayMessage("Game over! Please restart to play again.");
      return;
    }
    
    // Process the command
    const result = this.commandController.processCommand(commandText);
    
    // Display the result
    if (result.message) {
      this.uiController.displayMessage(result.message);
    }
    
    // If the command changed the location, display the new location
    if (result.locationChanged) {
      this.displayCurrentLocation();
    }
    
    // If the command triggered a challenge, handle it
    if (result.challengeTriggered) {
      this.handleChallenge(result.challengeId);
    }
    
    // If the command triggered a danger scenario, handle it
    if (result.dangerTriggered) {
      this.handleDangerScenario(result.dangerId);
    }
    
    // If the command triggered an NPC interaction, handle it
    if (result.npcInteraction) {
      this.handleNPCInteraction(result.npcId);
    }
    
    // Update the UI with current game state
    this.updateUI();
    
    // Check if the player died
    if (result.playerDied) {
      this.handlePlayerDeath();
    }
    
    // Check if the game is over
    if (result.gameOver) {
      this.handleGameOver(result.gameOverReason);
    }
  }

  /**
   * Handles a challenge interaction
   * @param {string} challengeId - The ID of the challenge
   */
  handleChallenge(challengeId) {
    const challenge = this.gameState.getChallenge(challengeId);
    
    if (!challenge) {
      this.uiController.displayError(`Challenge ${challengeId} not found`);
      return;
    }
    
    // Display the challenge text
    this.uiController.displayMessage(challenge.getChallengeText());
    
    // If it's a multiple choice challenge, display the options
    if (challenge.getSolutionType() === 'multiple_choice') {
      const options = challenge.getOptions();
      let optionsText = "Options:";
      
      for (let i = 0; i < options.length; i++) {
        optionsText += `\n${i + 1}. ${options[i]}`;
      }
      
      this.uiController.displayMessage(optionsText);
      this.uiController.displayMessage("Enter your answer as a number (e.g., '1', '2', etc.)");
    } else {
      this.uiController.displayMessage("Enter your answer:");
    }
    
    // Set the current challenge in the game state
    this.gameState.setCurrentChallenge(challengeId);
  }

  /**
   * Handles a danger scenario interaction
   * @param {string} dangerId - The ID of the danger scenario
   */
  handleDangerScenario(dangerId) {
    const scenario = this.gameState.getDangerScenario(dangerId);
    
    if (!scenario) {
      this.uiController.displayError(`Danger scenario ${dangerId} not found`);
      return;
    }
    
    // Display the trigger text
    this.uiController.displayMessage(scenario.getTriggerText());
    
    // If it's a multiple choice scenario, display the options
    if (scenario.getSolutionType() === 'multiple_choice') {
      const options = scenario.getOptions();
      let optionsText = "Options:";
      
      for (let i = 0; i < options.length; i++) {
        optionsText += `\n${i + 1}. ${options[i]}`;
      }
      
      this.uiController.displayMessage(optionsText);
      this.uiController.displayMessage("Enter your answer as a number (e.g., '1', '2', etc.)");
    } else {
      this.uiController.displayMessage("Enter your answer:");
    }
    
    // Set the current danger scenario in the game state
    this.gameState.setCurrentDangerScenario(dangerId);
  }

  /**
   * Handles an NPC interaction
   * @param {string} npcId - The ID of the NPC
   */
  handleNPCInteraction(npcId) {
    const npc = this.gameState.getNPC(npcId);
    
    if (!npc) {
      this.uiController.displayError(`NPC ${npcId} not found`);
      return;
    }
    
    // Display the NPC introduction
    this.uiController.displayMessage(`${npc.getName()} says: "${npc.getIntroduction()}"`);
    
    // Display quiz options
    const quizOptions = npc.getQuizOptions();
    
    if (quizOptions.length > 0) {
      let optionsText = "Quiz topics:";
      
      for (let i = 0; i < quizOptions.length; i++) {
        optionsText += `\n${i + 1}. ${quizOptions[i]}`;
      }
      
      this.uiController.displayMessage(optionsText);
      this.uiController.displayMessage("Enter the number of the quiz you want to take, or 'bye' to leave:");
    } else {
      this.uiController.displayMessage("This NPC doesn't have any quizzes available.");
    }
    
    // Set the current NPC in the game state
    this.gameState.setCurrentNPC(npcId);
  }

  /**
   * Updates the UI with current game state
   */
  updateUI() {
    // Update inventory display
    this.uiController.updateInventory(this.gameState.getInventory());
    
    // Update stats display
    this.uiController.updateStats({
      health: this.gameState.getHealth(),
      score: this.gameState.getScore(),
      moves: this.gameState.getMoves()
    });
  }

  /**
   * Handles player death
   */
  handlePlayerDeath() {
    this.uiController.displayMessage("You have died! Game over.");
    this.uiController.displayMessage("You can load a saved game or restart to continue playing.");
    this.isGameOver = true;
  }

  /**
   * Handles game over
   * @param {string} reason - The reason for game over
   */
  handleGameOver(reason) {
    this.uiController.displayMessage(`Game over: ${reason}`);
    this.uiController.displayMessage("You can load a saved game or restart to play again.");
    this.isGameOver = true;
  }

  /**
   * Saves the current game state
   * @returns {Object} The save data object
   */
  saveGame() {
    return this.saveLoadController.saveGame();
  }

  /**
   * Loads a game from save data
   * @param {Object} saveData - The save data to load
   * @returns {boolean} Whether the load was successful
   */
  loadGame(saveData) {
    const success = this.saveLoadController.loadGame(saveData);
    
    if (success) {
      // Reset game over flag
      this.isGameOver = false;
      
      // Display current location after loading
      this.displayCurrentLocation();
      
      // Update UI
      this.updateUI();
    }
    
    return success;
  }

  /**
   * Restarts the game
   */
  restartGame() {
    // Reset game state
    this.gameState = new GameState();
    
    // Reinitialize the game world
    this.dataIntegrator = new GameDataIntegrator(this.gameState, this.dataLoader.getGameData());
    this.dataIntegrator.initializeGameWorld();
    
    // Update controllers with new game state
    this.commandController.setGameState(this.gameState);
    this.saveLoadController.setGameState(this.gameState);
    
    // Reset game over flag
    this.isGameOver = false;
    
    // Display welcome message
    this.displayWelcomeMessage();
    
    // Display current location
    this.displayCurrentLocation();
    
    // Update UI
    this.updateUI();
  }

  /**
   * Gets curriculum coverage statistics
   * @returns {Object} Statistics about curriculum coverage
   */
  getCurriculumCoverageStats() {
    if (!this.dataIntegrator) {
      return null;
    }
    
    return this.dataIntegrator.getCurriculumCoverageStats();
  }
}
