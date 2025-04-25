/**
 * GameController.js - Main controller for the game
 * 
 * This class coordinates all game functionality, managing the game state
 * and delegating to other controllers for specific tasks.
 */
class GameController {
    /**
     * Create a new GameController instance
     */
    constructor() {
        // Initialize views
        this.terminalView = new TerminalView();
        this.inventoryView = new InventoryView();
        this.statsView = new StatsView();
        
        // Initialize controllers
        this.uiController = new UIController(this.terminalView, this.inventoryView, this.statsView);
        this.commandController = new CommandController(this);
        this.saveLoadController = new SaveLoadController(this);
        
        // Initialize game state
        this.gameState = new GameState();
        
        // Initialize game data
        this.locationData = {};
        this.itemData = {};
        this.npcData = {};
        this.challengeData = {};
        this.dangerScenarioData = {};
        
        // Set up event listeners
        this.setupEventListeners();
    }

    /**
     * Initialize the game
     */
    async initialize() {
        try {
            // Load game data
            await this.loadGameData();
            
            // Initialize UI
            this.uiController.initialize(this.gameState, this.locationData, this.itemData);
            
            // Describe the starting location
            const locationDescription = this.describeCurrentLocation();
            this.uiController.displayMessage(locationDescription, true);
            
            // Check for saved game
            if (this.saveLoadController.hasSavedGame()) {
                this.uiController.displayMessage(
                    "<p>A saved game was found. Type 'load' to restore your previous progress.</p>",
                    true
                );
            }
            
            // Make the game controller globally accessible for UI event handlers
            window.gameController = this;
            
            return true;
        } catch (error) {
            console.error("Error initializing game:", error);
            this.uiController.displayMessage(
                "<p class='error'>Error initializing game. Please refresh the page and try again.</p>"
            );
            return false;
        }
    }

    /**
     * Set up event listeners for user input
     */
    setupEventListeners() {
        // Command form submission
        const gameForm = document.getElementById('game-form');
        if (gameForm) {
            gameForm.addEventListener('submit', (event) => {
                event.preventDefault();
                
                const inputElement = document.getElementById('game-input');
                if (inputElement) {
                    const command = inputElement.value.trim();
                    if (command) {
                        this.processCommand(command);
                        inputElement.value = '';
                    }
                }
            });
        }
    }

    /**
     * Load all game data
     */
    async loadGameData() {
        // In a real implementation, this would load data from JSON files
        // For now, we'll use the data from the data directory
        
        // Convert raw data to model instances
        this.convertLocationData(locationData);
        this.convertItemData(itemData);
        this.convertNPCData(npcData);
        this.convertChallengeData(challengeData);
        this.convertDangerScenarioData(dangerScenarioData);
    }

    /**
     * Convert raw location data to Location instances
     * @param {object} rawData - Raw location data
     */
    convertLocationData(rawData) {
        for (const [id, data] of Object.entries(rawData)) {
            this.locationData[id] = Location.fromData(data);
        }
    }

    /**
     * Convert raw item data to Item instances
     * @param {object} rawData - Raw item data
     */
    convertItemData(rawData) {
        for (const [id, data] of Object.entries(rawData)) {
            this.itemData[id] = Item.fromData(data);
        }
    }

    /**
     * Convert raw NPC data to NPC instances
     * @param {object} rawData - Raw NPC data
     */
    convertNPCData(rawData) {
        for (const [id, data] of Object.entries(rawData)) {
            this.npcData[id] = NPC.fromData(data);
        }
    }

    /**
     * Convert raw challenge data to Challenge instances
     * @param {object} rawData - Raw challenge data
     */
    convertChallengeData(rawData) {
        for (const [id, data] of Object.entries(rawData)) {
            this.challengeData[id] = Challenge.fromData(data);
        }
    }

    /**
     * Convert raw danger scenario data to DangerScenario instances
     * @param {object} rawData - Raw danger scenario data
     */
    convertDangerScenarioData(rawData) {
        for (const [id, data] of Object.entries(rawData)) {
            this.dangerScenarioData[id] = DangerScenario.fromData(data);
        }
    }

