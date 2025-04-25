/**
 * Parser.js - Utility for parsing player commands
 * 
 * This class provides methods for parsing player input into structured commands
 * that can be processed by the game engine.
 */
class Parser {
    /**
     * Create a new Parser instance
     */
    constructor() {
        // Define command synonyms for more natural language processing
        this.commandSynonyms = {
            // Movement commands
            'go': 'move',
            'walk': 'move',
            'run': 'move',
            'travel': 'move',
            'head': 'move',
            'n': 'move north',
            's': 'move south',
            'e': 'move east',
            'w': 'move west',
            'ne': 'move northeast',
            'nw': 'move northwest',
            'se': 'move southeast',
            'sw': 'move southwest',
            
            // Item commands
            'get': 'take',
            'grab': 'take',
            'pick': 'take',
            'collect': 'take',
            
            // Examination commands
            'look': 'examine',
            'inspect': 'examine',
            'check': 'examine',
            'view': 'examine',
            'x': 'examine',
            'l': 'examine',
            
            // Inventory commands
            'i': 'inventory',
            'inv': 'inventory',
            'items': 'inventory',
            
            // Help commands
            'h': 'help',
            '?': 'help',
            'commands': 'help',
            
            // Talk commands
            'speak': 'talk',
            'chat': 'talk',
            'converse': 'talk',
            
            // Answer commands
            'a': 'answer',
            'respond': 'answer',
            'reply': 'answer'
        };
    }

    /**
     * Parse a player command string into a structured command object
     * @param {string} commandString - The raw command input from the player
     * @returns {object} - Structured command with action and target properties
     */
    parseCommand(commandString) {
        // Trim whitespace and convert to lowercase
        const input = commandString.trim().toLowerCase();
        
        // Handle empty input
        if (!input) {
            return { action: 'invalid', target: '', original: commandString };
        }
        
        // Split into words
        const words = input.split(/\s+/);
        let action = words[0];
        let target = words.slice(1).join(' ');
        
        // Check for single-word direction commands
        if (['north', 'south', 'east', 'west', 'northeast', 'northwest', 'southeast', 'southwest', 'up', 'down'].includes(action)) {
            return { action: 'move', target: action, original: commandString };
        }
        
        // Apply command synonyms
        if (this.commandSynonyms[action]) {
            const replacement = this.commandSynonyms[action].split(/\s+/);
            action = replacement[0];
            
            // If the synonym includes a target (like 'move north'), append it
            if (replacement.length > 1) {
                target = replacement.slice(1).join(' ') + (target ? ' ' + target : '');
            }
        }
        
        // Handle special case for 'look' with no target
        if (action === 'examine' && !target) {
            action = 'look';
        }
        
        // Handle special case for 'take X from Y'
        if (action === 'take' && target.includes(' from ')) {
            const parts = target.split(' from ');
            target = parts[0];
            // Could store the 'from' part if needed for more complex parsing
        }
        
        // Handle special case for 'talk to X'
        if (action === 'talk' && target.startsWith('to ')) {
            target = target.substring(3);
        }
        
        return { action, target, original: commandString };
    }

    /**
     * Get a list of valid command examples
     * @returns {Array} - Array of example commands
     */
    getCommandExamples() {
        return [
            "look - Look around the current location",
            "examine [object] - Look at something specific",
            "move [direction] - Move in a direction (north, south, east, west)",
            "take [item] - Pick up an item",
            "drop [item] - Drop an item from your inventory",
            "inventory - Check what you're carrying",
            "talk to [npc] - Talk to a character",
            "quiz [topic] - Take a quiz on a specific topic",
            "answer [response] - Answer a question in a quiz or challenge",
            "use [item] - Use an item from your inventory",
            "help - Show this help message",
            "save - Save your game progress",
            "load - Load a saved game"
        ];
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = Parser;
}
