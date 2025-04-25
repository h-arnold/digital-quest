# Digital Quest: GCSE Digital Technology Adventure

A Zork-style text adventure game designed to help students revise GCSE Digital Technology concepts through interactive gameplay.

## ⚠️ This game goes beyond even vibe-coding - it's been created entirely using [Manus AI](https://manus.im) ⚠️

As such, you run the game at your own risk. I'm fully expecting that things won't be perfect and changes will need to be made. Please submit PRs with anything you find!

## Overview

Digital Quest transforms GCSE Digital Technology curriculum content into an engaging text adventure game. Students navigate through different areas representing curriculum topics, interact with educational NPCs, solve challenges, and collect items - all while learning key concepts from the syllabus.

## Features

- **Complete Browser-Based Implementation**: Runs entirely in the browser using HTML, CSS, and JavaScript
- **Educational Content**: Comprehensive coverage of the GCSE Digital Technology curriculum
- **Zork-Style Interface**: Classic text adventure gameplay with commands like "north", "examine", "take"
- **Interactive Learning**: Educational challenges, quizzes, and danger scenarios with Monty Python/Terry Pratchett-esque humor
- **Save/Load Functionality**: Students can save their progress and continue later
- **Responsive Design**: Works on both desktop and mobile devices

## Live Demo

The game is deployed and accessible at: [https://jyxpndjr.manus.space](https://jyxpndjr.manus.space)

## Project Structure

```
/
├── index.html              # Main game page
├── documentation.html      # Documentation viewer
├── documentation.md        # Game documentation in markdown
├── src/
│   ├── css/                # Stylesheets
│   │   ├── style.css       # Original CSS
│   │   └── style.min.css   # Minified CSS for production
│   ├── js/                 # JavaScript files
│   │   ├── models/         # Game model classes
│   │   ├── controllers/    # Game controller classes
│   │   ├── views/          # Game view classes
│   │   ├── utils/          # Utility classes
│   │   ├── data/           # Game data files
│   │   ├── GameEngine.js   # Main game engine
│   │   └── main.js         # Application entry point
│   └── assets/             # Game assets
├── tests/                  # Test files
├── package.json            # Project information
├── mkdocs.yml              # Documentation configuration
└── netlify.toml            # Deployment configuration
```

## Getting Started

### Local Development

1. Clone this repository:
   ```
   git clone <repository-url>
   cd digital-quest
   ```

2. Open the project in your favorite code editor

3. Start a local server:
   ```
   python -m http.server 8000
   ```

4. Open your browser and navigate to `http://localhost:8000`

### Deployment

The game can be deployed to any static site hosting service:

1. Copy all files to your web server
2. Ensure index.html is served as the default page
3. No server-side processing is required

## Game Commands

- `look` - Examine your surroundings
- `north`, `south`, `east`, `west` - Move in a direction
- `examine [object]` - Look at something more closely
- `take [item]` - Pick up an item
- `drop [item]` - Drop an item from your inventory
- `inventory` - See what you're carrying
- `talk to [npc]` - Speak with a non-player character
- `help` - Show available commands

## Educational Content

The game covers all key areas of the GCSE Digital Technology curriculum:

- Data representation and storage
- Computer systems and architecture
- Networks and communication
- Software development
- Digital impacts and ethics
- Security and privacy

## Contributing

Contributions to improve the game or expand the educational content are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Created as a revision aid for GCSE Digital Technology students
- Inspired by classic text adventures like Zork
- Humor influenced by Monty Python and Terry Pratchett