    /**
     * Process a player command
     * @param {string} commandString - The raw command input from the player
     */
    processCommand(commandString) {
        // Display the command in the terminal
        this.uiController.displayCommand(commandString);
        
        // Process the command and get the result
        const result = this.commandController.processCommand(commandString);
        
        // Display the result
        this.uiController.displayMessage(result, true);
        
        // Update the UI
        this.uiController.updateUI(this.gameState, this.locationData, this.itemData);
    }

    /**
     * Get the current game state
     * @returns {GameState} - The current game state
     */
    getGameState() {
        return this.gameState;
    }

    /**
     * Load a game state from JSON
     * @param {string} stateJson - Serialized game state JSON
     * @returns {boolean} - Whether the load was successful
     */
    loadGameState(stateJson) {
        try {
            // Create a new game state and deserialize the JSON
            const success = this.gameState.deserialize(stateJson);
            
            if (success) {
                // Update the UI
                this.uiController.updateUI(this.gameState, this.locationData, this.itemData);
                
                // Describe the current location
                const locationDescription = this.describeCurrentLocation();
                this.uiController.displayMessage(
                    "<p>Game loaded successfully.</p>" + locationDescription
                );
                
                return true;
            } else {
                this.uiController.displayMessage(
                    "<p class='error'>Error loading game: Invalid save data.</p>",
                    true
                );
                return false;
            }
        } catch (error) {
            console.error("Error loading game state:", error);
            this.uiController.displayMessage(
                "<p class='error'>Error loading game: " + error.message + "</p>",
                true
            );
            return false;
        }
    }

    /**
     * Describe the current location
     * @returns {string} - HTML-formatted description of the current location
     */
    describeCurrentLocation() {
        const locationId = this.gameState.currentLocation;
        const location = this.locationData[locationId];
        
        if (!location) {
            return "<p class='error'>Error: Current location not found!</p>";
        }
        
        // Mark location as visited
        this.gameState.visitedLocations[locationId] = true;
        
        // Get items in the location
        const locationItems = this.getItemsInLocation(locationId);
        
        // Get NPCs in the location
        const locationNPCs = this.getNPCsInLocation(locationId);
        
        // Get challenges in the location
        const locationChallenges = this.getChallengesInLocation(locationId);
        
        // Get danger scenarios in the location
        const locationDangers = this.getDangerScenariosInLocation(locationId);
        
        // Get the formatted description
        return location.getDescription(
            locationItems,
            locationNPCs,
            locationChallenges,
            locationDangers
        );
    }

    /**
     * Get items in a specific location
     * @param {string} locationId - The location ID to check
     * @returns {Array} - Array of items in the location
     */
    getItemsInLocation(locationId) {
        return Object.values(this.itemData).filter(item => item.location === locationId);
    }

    /**
     * Get NPCs in a specific location
     * @param {string} locationId - The location ID to check
     * @returns {Array} - Array of NPCs in the location
     */
    getNPCsInLocation(locationId) {
        return Object.values(this.npcData).filter(npc => npc.location === locationId);
    }

    /**
     * Get challenges in a specific location
     * @param {string} locationId - The location ID to check
     * @returns {Array} - Array of challenges in the location
     */
    getChallengesInLocation(locationId) {
        return Object.values(this.challengeData).filter(challenge => challenge.location === locationId);
    }

    /**
     * Get danger scenarios in a specific location
     * @param {string} locationId - The location ID to check
     * @returns {Array} - Array of danger scenarios in the location
     */
    getDangerScenariosInLocation(locationId) {
        return Object.values(this.dangerScenarioData).filter(danger => danger.location === locationId);
    }

