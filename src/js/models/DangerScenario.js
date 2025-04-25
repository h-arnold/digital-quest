/**
 * DangerScenario.js - Model for dangerous situations
 * 
 * This class represents a dangerous situation in the game that tests
 * the player's knowledge and has consequences for failure.
 */
class DangerScenario {
    /**
     * Create a new DangerScenario instance
     * @param {string} id - Unique identifier for the danger scenario
     * @param {string} location - Location ID where the danger is found
     * @param {string} title - Display title of the danger scenario
     * @param {string} description - Brief description visible in the location
     * @param {string} trigger - What action triggers this danger
     * @param {string} scenarioText - The full text describing the dangerous situation
     * @param {string} solutionType - Type of solution (e.g., 'multiple_choice', 'quick_answer')
     * @param {Array} options - For multiple choice, the available options
     * @param {number|string} correctAnswer - The correct answer (index or text)
     * @param {string} successText - Text displayed on successful escape
     * @param {string} failureText - Text displayed on failure
     * @param {string} educationalContent - Educational explanation of the topic
     * @param {string} curriculumTopic - The curriculum topic this scenario covers
     * @param {boolean} isLethal - Whether failure has serious consequences
     * @param {string} humorStyle - Description of the humor style used
     */
    constructor(id, location, title, description, trigger, scenarioText, solutionType, 
                options, correctAnswer, successText, failureText, educationalContent, 
                curriculumTopic, isLethal = false, humorStyle = "") {
        this.id = id;
        this.location = location;
        this.title = title;
        this.description = description;
        this.trigger = trigger;
        this.scenarioText = scenarioText;
        this.solutionType = solutionType;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.successText = successText;
        this.failureText = failureText;
        this.educationalContent = educationalContent;
        this.curriculumTopic = curriculumTopic;
        this.isLethal = isLethal;
        this.humorStyle = humorStyle;
    }

    /**
     * Get the danger scenario presentation text
     * @returns {string} - HTML-formatted scenario presentation
     */
    getPresentation() {
        let output = `<h2>${this.title}</h2>`;
        output += `<p>${this.scenarioText}</p>`;
        
        // Display options for multiple choice
        if (this.solutionType === "multiple_choice" && this.options) {
            output += "<ol>";
            this.options.forEach((option, index) => {
                output += `<li><span class="danger-option" data-index="${index}">${option}</span> (type 'answer ${index + 1}')</li>`;
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
            output += `<p class="correct">You escaped the danger!</p>`;
            output += `<p>${this.successText}</p>`;
        } else {
            output += `<p class="incorrect">You failed to escape!</p>`;
            output += `<p>${this.failureText}</p>`;
        }
        
        // Always show educational content
        output += `<p class="educational-content">${this.educationalContent}</p>`;
        
        return output;
    }

    /**
     * Create a DangerScenario instance from raw data
     * @param {object} data - Raw danger scenario data
     * @returns {DangerScenario} - A new DangerScenario instance
     */
    static fromData(data) {
        return new DangerScenario(
            data.id,
            data.location,
            data.title,
            data.description,
            data.trigger,
            data.scenario_text,
            data.solution_type,
            data.options || [],
            data.correct_answer,
            data.success_text,
            data.failure_text,
            data.educational_content,
            data.curriculum_topic,
            data.is_lethal || false,
            data.humor_style || ""
        );
    }
}

// Export for use in modules and testing
if (typeof module !== 'undefined') {
    module.exports = DangerScenario;
}
