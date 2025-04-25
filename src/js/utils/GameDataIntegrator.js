/**
 * GameDataIntegrator.js - Integrates game data with the game engine
 * 
 * This file handles the integration of all game data with the game engine components,
 * ensuring that the educational content is properly connected to the game mechanics.
 */

class GameDataIntegrator {
  /**
   * Constructor for the GameDataIntegrator
   * @param {GameState} gameState - The current game state
   * @param {Object} gameData - The loaded game data
   */
  constructor(gameState, gameData) {
    this.gameState = gameState;
    this.gameData = gameData;
  }

  /**
   * Initializes the game world with all data
   * Sets up the initial game state based on the loaded data
   */
  initializeGameWorld() {
    // Initialize locations in the game state
    this.initializeLocations();
    
    // Initialize items in the game state
    this.initializeItems();
    
    // Initialize NPCs in the game state
    this.initializeNPCs();
    
    // Initialize challenges in the game state
    this.initializeChallenges();
    
    // Initialize danger scenarios in the game state
    this.initializeDangerScenarios();
    
    // Set starting location
    this.setStartingLocation();
    
    console.log('Game world initialized successfully');
  }

  /**
   * Initializes all locations in the game state
   */
  initializeLocations() {
    for (const locationId in this.gameData.locations) {
      const locationData = this.gameData.locations[locationId];
      
      // Create Location object and add to game state
      const location = new Location(
        locationId,
        locationData.name,
        locationData.description,
        locationData.exits || {},
        locationData.items || [],
        locationData.npcs || [],
        locationData.challenges || [],
        locationData.dangerScenarios || []
      );
      
      this.gameState.addLocation(location);
    }
  }

  /**
   * Initializes all items in the game state
   */
  initializeItems() {
    for (const itemId in this.gameData.items) {
      const itemData = this.gameData.items[itemId];
      
      // Create Item object
      const item = new Item(
        itemId,
        itemData.name,
        itemData.description,
        itemData.location,
        itemData.can_take || false,
        itemData.use_text || ''
      );
      
      // Add item to game state
      this.gameState.addItem(item);
      
      // If item is in a location, add it to that location
      if (itemData.location && this.gameState.getLocation(itemData.location)) {
        this.gameState.getLocation(itemData.location).addItem(itemId);
      }
    }
  }

  /**
   * Initializes all NPCs in the game state
   */
  initializeNPCs() {
    for (const npcId in this.gameData.npcs) {
      const npcData = this.gameData.npcs[npcId];
      
      // Create NPC object
      const npc = new NPC(
        npcId,
        npcData.name,
        npcData.location,
        npcData.introduction,
        npcData.quiz_options,
        npcData.quizzes
      );
      
      // Add NPC to game state
      this.gameState.addNPC(npc);
      
      // If NPC is in a location, add it to that location
      if (npcData.location && this.gameState.getLocation(npcData.location)) {
        this.gameState.getLocation(npcData.location).addNPC(npcId);
      }
    }
  }

  /**
   * Initializes all challenges in the game state
   */
  initializeChallenges() {
    for (const challengeId in this.gameData.challenges) {
      const challengeData = this.gameData.challenges[challengeId];
      
      // Create Challenge object
      const challenge = new Challenge(
        challengeId,
        challengeData.title,
        challengeData.description,
        challengeData.location,
        challengeData.challenge_text,
        challengeData.solution_type,
        challengeData.options || [],
        challengeData.correct_answer,
        challengeData.success_text,
        challengeData.failure_text,
        challengeData.educational_content,
        challengeData.curriculum_topic,
        challengeData.difficulty,
        challengeData.is_lethal || false
      );
      
      // Add challenge to game state
      this.gameState.addChallenge(challenge);
      
      // If challenge is in a location, add it to that location
      if (challengeData.location && this.gameState.getLocation(challengeData.location)) {
        this.gameState.getLocation(challengeData.location).addChallenge(challengeId);
      }
    }
  }