    /**
     * Examine an object in the game
     * @param {string} targetName - Name of the object to examine
     * @returns {string} - Description of the object
     */
    examineObject(targetName) {
        const locationId = this.gameState.currentLocation;
        
        // Check if it's an item in the location
        const locationItems = this.getItemsInLocation(locationId);
        const item = locationItems.find(i => i.name.toLowerCase() === targetName.toLowerCase());
        
        if (item) {
            return item.getDescription();
        }
        
        // Check if it's an item in inventory
        const inventoryItems = this.gameState.inventory.map(id => this.itemData[id]).filter(i => i);
        const invItem = inventoryItems.find(i => i.name.toLowerCase() === targetName.toLowerCase());
        
        if (invItem) {
            return invItem.getDescription();
        }
        
        // Check if it's an NPC
        const locationNPCs = this.getNPCsInLocation(locationId);
        const npc = locationNPCs.find(n => n.name.toLowerCase() === targetName.toLowerCase());
        
        if (npc) {
            return npc.getIntroduction();
        }
        
        // Check if it's a challenge
        const locationChallenges = this.getChallengesInLocation(locationId);
        const challenge = locationChallenges.find(c => 
            c.title.toLowerCase().includes(targetName.toLowerCase())
        );
        
        if (challenge) {
            return this.startChallenge(challenge.id);
        }
        
        // Check if it's a danger scenario
        const locationDangers = this.getDangerScenariosInLocation(locationId);
        const danger = locationDangers.find(d => 
            d.title.toLowerCase().includes(targetName.toLowerCase()) || 
            d.description.toLowerCase().includes(targetName.toLowerCase())
        );
        
        if (danger) {
            return this.triggerDangerScenario(danger.id);
        }
        
        // Nothing found
        return `<p>You don't see anything special about the ${targetName}.</p>`;
    }

    /**
     * Move the player to a new location
     * @param {string} direction - Direction to move
     * @returns {string} - Result of the movement attempt
     */
    movePlayer(direction) {
        const currentLocationId = this.gameState.currentLocation;
        const currentLocation = this.locationData[currentLocationId];
        
        if (!currentLocation) {
            return "<p class='error'>Error: Current location not found!</p>";
        }
        
        // Find the exit in the specified direction
        const exit = currentLocation.getExit(direction);
        
        if (!exit) {
            return `<p>You can't go ${direction} from here.</p>`;
        }
        
        // Update current location
        const success = this.gameState.moveToLocation(exit.destination);
        
        if (!success) {
            return "<p class='error'>Error: Destination location not found!</p>";
        }
        
        // Describe the new location
        return this.describeCurrentLocation();
    }

    /**
     * Take an item from the current location
     * @param {string} itemName - Name of the item to take
     * @returns {string} - Result of the take attempt
     */
    takeItem(itemName) {
        const locationId = this.gameState.currentLocation;
        const locationItems = this.getItemsInLocation(locationId);
        
        // Find the item by name
        const item = locationItems.find(i => i.name.toLowerCase() === itemName.toLowerCase());
        
        if (!item) {
            return `<p>There's no ${itemName} here to take.</p>`;
        }
        
        if (!item.canTake) {
            return `<p>You can't take the ${itemName}.</p>`;
        }
        
        // Add to inventory and update item location
        this.gameState.addToInventory(item.id);
        item.location = 'inventory';
        
        return `<p>You take the ${item.name}.</p>`;
    }

    /**
     * Drop an item from the player's inventory
     * @param {string} itemName - Name of the item to drop
     * @returns {string} - Result of the drop attempt
     */
    dropItem(itemName) {
        const inventoryItems = this.gameState.inventory.map(id => this.itemData[id]).filter(i => i);
        
        // Find the item by name
        const item = inventoryItems.find(i => i.name.toLowerCase() === itemName.toLowerCase());
        
        if (!item) {
            return `<p>You don't have a ${itemName} in your inventory.</p>`;
        }
        
        // Remove from inventory and update item location
        this.gameState.removeFromInventory(item.id);
        item.location = this.gameState.currentLocation;
        
        return `<p>You drop the ${item.name}.</p>`;
    }

