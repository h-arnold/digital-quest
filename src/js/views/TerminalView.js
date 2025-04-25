/**
 * TerminalView.js - View for the game terminal display
 * 
 * This class manages the display of game text in the terminal-style interface,
 * including formatting, scrolling, and command history.
 */
class TerminalView {
    /**
     * Create a new TerminalView instance
     * @param {string} outputElementId - ID of the HTML element for game output
     */
    constructor(outputElementId = 'game-output') {
        this.outputElement = document.getElementById(outputElementId);
        this.commandHistory = [];
        this.maxHistoryLength = 100; // Maximum number of commands to remember
        this.clearOnCommand = true; // New property to control screen clearing behavior
    }

    /**
     * Display text in the terminal
     * @param {string} text - HTML-formatted text to display
     * @param {boolean} append - Whether to append to existing content (default: false)
     * @param {boolean} preserveContent - Whether to preserve existing content regardless of clearOnCommand setting
     */
    display(text, append = false, preserveContent = false) {
        // If clearOnCommand is true and we're not explicitly preserving content or appending,
        // clear the terminal before displaying new content
        if (this.clearOnCommand && !append && !preserveContent) {
            this.clear();
            append = false; // Ensure we're not appending after clearing
        }
        
        if (append) {
            this.outputElement.innerHTML += text;
        } else {
            this.outputElement.innerHTML = text;
        }
        
        // Scroll to bottom
        this.scrollToBottom();
    }

    /**
     * Display a player command in the terminal
     * @param {string} command - The command entered by the player
     * @param {boolean} preserveContent - Whether to preserve existing content
     */
    displayCommand(command, preserveContent = false) {
        // Add to command history
        this.commandHistory.push(command);
        if (this.commandHistory.length > this.maxHistoryLength) {
            this.commandHistory.shift();
        }
        
        // If we're clearing on command and not preserving content, clear first
        if (this.clearOnCommand && !preserveContent) {
            this.clear();
            // Display the command with special formatting (not appending since we just cleared)
            this.display(`<span class="command">&gt; ${command}</span><br>`, false, true);
        } else {
            // Display the command with special formatting (appending to existing content)
            this.display(`<span class="command">&gt; ${command}</span><br>`, true, true);
        }
    }

    /**
     * Clear the terminal display
     */
    clear() {
        this.outputElement.innerHTML = '';
    }

    /**
     * Scroll the terminal to the bottom
     */
    scrollToBottom() {
        this.outputElement.scrollTop = this.outputElement.scrollHeight;
    }

    /**
     * Get the command history
     * @returns {Array} - Array of previous commands
     */
    getCommandHistory() {
        return [...this.commandHistory];
    }
    
    /**
     * Set whether to clear the screen on each command
     * @param {boolean} clearOnCommand - Whether to clear the screen on each command
     */
    setClearOnCommand(clearOnCommand) {
        this.clearOnCommand = clearOnCommand;
    }
    
    /**
     * Get the current clear-on-command setting
     * @returns {boolean} - Whether the screen clears on each command
     */
    getClearOnCommand() {
        return this.clearOnCommand;
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = TerminalView;
}
