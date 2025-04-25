/**
 * NPC.js - Model for non-player characters
 * 
 * This class represents an NPC in the game world that can be
 * talked to and can provide quizzes to the player.
 */
class NPC {
    /**
     * Create a new NPC instance
     * @param {string} id - Unique identifier for the NPC
     * @param {string} name - Display name of the NPC
     * @param {string} location - Location ID where the NPC can be found
     * @param {string} introduction - Text displayed when talking to the NPC
     * @param {Array} quizOptions - Array of quiz topics this NPC offers
     * @param {Array} quizzes - Array of quiz objects with questions and answers
     */
    constructor(id, name, location, introduction, quizOptions = [], quizzes = []) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.introduction = introduction;
        this.quizOptions = quizOptions;
        this.quizzes = quizzes;
    }

    /**
     * Get the introduction dialogue for this NPC
     * @returns {string} - HTML-formatted introduction
     */
    getIntroduction() {
        let output = `<h2>Talking to ${this.name}</h2>`;
        output += `<p>${this.introduction}</p>`;
        
        // Show quiz options if available
        if (this.quizOptions && this.quizOptions.length > 0) {
            output += "<p>Available quizzes:</p><ul>";
            this.quizOptions.forEach((quizOption, index) => {
                output += `<li><span class="quiz-option" data-npc="${this.id}" data-quiz="${index}">${quizOption}</span> (type 'quiz ${quizOption}')</li>`;
            });
            output += "</ul>";
        }
        
        return output;
    }

    /**
     * Find a quiz by name
     * @param {string} quizName - The name of the quiz to find
     * @returns {object|null} - The quiz object if found, null otherwise
     */
    getQuiz(quizName) {
        const quizIndex = this.quizOptions.findIndex(q => 
            q.toLowerCase() === quizName.toLowerCase()
        );
        
        if (quizIndex >= 0 && this.quizzes[quizIndex]) {
            return this.quizzes[quizIndex];
        }
        
        return null;
    }

    /**
     * Create an NPC instance from raw data
     * @param {object} data - Raw NPC data
     * @returns {NPC} - A new NPC instance
     */
    static fromData(data) {
        return new NPC(
            data.npc_id,
            data.name,
            data.location,
            data.introduction,
            data.quiz_options || [],
            data.quizzes || []
        );
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = NPC;
}
