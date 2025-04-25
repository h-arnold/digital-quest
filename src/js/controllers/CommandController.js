/**
 * CommandController.js - Controller for processing player commands
 * 
 * This class handles the processing of player commands and delegates
 * to the appropriate game functions based on the command.
 */
class CommandController {
    /**
     * Create a new CommandController instance
     * @param {GameController} gameController - Reference to the main game controller
     */
    constructor(gameController) {
        this.gameController = gameController;
        this.parser = new Parser();
    }

    /**
     * Process a player command
     * @param {string} commandString - The raw command input from the player
     * @returns {string} - Result of the command for display
     */
    processCommand(commandString) {
        // Parse the command
        const command = this.parser.parseCommand(commandString);
        
        // Process based on the action
        switch (command.action) {
            case 'look':
                return this.handleLook();
                
            case 'examine':
                return this.handleExamine(command.target);
                
            case 'move':
                return this.handleMove(command.target);
                
            case 'take':
                return this.handleTake(command.target);
                
            case 'drop':
                return this.handleDrop(command.target);
                
            case 'inventory':
                return this.handleInventory();
                
            case 'talk':
                return this.handleTalk(command.target);
                
            case 'quiz':
                return this.handleQuiz(command.target);
                
            case 'answer':
                return this.handleAnswer(command.target);
                
            case 'use':
                return this.handleUse(command.target);
                
            case 'help':
                return this.handleHelp();
                
            case 'save':
                return this.handleSave();
                
            case 'load':
                return this.handleLoad();
                
            case 'invalid':
                return "I don't understand that command. Type 'help' for a list of commands.";
                
            default:
                return `I don't know how to '${command.action}'. Type 'help' for a list of commands.`;
        }
    }

    /**
     * Handle the 'look' command
     * @returns {string} - Description of the current location
     */
    handleLook() {
        return this.gameController.describeCurrentLocation();
    }

    /**
     * Handle the 'examine' command
     * @param {string} target - What to examine
     * @returns {string} - Description of the target
     */
    handleExamine(target) {
        if (!target) {
            return this.handleLook();
        }
        
        return this.gameController.examineObject(target);
    }

    /**
     * Handle the 'move' command
     * @param {string} direction - Direction to move
     * @returns {string} - Result of the movement attempt
     */
    handleMove(direction) {
        if (!direction) {
            return "Which direction do you want to go?";
        }
        
        return this.gameController.movePlayer(direction);
    }

    /**
     * Handle the 'take' command
     * @param {string} itemName - Item to take
     * @returns {string} - Result of the take attempt
     */
    handleTake(itemName) {
        if (!itemName) {
            return "What do you want to take?";
        }
        
        return this.gameController.takeItem(itemName);
    }

    /**
     * Handle the 'drop' command
     * @param {string} itemName - Item to drop
     * @returns {string} - Result of the drop attempt
     */
    handleDrop(itemName) {
        if (!itemName) {
            return "What do you want to drop?";
        }
        
        return this.gameController.dropItem(itemName);
    }

    /**
     * Handle the 'inventory' command
     * @returns {string} - Description of the player's inventory
     */
    handleInventory() {
        return this.gameController.showInventory();
    }

    /**
     * Handle the 'talk' command
     * @param {string} npcName - NPC to talk to
     * @returns {string} - Result of the talk attempt
     */
    handleTalk(npcName) {
        if (!npcName) {
            return "Who do you want to talk to?";
        }
        
        return this.gameController.talkToNPC(npcName);
    }

    /**
     * Handle the 'quiz' command
     * @param {string} quizName - Quiz to start
     * @returns {string} - Result of the quiz attempt
     */
    handleQuiz(quizName) {
        if (!quizName) {
            return "Which quiz do you want to take?";
        }
        
        return this.gameController.startQuiz(quizName);
    }

    /**
     * Handle the 'answer' command
     * @param {string} answer - Answer to the current question
     * @returns {string} - Result of the answer
     */
    handleAnswer(answer) {
        if (!answer) {
            return "What is your answer?";
        }
        
        return this.gameController.submitAnswer(answer);
    }

    /**
     * Handle the 'use' command
     * @param {string} itemName - Item to use
     * @returns {string} - Result of the use attempt
     */
    handleUse(itemName) {
        if (!itemName) {
            return "What do you want to use?";
        }
        
        return this.gameController.useItem(itemName);
    }

    /**
     * Handle the 'help' command
     * @returns {string} - Help text with available commands
     */
    handleHelp() {
        const examples = this.parser.getCommandExamples();
        
        let output = `<h2>Available Commands</h2><ul>`;
        examples.forEach(example => {
            output += `<li>${example}</li>`;
        });
        output += `</ul>`;
        
        return output;
    }

    /**
     * Handle the 'save' command
     * @returns {string} - Result of the save attempt
     */
    handleSave() {
        return this.gameController.saveGame();
    }

    /**
     * Handle the 'load' command
     * @returns {string} - Result of the load attempt
     */
    handleLoad() {
        return this.gameController.loadGame();
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = CommandController;
}
