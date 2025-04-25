/**
 * Challenge.js - Model for educational challenges
 * 
 * This class represents an educational challenge in the game that tests
 * the player's knowledge of curriculum topics.
 */
class Challenge {
    /**
     * Create a new Challenge instance
     * @param {string} id - Unique identifier for the challenge
     * @param {string} location - Location ID where the challenge is found
     * @param {string} title - Display title of the challenge
     * @param {string} description - Brief description of the challenge
     * @param {string} challengeText - The text presenting the challenge to the player
     * @param {string} solutionType - Type of solution (e.g., 'multiple_choice', 'quick_answer')
     * @param {Array} options - For multiple choice, the available options
     * @param {number|string} correctAnswer - The correct answer (index or text)
     * @param {string} successText - Text displayed on successful completion
     * @param {string} failureText - Text displayed on failure
     * @param {string} educationalContent - Educational explanation of the topic
     * @param {string} curriculumTopic - The curriculum topic this challenge covers
     * @param {string} difficulty - Challenge difficulty level
     * @param {boolean} isLethal - Whether failure has serious consequences
     */
    constructor(id, location, title, description, challengeText, solutionType, 
                options, correctAnswer, successText, failureText, educationalContent, 
                curriculumTopic, difficulty = "medium", isLethal = false) {
        this.id = id;
        this.location = location;
        this.title = title;
        this.description = description;
        this.challengeText = challengeText;
        this.solutionType = solutionType;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.successText = successText;
        this.failureText = failureText;
        this.educationalContent = educationalContent;
        this.curriculumTopic = curriculumTopic;
        this.difficulty = difficulty;
        this.isLethal = isLethal;
    }

    /**
     * Get the challenge presentation text
     * @returns {string} - HTML-formatted challenge presentation
     */
    getPresentation() {
        let output = `<h2>${this.title}</h2>`;
        output += `<p>${this.description}</p>`;
        output += `<p>${this.challengeText}</p>`;
        
        // Display options for multiple choice
        if (this.solutionType === "multiple_choice" && this.options) {
            output += "<ol>";
            this.options.forEach((option, index) => {
                output += `<li><span class="challenge-option" data-index="${index}">${option}</span> (type 'answer ${index + 1}')</li>`;
            });
            output += "</ol>";
        } else {
            // For other types, prompt for answer
            output += `<p>Type 'answer' followed by your response.</p>`;
        }
        
        return output;
    }

    /**
     * Check if an answer is correct
     * @param {string|number} answer - The player's answer
     * @returns {boolean} - Whether the answer is correct
     */
    checkAnswer(answer) {
        if (this.solutionType === "multiple_choice") {
            // Convert from 1-based to 0-based if needed
            let answerIndex = answer;
            if (typeof answer === 'string') {
                if (!isNaN(answer)) {
                    answerIndex = parseInt(answer) - 1;
                } else {
                    // Try to find the answer by text
                    answerIndex = this.options.findIndex(opt => 
                        opt.toLowerCase() === answer.toLowerCase()
                    );
                }
            }
            
            return answerIndex === this.correctAnswer;
        } else {
            // For quick_answer, compare text
            return answer.toString().toLowerCase() === this.correctAnswer.toString().toLowerCase();
        }
    }

    /**
     * Get the result text based on whether the answer was correct
     * @param {boolean} isCorrect - Whether the answer was correct
     * @returns {string} - HTML-formatted result text
     */
    getResultText(isCorrect) {
        let output = `<h3>${this.title} Result</h3>`;
        
        if (isCorrect) {
            output += `<p class="correct">Correct!</p>`;
            output += `<p>${this.successText}</p>`;
        } else {
            output += `<p class="incorrect">Incorrect.</p>`;
            output += `<p>${this.failureText}</p>`;
        }
        
        // Always show educational content
        output += `<p class="educational-content">${this.educationalContent}</p>`;
        
        return output;
    }

    /**
     * Create a Challenge instance from raw data
     * @param {object} data - Raw challenge data
     * @returns {Challenge} - A new Challenge instance
     */
    static fromData(data) {
        return new Challenge(
            data.id,
            data.location,
            data.title,
            data.description,
            data.challenge_text,
            data.solution_type,
            data.options,
            data.correct_answer,
            data.success_text,
            data.failure_text,
            data.educational_content,
            data.curriculum_topic,
            data.difficulty || "medium",
            data.is_lethal || false
        );
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = Challenge;
}