    /**
     * Show the player's inventory
     * @returns {string} - Description of the inventory
     */
    showInventory() {
        const inventoryItems = this.gameState.inventory.map(id => this.itemData[id]).filter(i => i);
        
        if (inventoryItems.length === 0) {
            return "<p>Your inventory is empty.</p>";
        }
        
        let output = "<h2>Inventory</h2><ul>";
        
        inventoryItems.forEach(item => {
            output += `<li><span class="item">${item.name}</span> - ${item.description}</li>`;
        });
        
        output += "</ul>";
        return output;
    }

    /**
     * Talk to an NPC
     * @param {string} npcName - Name of the NPC to talk to
     * @returns {string} - Result of the conversation
     */
    talkToNPC(npcName) {
        const locationId = this.gameState.currentLocation;
        const locationNPCs = this.getNPCsInLocation(locationId);
        
        // Find the NPC by name
        const npc = locationNPCs.find(n => n.name.toLowerCase() === npcName.toLowerCase());
        
        if (!npc) {
            return `<p>There's no ${npcName} here to talk to.</p>`;
        }
        
        // Get the NPC's introduction
        return npc.getIntroduction();
    }

    /**
     * Start a quiz with an NPC
     * @param {string} quizName - Name of the quiz to start
     * @returns {string} - Result of the quiz attempt
     */
    startQuiz(quizName) {
        const locationId = this.gameState.currentLocation;
        const locationNPCs = this.getNPCsInLocation(locationId);
        
        // Find NPC with this quiz
        let targetNPC = null;
        let targetQuiz = null;
        
        for (const npc of locationNPCs) {
            const quiz = npc.getQuiz(quizName);
            if (quiz) {
                targetNPC = npc;
                targetQuiz = quiz;
                break;
            }
        }
        
        if (!targetNPC || !targetQuiz) {
            return `<p>There's no quiz about "${quizName}" available here.</p>`;
        }
        
        // Start the quiz
        this.gameState.startQuiz(targetNPC.id, targetQuiz);
        
        // Display quiz introduction
        let output = `<h2>${targetQuiz.topic} Quiz</h2>`;
        output += `<p>${targetQuiz.introduction}</p>`;
        
        // Display first question
        output += this.displayCurrentQuizQuestion();
        
        return output;
    }

    /**
     * Display the current quiz question
     * @returns {string} - HTML-formatted question
     */
    displayCurrentQuizQuestion() {
        if (!this.gameState.currentQuiz) {
            return "<p>No quiz is currently active.</p>";
        }
        
        const quiz = this.gameState.currentQuiz.quiz;
        const questionIndex = this.gameState.currentQuiz.currentQuestion;
        
        if (questionIndex >= quiz.questions.length) {
            // Quiz is complete
            return this.finishQuiz();
        }
        
        const question = quiz.questions[questionIndex];
        
        let output = `<h3>Question ${questionIndex + 1} of ${quiz.questions.length}</h3>`;
        output += `<p>${question.question}</p>`;
        
        // Display options
        output += "<ol>";
        question.options.forEach((option, index) => {
            output += `<li><span class="quiz-answer" data-index="${index}">${option}</span> (type 'answer ${index + 1}')</li>`;
        });
        output += "</ol>";
        
        return output;
    }

    /**
     * Submit an answer to the current quiz question
     * @param {string} answerText - The player's answer
     * @returns {string} - Result of the answer
     */
    submitAnswer(answerText) {
        // Handle different active scenarios
        if (this.gameState.currentQuiz) {
            return this.submitQuizAnswer(answerText);
        } else if (this.gameState.currentChallenge) {
            return this.submitChallengeAnswer(answerText);
        } else if (this.gameState.currentDanger) {
            return this.submitDangerAnswer(answerText);
        } else {
            return "<p>There's nothing to answer right now.</p>";
        }
    }

