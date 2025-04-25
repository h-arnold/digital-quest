/**
 * game_data_loader.js - Loads and integrates all game data
 * 
 * This file handles loading all the game data files and integrating them
 * with the game engine. It ensures all educational content is properly
 * connected and accessible.
 */

class GameDataLoader {
  /**
   * Constructor for the GameDataLoader
   * Initializes empty collections for game data
   */
  constructor() {
    this.locations = {};
    this.items = {};
    this.npcs = {};
    this.challenges = {};
    this.dangerScenarios = {};
    this.dataLoaded = false;
  }

  /**
   * Loads all game data and integrates it
   * @returns {Promise} Resolves when all data is loaded and integrated
   */
  async loadAllData() {
    try {
      // Load all data
      await this.loadLocations();
      await this.loadItems();
      await this.loadNPCs();
      await this.loadChallenges();
      await this.loadDangerScenarios();
      
      // Integrate data
      this.integrateData();
      
      this.dataLoaded = true;
      console.log('All game data loaded and integrated successfully');
      return true;
    } catch (error) {
      console.error('Error loading game data:', error);
      return false;
    }
  }

  /**
   * Loads location data
   * @returns {Promise} Resolves when location data is loaded
   */
  async loadLocations() {
    try {
      this.locations = locationData || {};
      return true;
    } catch (error) {
      console.error('Error loading location data:', error);
      return false;
    }
  }

  /**
   * Loads item data
   * @returns {Promise} Resolves when item data is loaded
   */
  async loadItems() {
    try {
      this.items = itemData || {};
      return true;
    } catch (error) {
      console.error('Error loading item data:', error);
      return false;
    }
  }

  /**
   * Loads NPC data
   * @returns {Promise} Resolves when NPC data is loaded
   */
  async loadNPCs() {
    try {
      this.npcs = npcData || {};
      return true;
    } catch (error) {
      console.error('Error loading NPC data:', error);
      return false;
    }
  }

  /**
   * Loads challenge data
   * @returns {Promise} Resolves when challenge data is loaded
   */
  async loadChallenges() {
    try {
      this.challenges = challengeData || {};
      return true;
    } catch (error) {
      console.error('Error loading challenge data:', error);
      return false;
    }
  }

  /**
   * Loads danger scenario data
   * @returns {Promise} Resolves when danger scenario data is loaded
   */
  async loadDangerScenarios() {
    try {
      this.dangerScenarios = dangerScenarioData || {};
      return true;
    } catch (error) {
      console.error('Error loading danger scenario data:', error);
      return false;
    }
  }

  /**
   * Integrates all data to ensure proper connections between game elements
   */
  integrateData() {
    // Connect items to their locations
    this.connectItemsToLocations();
    
    // Connect NPCs to their locations
    this.connectNPCsToLocations();
    
    // Connect challenges to their locations
    this.connectChallengesToLocations();
    
    // Connect danger scenarios to their locations
    this.connectDangerScenariosToLocations();
    
    // Validate all connections
    this.validateConnections();
  }

  /**
   * Connects items to their respective locations
   */
  connectItemsToLocations() {
    for (const itemId in this.items) {
      const item = this.items[itemId];
      const locationId = item.location;
      
      if (locationId && this.locations[locationId]) {
        if (!this.locations[locationId].items) {
          this.locations[locationId].items = [];
        }
        
        // Add item to location if not already present
        if (!this.locations[locationId].items.includes(itemId)) {
          this.locations[locationId].items.push(itemId);
        }
      }
    }
  }

  /**
   * Connects NPCs to their respective locations
   */
  connectNPCsToLocations() {
    for (const npcId in this.npcs) {
      const npc = this.npcs[npcId];
      const locationId = npc.location;
      
      if (locationId && this.locations[locationId]) {
        if (!this.locations[locationId].npcs) {
          this.locations[locationId].npcs = [];
        }
        
        // Add NPC to location if not already present
        if (!this.locations[locationId].npcs.includes(npcId)) {
          this.locations[locationId].npcs.push(npcId);
        }
      }
    }
  }

  /**
   * Connects challenges to their respective locations
   */
  connectChallengesToLocations() {
    for (const challengeId in this.challenges) {
      const challenge = this.challenges[challengeId];
      const locationId = challenge.location;
      
      if (locationId && this.locations[locationId]) {
        if (!this.locations[locationId].challenges) {
          this.locations[locationId].challenges = [];
        }
        
        // Add challenge to location if not already present
        if (!this.locations[locationId].challenges.includes(challengeId)) {
          this.locations[locationId].challenges.push(challengeId);
        }
      }
    }
  }

  /**
   * Connects danger scenarios to their respective locations
   */
  connectDangerScenariosToLocations() {
    for (const scenarioId in this.dangerScenarios) {
      const scenario = this.dangerScenarios[scenarioId];
      const locationId = scenario.location;
      
      if (locationId && this.locations[locationId]) {
        if (!this.locations[locationId].dangerScenarios) {
          this.locations[locationId].dangerScenarios = [];
        }
        
        // Add danger scenario to location if not already present
        if (!this.locations[locationId].dangerScenarios.includes(scenarioId)) {
          this.locations[locationId].dangerScenarios.push(scenarioId);
        }
      }
    }
  }

  /**
   * Validates all connections to ensure data integrity
   */
  validateConnections() {
    // Check for locations referenced in items that don't exist
    for (const itemId in this.items) {
      const locationId = this.items[itemId].location;
      if (locationId && !this.locations[locationId]) {
        console.warn(`Item ${itemId} references non-existent location ${locationId}`);
      }
    }
    
    // Check for locations referenced in NPCs that don't exist
    for (const npcId in this.npcs) {
      const locationId = this.npcs[npcId].location;
      if (locationId && !this.locations[locationId]) {
        console.warn(`NPC ${npcId} references non-existent location ${locationId}`);
      }
    }
    
    // Check for locations referenced in challenges that don't exist
    for (const challengeId in this.challenges) {
      const locationId = this.challenges[challengeId].location;
      if (locationId && !this.locations[locationId]) {
        console.warn(`Challenge ${challengeId} references non-existent location ${locationId}`);
      }
    }
    
    // Check for locations referenced in danger scenarios that don't exist
    for (const scenarioId in this.dangerScenarios) {
      const locationId = this.dangerScenarios[scenarioId].location;
      if (locationId && !this.locations[locationId]) {
        console.warn(`Danger scenario ${scenarioId} references non-existent location ${locationId}`);
      }
    }
    
    // Check for connections between locations
    for (const locationId in this.locations) {
      const location = this.locations[locationId];
      if (location.exits) {
        for (const direction in location.exits) {
          const targetLocationId = location.exits[direction];
          if (!this.locations[targetLocationId]) {
            console.warn(`Location ${locationId} has exit to non-existent location ${targetLocationId}`);
          }
        }
      }
    }
  }

  /**
   * Gets all game data in a format ready for the game engine
   * @returns {Object} Integrated game data
   */
  getGameData() {
    if (!this.dataLoaded) {
      throw new Error('Game data not loaded. Call loadAllData() first.');
    }
    
    return {
      locations: this.locations,
      items: this.items,
      npcs: this.npcs,
      challenges: this.challenges,
      dangerScenarios: this.dangerScenarios
    };
  }
}