  /**
   * Initializes all danger scenarios in the game state
   */
  initializeDangerScenarios() {
    for (const scenarioId in this.gameData.dangerScenarios) {
      const scenarioData = this.gameData.dangerScenarios[scenarioId];
      
      // Create DangerScenario object
      const scenario = new DangerScenario(
        scenarioId,
        scenarioData.title,
        scenarioData.description,
        scenarioData.location,
        scenarioData.trigger_text,
        scenarioData.solution_type,
        scenarioData.options || [],
        scenarioData.correct_answer,
        scenarioData.success_text,
        scenarioData.failure_text,
        scenarioData.educational_content,
        scenarioData.curriculum_topic,
        scenarioData.is_lethal
      );
      
      // Add danger scenario to game state
      this.gameState.addDangerScenario(scenario);
      
      // If danger scenario is in a location, add it to that location
      if (scenarioData.location && this.gameState.getLocation(scenarioData.location)) {
        this.gameState.getLocation(scenarioData.location).addDangerScenario(scenarioId);
      }
    }
  }

  /**
   * Sets the starting location for the game
   */
  setStartingLocation() {
    // Set the starting location to the central hub
    const startingLocationId = 'central_hub';
    
    if (this.gameState.getLocation(startingLocationId)) {
      this.gameState.setCurrentLocation(startingLocationId);
      console.log(`Starting location set to: ${startingLocationId}`);
    } else {
      // Fallback to the first location if central hub doesn't exist
      const firstLocationId = Object.keys(this.gameData.locations)[0];
      this.gameState.setCurrentLocation(firstLocationId);
      console.log(`Starting location set to: ${firstLocationId} (fallback)`);
    }
  }

  /**
   * Gets curriculum coverage statistics
   * @returns {Object} Statistics about curriculum coverage
   */
  getCurriculumCoverageStats() {
    const stats = {
      totalTopics: 0,
      coveredTopics: new Set(),
      topicCoverage: {},
      itemsByTopic: {},
      challengesByTopic: {},
      npcQuizzesByTopic: {},
      dangerScenariosByTopic: {}
    };
    
    // Collect topics from challenges
    for (const challengeId in this.gameData.challenges) {
      const challenge = this.gameData.challenges[challengeId];
      const topic = challenge.curriculum_topic;
      
      if (topic) {
        stats.coveredTopics.add(topic);
        
        if (!stats.challengesByTopic[topic]) {
          stats.challengesByTopic[topic] = [];
        }
        
        stats.challengesByTopic[topic].push(challengeId);
      }
    }
    
    // Collect topics from danger scenarios
    for (const scenarioId in this.gameData.dangerScenarios) {
      const scenario = this.gameData.dangerScenarios[scenarioId];
      const topic = scenario.curriculum_topic;
      
      if (topic) {
        stats.coveredTopics.add(topic);
        
        if (!stats.dangerScenariosByTopic[topic]) {
          stats.dangerScenariosByTopic[topic] = [];
        }
        
        stats.dangerScenariosByTopic[topic].push(scenarioId);
      }
    }
    
    // Collect topics from NPC quizzes
    for (const npcId in this.gameData.npcs) {
      const npc = this.gameData.npcs[npcId];
      
      if (npc.quizzes) {
        for (const quiz of npc.quizzes) {
          // Derive topic from quiz name
          const topic = `Quiz - ${quiz.topic}`;
          stats.coveredTopics.add(topic);
          
          if (!stats.npcQuizzesByTopic[topic]) {
            stats.npcQuizzesByTopic[topic] = [];
          }
          
          stats.npcQuizzesByTopic[topic].push(`${npcId}:${quiz.topic}`);
        }
      }
    }
    
    // Calculate coverage statistics
    stats.totalTopics = stats.coveredTopics.size;
    stats.coveredTopics = Array.from(stats.coveredTopics);
    
    for (const topic of stats.coveredTopics) {
      stats.topicCoverage[topic] = {
        challenges: stats.challengesByTopic[topic] || [],
        dangerScenarios: stats.dangerScenariosByTopic[topic] || [],
        npcQuizzes: stats.npcQuizzesByTopic[topic] || []
      };
    }
    
    return stats;
  }
}