    /**
     * Submit an answer to the current quiz question
     * @param {string} answerText - The player's answer
     * @returns {string} - Result of the answer
     */
    submitQuizAnswer(answerText) {
        if (!this.gameState.currentQuiz) {
            return "<p>There's no active quiz to answer.</p>";
        }
        
        const quiz = this.gameState.currentQuiz.quiz;
        const questionIndex = this.gameState.currentQuiz.currentQuestion;
        const question = quiz.questions[questionIndex];
        
        // Parse the answer (either as a number or text)
        let answerIndex;
        if (!isNaN(answerText)) {
            answerIndex = parseInt(answerText) - 1; // Convert from 1-based to 0-based
        } else {
            // Try to find the answer by text
            answerIndex = question.options.findIndex(opt => 
                opt.toLowerCase() === answerText.toLowerCase()
            );
        }
        
        // Check if answer is valid
        if (answerIndex < 0 || answerIndex >= question.options.length) {
            return "<p>That's not a valid answer option. Please try again.</p>";
        }
        
        // Check if answer is correct
        const isCorrect = (answerIndex === question.correct_answer);
        
        // Update score
        if (isCorrect) {
            this.gameState.currentQuiz.correctAnswers++;
            this.gameState.modifyScore(10); // Award points for correct answer
        }
        
        // Display feedback
        let output = `<h3>Question ${questionIndex + 1} Result</h3>`;
        
        if (isCorrect) {
            output += `<p class="correct">Correct!</p>`;
        } else {
            output += `<p class="incorrect">Incorrect. The correct answer was: ${question.options[question.correct_answer]}</p>`;
        }
        
        // Show explanation
        output += `<p>${question.explanation}</p>`;
        
        // Move to next question
        this.gameState.currentQuiz.currentQuestion++;
        
        if (this.gameState.currentQuiz.currentQuestion < quiz.questions.length) {
            output += `<p>Moving to next question...</p>`;
            output += this.displayCurrentQuizQuestion();
        } else {
            output += this.finishQuiz();
        }
        
        return output;
    }

    /**
     * Finish the current quiz and show results
     * @returns {string} - Quiz results
     */
    finishQuiz() {
        if (!this.gameState.currentQuiz) {
            return "";
        }
        
        const quiz = this.gameState.currentQuiz.quiz;
        const correctAnswers = this.gameState.currentQuiz.correctAnswers;
        const totalQuestions = quiz.questions.length;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        
        let output = `<h2>Quiz Complete: ${quiz.topic}</h2>`;
        output += `<p>You answered ${correctAnswers} out of ${totalQuestions} questions correctly (${percentage}%).</p>`;
        
        // Display appropriate response based on score
        if (correctAnswers >= Math.ceil(totalQuestions / 2)) {
            output += `<p class="success">${quiz.success_response}</p>`;
            // Award points for successful quiz
            this.gameState.modifyScore(correctAnswers * 10);
        } else {
            output += `<p class="failure">${quiz.failure_response}</p>`;
            // Award some points for attempting
            this.gameState.modifyScore(correctAnswers * 5);
        }
        
        // Clear current quiz
        this.gameState.endQuiz();
        
        return output;
    }

    /**
     * Start a challenge
     * @param {string} challengeId - ID of the challenge to start
     * @returns {string} - Challenge presentation
     */
    startChallenge(challengeId) {
        const challenge = this.challengeData[challengeId];
        
        if (!challenge) {
            return "<p class='error'>Error: Challenge not found!</p>";
        }
        
        // Set current challenge
        this.gameState.startChallenge(challengeId);
        
        // Return the challenge presentation
        return challenge.getPresentation();
    }

