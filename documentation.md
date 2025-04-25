# GCSE Digital Technology Text Adventure Game Documentation

## Overview

This documentation provides comprehensive information about the GCSE Digital Technology Text Adventure Game, a browser-based educational game designed to help students revise for their GCSE Digital Technology exams. The game is implemented as a Zork-style text adventure with a retro terminal interface, incorporating curriculum content in a whimsical, slightly bizarre style inspired by Monty Python and Terry Pratchett.

## Table of Contents

1. [Game Structure](#game-structure)
2. [Educational Content](#educational-content)
3. [Technical Implementation](#technical-implementation)
4. [User Guide](#user-guide)
5. [Developer Guide](#developer-guide)
6. [Extending the Game](#extending-the-game)

## Game Structure

The game is structured as a text adventure with the following components:

### Locations
The game world is divided into distinct areas representing different topics from the GCSE Digital Technology curriculum. Each location has:
- A name and description
- Connections to other locations (exits)
- Items that can be found and examined
- NPCs that can be interacted with
- Challenges that test curriculum knowledge
- Danger scenarios with humorous consequences

### Items
Educational items throughout the game world represent key concepts from the curriculum. Each item has:
- A name and description containing educational content
- A location where it can be found
- Properties determining if it can be taken
- Use text explaining its educational significance

### NPCs
Non-player characters offer quizzes on curriculum topics. Each NPC has:
- A name and introduction
- A location where they can be found
- A set of quizzes covering different curriculum topics
- Educational explanations for correct and incorrect answers

### Challenges
Interactive challenges test students' knowledge of curriculum topics. Each challenge has:
- A title and description
- A location where it can be attempted
- A question or problem to solve
- Multiple-choice options or text-based solutions
- Educational content explaining the correct answer
- Success and failure responses
- Curriculum topic references

### Danger Scenarios
Humorous danger scenarios with Monty Python/Terry Pratchett-style consequences. Each scenario has:
- A title and description
- A location where it can be triggered
- A problem to solve to escape the danger
- Multiple-choice options or text-based solutions
- Educational content explaining the correct approach
- Success and failure responses (some with lethal consequences)
- Curriculum topic references

## Educational Content

The game covers all topics from the GCSE Digital Technology curriculum, including:

1. Digital Technology Systems
   - Hardware components
   - Software types and functions
   - Operating systems
   - Computer architecture

2. Digital Communications
   - Networks and connectivity
   - Internet technologies
   - Communication protocols
   - Cloud computing

3. Data Representation
   - Binary and hexadecimal
   - Data types and structures
   - File formats
   - Compression techniques

4. Programming and Development
   - Programming concepts
   - Algorithms and flowcharts
   - Software development lifecycle
   - Testing and debugging

5. Digital Information and Data
   - Databases and data management
   - Data collection and analysis
   - Information systems
   - Data protection and privacy

6. Digital Security
   - Threats and vulnerabilities
   - Security measures
   - Ethical hacking
   - Cybersecurity best practices

Each curriculum topic is covered by multiple game elements to ensure thorough learning opportunities.

## Technical Implementation

The game is implemented using HTML, CSS, and JavaScript, following object-oriented programming principles, DRY (Don't Repeat Yourself) principles, and separation of concerns.

### Project Structure

```
web_game/
├── css/
│   └── style.css
├── js/
│   ├── models/
│   │   ├── GameState.js
│   │   ├── Location.js
│   │   ├── Item.js
│   │   ├── NPC.js
│   │   ├── Challenge.js
│   │   └── DangerScenario.js
│   ├── controllers/
│   │   ├── CommandController.js
│   │   ├── UIController.js
│   │   ├── SaveLoadController.js
│   │   └── GameController.js
│   ├── views/
│   │   ├── TerminalView.js
│   │   ├── InventoryView.js
│   │   └── StatsView.js
│   ├── utils/
│   │   ├── Parser.js
│   │   ├── StorageManager.js
│   │   ├── GameDataLoader.js
│   │   └── GameDataIntegrator.js
│   ├── data/
│   │   ├── locations.js
│   │   ├── items.js
│   │   ├── npcs.js
│   │   ├── challenges.js
│   │   └── danger_scenarios.js
│   ├── tests/
│   │   ├── test_suite.js
│   │   └── test_runner.js
│   ├── GameEngine.js
│   └── main.js
├── tests/
│   └── index.html
├── index.html
└── debug_report.md
```

### Architecture

The game follows the Model-View-Controller (MVC) architecture:

#### Models
- **GameState**: Manages the current state of the game, including player location, inventory, health, score, and moves.
- **Location**: Represents a location in the game world with its properties and connections.
- **Item**: Represents an educational item with its properties and behaviors.
- **NPC**: Represents a non-player character with quizzes and interactions.
- **Challenge**: Represents an educational challenge with questions and answers.
- **DangerScenario**: Represents a dangerous situation with solutions and consequences.

#### Views
- **TerminalView**: Manages the display of the terminal interface.
- **InventoryView**: Manages the display of the player's inventory.
- **StatsView**: Manages the display of player statistics.

#### Controllers
- **CommandController**: Processes user commands and updates the game state.
- **UIController**: Manages the user interface and display updates.
- **SaveLoadController**: Handles saving and loading game state.
- **GameController**: Coordinates the overall game flow and user interactions.

#### Utilities
- **Parser**: Parses user input into commands and arguments.
- **StorageManager**: Manages saving and loading game data.
- **GameDataLoader**: Loads game data from data files.
- **GameDataIntegrator**: Integrates game data with the game engine.

#### Game Engine
- **GameEngine**: The central component that connects all parts of the game.

### State Management

The game maintains state for:
- Player position (current location)
- Inventory (items collected)
- Health (affected by danger scenarios)
- Score (increased by completing challenges and quizzes)
- Moves (number of commands entered)

### Save/Load Functionality

The game includes functionality to:
- Save the current game state to a JSON file
- Download the save file to the user's device
- Upload a save file to restore a previous game state

## User Guide

### Getting Started

1. Open the game in a web browser by opening the `index.html` file.
2. Read the welcome message to understand the game's premise.
3. Use text commands to navigate and interact with the game world.

### Basic Commands

- `look` - Examine your current location
- `go [direction]` - Move in a direction (north, south, east, west, up, down)
- `examine [item]` - Look at an item in more detail
- `take [item]` - Pick up an item
- `drop [item]` - Drop an item from your inventory
- `inventory` or `i` - List items you're carrying
- `use [item]` - Use an item
- `talk to [npc]` - Interact with an NPC
- `solve [challenge]` - Attempt to solve a challenge
- `help` - Display available commands
- `save` - Save your current game
- `load` - Load a saved game
- `quit` - End the game

### Educational Interactions

- **Examining Items**: Provides educational content about curriculum topics
- **NPC Quizzes**: Test knowledge through multiple-choice questions
- **Challenges**: Test understanding of specific curriculum concepts
- **Danger Scenarios**: Require application of knowledge to escape danger

### Saving and Loading

- Click the "Save Game" button to download your current game state
- Click the "Load Game" button to upload a previously saved game
- The game state is saved as a JSON file that contains all your progress

## Developer Guide

### Code Structure

The game code follows object-oriented programming principles with clear separation of concerns:

- **Models**: Define the data structures and business logic
- **Views**: Handle the presentation layer
- **Controllers**: Manage user interactions and game flow
- **Utilities**: Provide helper functions and services

### Adding New Content

#### Adding a New Location

1. Add the location data to `locations.js`:
```javascript
'new_location_id': {
  id: 'new_location_id',
  name: 'New Location Name',
  description: 'Detailed description of the location with educational content.',
  exits: {
    north: 'connected_location_id',
    // other exits...
  }
}
```

2. Connect it to existing locations by updating their exits.

#### Adding a New Item

Add the item data to `items.js`:
```javascript
'new_item_id': {
  id: 'new_item_id',
  name: 'New Item Name',
  description: 'Educational description of the item.',
  location: 'location_id',
  can_take: true,
  use_text: 'Text displayed when the item is used.'
}
```

#### Adding a New NPC

Add the NPC data to `npcs.js`:
```javascript
'new_npc_id': {
  npc_id: 'new_npc_id',
  name: 'New NPC Name',
  location: 'location_id',
  introduction: 'NPC introduction text.',
  quiz_options: ['Quiz Topic 1', 'Quiz Topic 2'],
  quizzes: [
    {
      topic: 'Quiz Topic 1',
      introduction: 'Quiz introduction text.',
      questions: [
        {
          question: 'Question text?',
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correct_answer: 1, // 0-based index
          explanation: 'Educational explanation of the correct answer.'
        }
        // more questions...
      ],
      success_response: 'Response when quiz is passed.',
      failure_response: 'Response when quiz is failed.'
    }
    // more quizzes...
  ]
}
```

#### Adding a New Challenge

Add the challenge data to `challenges.js`:
```javascript
'new_challenge_id': {
  id: 'new_challenge_id',
  title: 'New Challenge Title',
  description: 'Brief description of the challenge.',
  location: 'location_id',
  challenge_text: 'Text presenting the challenge to the player.',
  solution_type: 'multiple_choice', // or 'text'
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correct_answer: 2, // 0-based index
  success_text: 'Text displayed on successful completion.',
  failure_text: 'Text displayed on failure.',
  educational_content: 'Detailed educational explanation.',
  curriculum_topic: 'Related curriculum topic',
  difficulty: 'medium', // easy, medium, hard
  is_lethal: false // whether failure is fatal
}
```

#### Adding a New Danger Scenario

Add the danger scenario data to `danger_scenarios.js`:
```javascript
'new_danger_id': {
  id: 'new_danger_id',
  title: 'New Danger Title',
  description: 'Brief description of the danger.',
  location: 'location_id',
  trigger_text: 'Text describing the dangerous situation.',
  solution_type: 'multiple_choice', // or 'text'
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correct_answer: 1, // 0-based index
  success_text: 'Text displayed on successful escape.',
  failure_text: 'Humorous text describing the consequences of failure.',
  educational_content: 'Educational explanation related to the danger.',
  curriculum_topic: 'Related curriculum topic',
  is_lethal: true // whether failure is fatal
}
```

### Testing

The game includes a comprehensive test suite to ensure all components work correctly:

1. Open `tests/index.html` in a web browser.
2. Click "Run All Tests" to execute the test suite.
3. Review the test results to identify any issues.

The test suite covers:
- Model tests
- Utility tests
- Controller tests
- Integration tests
- Data validation tests

## Extending the Game

### Adding New Curriculum Content

To extend the game with additional curriculum content:

1. Identify the curriculum topic to be added.
2. Create new locations representing the topic.
3. Add educational items related to the topic.
4. Create NPCs with quizzes testing knowledge of the topic.
5. Implement challenges that reinforce understanding of the topic.
6. Add danger scenarios that apply knowledge of the topic.

### Customizing the Interface

The game interface can be customized by:

1. Modifying `style.css` to change the visual appearance.
2. Updating `TerminalView.js` to alter the terminal behavior.
3. Editing `index.html` to change the page structure.

### Adding New Command Types

To add new types of commands:

1. Update `Parser.js` to recognize the new command.
2. Add a handler method in `CommandController.js`.
3. Implement the command logic in the appropriate model classes.
4. Update the help text to include the new command.

### Creating a Custom Version

To create a custom version of the game for a different subject:

1. Fork the project structure.
2. Replace the data files with content for the new subject.
3. Update the welcome message and game theme.
4. Modify the UI to reflect the new subject matter.
5. Test thoroughly to ensure educational integrity.

---

This documentation provides a comprehensive overview of the GCSE Digital Technology Text Adventure Game, its educational content, technical implementation, and guides for both users and developers. For any questions or issues not covered in this documentation, please refer to the code comments or contact the development team.