    /**
     * Submit an answer to the current challenge
     * @param {string} answerText - The player's answer
     * @returns {string} - Result of the answer
     */
    submitChallengeAnswer(answerText) {
        if (!this.gameState.currentChallenge) {
            return "<p>There's no active challenge to answer.</p>";
        }
        
        const challenge = this.challengeData[this.gameState.currentChallenge];
        
        if (!challenge) {
            this.gameState.endChallenge();
            return "<p class='error'>Error: Challenge not found!</p>";
        }
        
        // Check if the answer is correct
        const isCorrect = challenge.checkAnswer(answerText);
        
        // Get the result text
        const resultText = challenge.getResultText(isCorrect);
        
        // Award points based on result
        if (isCorrect) {
            this.gameState.modifyScore(25); // More points for challenges than quizzes
        }
        
        // End the challenge
        this.gameState.endChallenge();
        
        return resultText;
    }

    /**
     * Trigger a danger scenario
     * @param {string} dangerId - ID of the danger scenario to trigger
     * @returns {string} - Danger scenario presentation
     */
    triggerDangerScenario(dangerId) {
        const danger = this.dangerScenarioData[dangerId];
        
        if (!danger) {
            return "<p class='error'>Error: Danger scenario not found!</p>";
        }
        
        // Set current danger
        this.gameState.triggerDanger(dangerId);
        
        // Return the danger scenario presentation
        return danger.getPresentation();
    }

    /**
     * Submit an answer to the current danger scenario
     * @param {string} answerText - The player's answer
     * @returns {string} - Result of the answer
     */
    submitDangerAnswer(answerText) {
        if (!this.gameState.currentDanger) {
            return "<p>There's no active danger to respond to.</p>";
        }
        
        const danger = this.dangerScenarioData[this.gameState.currentDanger];
        
        if (!danger) {
            this.gameState.endDanger();
            return "<p class='error'>Error: Danger scenario not found!</p>";
        }
        
        // Check if the answer is correct
        const isCorrect = danger.checkAnswer(answerText);
        
        // Get the result text
        const resultText = danger.getResultText(isCorrect);
        
        // Apply consequences based on result
        if (isCorrect) {
            // Reward for escaping danger
            this.gameState.modifyScore(50); // Most points for escaping dangers
        } else {
            // Penalty for failing
            if (danger.isLethal) {
                this.gameState.modifyHealth(-50); // Severe health penalty for lethal dangers
            } else {
                this.gameState.modifyHealth(-20); // Moderate health penalty for non-lethal dangers
            }
        }
        
        // End the danger
        this.gameState.endDanger();
        
        return resultText;
    }

    /**
     * Use an item from the player's inventory
     * @param {string} itemName - Name of the item to use
     * @returns {string} - Result of the use attempt
     */
    useItem(itemName) {
        const inventoryItems = this.gameState.inventory.map(id => this.itemData[id]).filter(i => i);
        
        // Find the item by name
        const item = inventoryItems.find(i => i.name.toLowerCase() === itemName.toLowerCase());
        
        if (!item) {
            return `<p>You don't have a ${itemName} to use.</p>`;
        }
        
        // Use the item
        return item.use(this.gameState);
    }

    /**
     * Save the current game
     * @returns {string} - Result of the save attempt
     */
    saveGame() {
        // Save to localStorage
        const localSaved = this.saveLoadController.saveToLocalStorage();
        
        // Save to file
        const fileSaved = this.saveLoadController.saveToFile();
        
        if (localSaved && fileSaved) {
            return "<p class='success'>Game saved successfully! A save file has been downloaded to your device.</p>";
        } else if (localSaved) {
            return "<p class='success'>Game saved to browser storage, but file download failed.</p>";
        } else if (fileSaved) {
            return "<p class='success'>Game saved to file, but browser storage failed.</p>";
        } else {
            return "<p class='error'>Failed to save game. Please try again.</p>";
        }
    }

    /**
     * Load a saved game
     * @returns {string} - Result of the load attempt
     */
    loadGame() {
        // Try to load from localStorage
        const loaded = this.saveLoadController.loadFromLocalStorage();
        
        if (loaded) {
            return "<p class='success'>Game loaded successfully!</p>";
        } else {
            return "<p>No saved game found in browser storage. Click the 'Load Game' button to upload a save file.</p>";
        }
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = GameController;
}
