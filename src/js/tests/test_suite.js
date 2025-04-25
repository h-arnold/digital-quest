/**
 * test_suite.js - Comprehensive test suite for the GCSE Digital Technology text adventure game
 * 
 * This file contains tests for all major components of the game, ensuring that
 * everything works correctly before final delivery.
 */

class TestSuite {
  /**
   * Constructor for the TestSuite
   */
  constructor() {
    this.tests = [];
    this.results = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0
    };
    this.setupTests();
  }

  /**
   * Sets up all tests to be run
   */
  setupTests() {
    // Model tests
    this.addTest('GameState', this.testGameState);
    this.addTest('Location', this.testLocation);
    this.addTest('Item', this.testItem);
    this.addTest('NPC', this.testNPC);
    this.addTest('Challenge', this.testChallenge);
    this.addTest('DangerScenario', this.testDangerScenario);
    
    // Utility tests
    this.addTest('Parser', this.testParser);
    this.addTest('StorageManager', this.testStorageManager);
    this.addTest('GameDataLoader', this.testGameDataLoader);
    this.addTest('GameDataIntegrator', this.testGameDataIntegrator);
    
    // Controller tests
    this.addTest('CommandController', this.testCommandController);
    this.addTest('UIController', this.testUIController);
    this.addTest('SaveLoadController', this.testSaveLoadController);
    this.addTest('GameController', this.testGameController);
    
    // Integration tests
    this.addTest('GameEngine', this.testGameEngine);
    this.addTest('GameFlow', this.testGameFlow);
    
    // Data validation tests
    this.addTest('LocationData', this.testLocationData);
    this.addTest('ItemData', this.testItemData);
    this.addTest('NPCData', this.testNPCData);
    this.addTest('ChallengeData', this.testChallengeData);
    this.addTest('DangerScenarioData', this.testDangerScenarioData);
  }

  /**
   * Adds a test to the suite
   * @param {string} name - The name of the test
   * @param {Function} testFunction - The test function to run
   */
  addTest(name, testFunction) {
    this.tests.push({
      name,
      run: testFunction.bind(this)
    });
  }

  /**
   * Runs all tests in the suite
   * @returns {Object} The test results
   */
  async runAllTests() {
    console.log('Starting test suite...');
    
    this.results = {
      total: this.tests.length,
      passed: 0,
      failed: 0,
      skipped: 0,
      details: []
    };
    
    for (const test of this.tests) {
      console.log(`Running test: ${test.name}`);
      
      try {
        const result = await test.run();
        
        if (result.skipped) {
          console.log(`Test ${test.name} skipped: ${result.message}`);
          this.results.skipped++;
        } else if (result.passed) {
          console.log(`Test ${test.name} passed`);
          this.results.passed++;
        } else {
          console.error(`Test ${test.name} failed: ${result.message}`);
          this.results.failed++;
        }
        
        this.results.details.push({
          name: test.name,
          passed: result.skipped ? null : result.passed,
          skipped: result.skipped,
          message: result.message
        });
      } catch (error) {
        console.error(`Test ${test.name} threw an exception:`, error);
        
        this.results.failed++;
        this.results.details.push({
          name: test.name,
          passed: false,
          skipped: false,
          message: `Exception: ${error.message}`
        });
      }
    }
    
    console.log('Test suite completed.');
    console.log(`Results: ${this.results.passed} passed, ${this.results.failed} failed, ${this.results.skipped} skipped`);
    
    return this.results;
  }

  /**
   * Helper function to create a passing test result
   * @param {string} message - Optional message
   * @returns {Object} Test result
   */
  pass(message = '') {
    return {
      passed: true,
      skipped: false,
      message
    };
  }

  /**
   * Helper function to create a failing test result
   * @param {string} message - Failure message
   * @returns {Object} Test result
   */
  fail(message) {
    return {
      passed: false,
      skipped: false,
      message
    };
  }

  /**
   * Helper function to create a skipped test result
   * @param {string} message - Skip reason
   * @returns {Object} Test result
   */
  skip(message) {
    return {
      passed: null,
      skipped: true,
      message
    };
  }

  /**
   * Helper function to assert a condition
   * @param {boolean} condition - The condition to check
   * @param {string} message - Failure message if condition is false
   * @throws {Error} If the condition is false
   */
  assert(condition, message) {
    if (!condition) {
      throw new Error(message || 'Assertion failed');
    }
  }

  /**
   * Tests the GameState model
   * @returns {Object} Test result
   */
  async testGameState() {
    try {
      // Create a new GameState
      const gameState = new GameState();
      
      // Test initial state
      this.assert(gameState.getCurrentLocation() === null, 'Initial current location should be null');
      this.assert(gameState.getHealth() === 100, 'Initial health should be 100');
      this.assert(gameState.getScore() === 0, 'Initial score should be 0');
      this.assert(gameState.getMoves() === 0, 'Initial moves should be 0');
      this.assert(Array.isArray(gameState.getInventory()), 'Inventory should be an array');
      this.assert(gameState.getInventory().length === 0, 'Initial inventory should be empty');
      
      // Test setting current location
      gameState.setCurrentLocation('test_location');
      this.assert(gameState.getCurrentLocation() === 'test_location', 'Current location not set correctly');
      
      // Test adding and getting locations
      const location = { id: 'loc1', name: 'Test Location' };
      gameState.addLocation(location);
      this.assert(gameState.getLocation('loc1') === location, 'Location not added correctly');
      
      // Test adding and getting items
      const item = { id: 'item1', name: 'Test Item' };
      gameState.addItem(item);
      this.assert(gameState.getItem('item1') === item, 'Item not added correctly');
      
      // Test inventory management
      gameState.addToInventory('item1');
      this.assert(gameState.getInventory().includes('item1'), 'Item not added to inventory');
      this.assert(gameState.hasInInventory('item1'), 'hasInInventory should return true');
      gameState.removeFromInventory('item1');
      this.assert(!gameState.getInventory().includes('item1'), 'Item not removed from inventory');
      
      // Test health management
      gameState.decreaseHealth(20);
      this.assert(gameState.getHealth() === 80, 'Health not decreased correctly');
      gameState.increaseHealth(10);
      this.assert(gameState.getHealth() === 90, 'Health not increased correctly');
      
      // Test score management
      gameState.increaseScore(50);
      this.assert(gameState.getScore() === 50, 'Score not increased correctly');
      
      // Test move counting
      gameState.incrementMoves();
      this.assert(gameState.getMoves() === 1, 'Moves not incremented correctly');
      
      return this.pass('GameState tests passed');
    } catch (error) {
      return this.fail(`GameState tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the Location model
   * @returns {Object} Test result
   */
  async testLocation() {
    try {
      // Create a new Location
      const location = new Location(
        'test_loc',
        'Test Location',
        'This is a test location',
        { north: 'loc2', south: 'loc3' },
        ['item1', 'item2'],
        ['npc1'],
        ['challenge1'],
        ['danger1']
      );
      
      // Test getters
      this.assert(location.getId() === 'test_loc', 'Location ID incorrect');
      this.assert(location.getName() === 'Test Location', 'Location name incorrect');
      this.assert(location.getDescription() === 'This is a test location', 'Location description incorrect');
      this.assert(location.getExits().north === 'loc2', 'Location exits incorrect');
      this.assert(location.getItems().includes('item1'), 'Location items incorrect');
      this.assert(location.getNPCs().includes('npc1'), 'Location NPCs incorrect');
      this.assert(location.getChallenges().includes('challenge1'), 'Location challenges incorrect');
      this.assert(location.getDangerScenarios().includes('danger1'), 'Location danger scenarios incorrect');
      
      // Test adding and removing items
      location.addItem('item3');
      this.assert(location.getItems().includes('item3'), 'Item not added to location');
      location.removeItem('item1');
      this.assert(!location.getItems().includes('item1'), 'Item not removed from location');
      
      // Test adding NPCs, challenges, and danger scenarios
      location.addNPC('npc2');
      this.assert(location.getNPCs().includes('npc2'), 'NPC not added to location');
      location.addChallenge('challenge2');
      this.assert(location.getChallenges().includes('challenge2'), 'Challenge not added to location');
      location.addDangerScenario('danger2');
      this.assert(location.getDangerScenarios().includes('danger2'), 'Danger scenario not added to location');
      
      return this.pass('Location tests passed');
    } catch (error) {
      return this.fail(`Location tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the Item model
   * @returns {Object} Test result
   */
  async testItem() {
    try {
      // Create a new Item
      const item = new Item(
        'test_item',
        'Test Item',
        'This is a test item',
        'test_loc',
        true,
        'You use the test item.'
      );
      
      // Test getters
      this.assert(item.getId() === 'test_item', 'Item ID incorrect');
      this.assert(item.getName() === 'Test Item', 'Item name incorrect');
      this.assert(item.getDescription() === 'This is a test item', 'Item description incorrect');
      this.assert(item.getLocation() === 'test_loc', 'Item location incorrect');
      this.assert(item.canTake() === true, 'Item canTake incorrect');
      this.assert(item.getUseText() === 'You use the test item.', 'Item use text incorrect');
      
      // Test setters
      item.setLocation('new_loc');
      this.assert(item.getLocation() === 'new_loc', 'Item location not updated');
      
      return this.pass('Item tests passed');
    } catch (error) {
      return this.fail(`Item tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the NPC model
   * @returns {Object} Test result
   */
  async testNPC() {
    try {
      // Create a new NPC
      const npc = new NPC(
        'test_npc',
        'Test NPC',
        'test_loc',
        'Hello, I am a test NPC.',
        ['Quiz 1', 'Quiz 2'],
        [
          {
            topic: 'Quiz 1',
            introduction: 'This is quiz 1',
            questions: [
              {
                question: 'Test question?',
                options: ['A', 'B', 'C', 'D'],
                correct_answer: 1,
                explanation: 'B is correct'
              }
            ],
            success_response: 'Good job!',
            failure_response: 'Try again!'
          }
        ]
      );
      
      // Test getters
      this.assert(npc.getId() === 'test_npc', 'NPC ID incorrect');
      this.assert(npc.getName() === 'Test NPC', 'NPC name incorrect');
      this.assert(npc.getLocation() === 'test_loc', 'NPC location incorrect');
      this.assert(npc.getIntroduction() === 'Hello, I am a test NPC.', 'NPC introduction incorrect');
      this.assert(npc.getQuizOptions().includes('Quiz 1'), 'NPC quiz options incorrect');
      this.assert(npc.getQuizzes()[0].topic === 'Quiz 1', 'NPC quizzes incorrect');
      
      // Test quiz methods
      const quiz = npc.getQuizByTopic('Quiz 1');
      this.assert(quiz.topic === 'Quiz 1', 'getQuizByTopic incorrect');
      this.assert(quiz.questions[0].question === 'Test question?', 'Quiz questions incorrect');
      
      return this.pass('NPC tests passed');
    } catch (error) {
      return this.fail(`NPC tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the Challenge model
   * @returns {Object} Test result
   */
  async testChallenge() {
    try {
      // Create a new Challenge
      const challenge = new Challenge(
        'test_challenge',
        'Test Challenge',
        'This is a test challenge',
        'test_loc',
        'Solve this challenge',
        'multiple_choice',
        ['A', 'B', 'C', 'D'],
        1,
        'Correct!',
        'Incorrect!',
        'Educational content about this challenge',
        'Test topic',
        'medium',
        false
      );
      
      // Test getters
      this.assert(challenge.getId() === 'test_challenge', 'Challenge ID incorrect');
      this.assert(challenge.getTitle() === 'Test Challenge', 'Challenge title incorrect');
      this.assert(challenge.getDescription() === 'This is a test challenge', 'Challenge description incorrect');
      this.assert(challenge.getLocation() === 'test_loc', 'Challenge location incorrect');
      this.assert(challenge.getChallengeText() === 'Solve this challenge', 'Challenge text incorrect');
      this.assert(challenge.getSolutionType() === 'multiple_choice', 'Challenge solution type incorrect');
      this.assert(challenge.getOptions()[1] === 'B', 'Challenge options incorrect');
      this.assert(challenge.getCorrectAnswer() === 1, 'Challenge correct answer incorrect');
      this.assert(challenge.getSuccessText() === 'Correct!', 'Challenge success text incorrect');
      this.assert(challenge.getFailureText() === 'Incorrect!', 'Challenge failure text incorrect');
      this.assert(challenge.getEducationalContent() === 'Educational content about this challenge', 'Challenge educational content incorrect');
      this.assert(challenge.getCurriculumTopic() === 'Test topic', 'Challenge curriculum topic incorrect');
      this.assert(challenge.getDifficulty() === 'medium', 'Challenge difficulty incorrect');
      this.assert(challenge.isLethal() === false, 'Challenge lethality incorrect');
      
      // Test answer checking
      this.assert(challenge.checkAnswer('1') === true, 'Challenge answer checking incorrect for string input');
      this.assert(challenge.checkAnswer(1) === true, 'Challenge answer checking incorrect for number input');
      this.assert(challenge.checkAnswer('2') === false, 'Challenge answer checking incorrect for wrong answer');
      
      return this.pass('Challenge tests passed');
    } catch (error) {
      return this.fail(`Challenge tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the DangerScenario model
   * @returns {Object} Test result
   */
  async testDangerScenario() {
    try {
      // Create a new DangerScenario
      const scenario = new DangerScenario(
        'test_danger',
        'Test Danger',
        'This is a test danger scenario',
        'test_loc',
        'You encounter a dangerous situation!',
        'multiple_choice',
        ['A', 'B', 'C', 'D'],
        2,
        'You survived!',
        'You died!',
        'Educational content about this danger',
        'Test topic',
        true
      );
      
      // Test getters
      this.assert(scenario.getId() === 'test_danger', 'Danger scenario ID incorrect');
      this.assert(scenario.getTitle() === 'Test Danger', 'Danger scenario title incorrect');
      this.assert(scenario.getDescription() === 'This is a test danger scenario', 'Danger scenario description incorrect');
      this.assert(scenario.getLocation() === 'test_loc', 'Danger scenario location incorrect');
      this.assert(scenario.getTriggerText() === 'You encounter a dangerous situation!', 'Danger scenario trigger text incorrect');
      this.assert(scenario.getSolutionType() === 'multiple_choice', 'Danger scenario solution type incorrect');
      this.assert(scenario.getOptions()[2] === 'C', 'Danger scenario options incorrect');
      this.assert(scenario.getCorrectAnswer() === 2, 'Danger scenario correct answer incorrect');
      this.assert(scenario.getSuccessText() === 'You survived!', 'Danger scenario success text incorrect');
      this.assert(scenario.getFailureText() === 'You died!', 'Danger scenario failure text incorrect');
      this.assert(scenario.getEducationalContent() === 'Educational content about this danger', 'Danger scenario educational content incorrect');
      this.assert(scenario.getCurriculumTopic() === 'Test topic', 'Danger scenario curriculum topic incorrect');
      this.assert(scenario.isLethal() === true, 'Danger scenario lethality incorrect');
      
      // Test answer checking
      this.assert(scenario.checkAnswer('2') === false, 'Danger scenario answer checking incorrect for string input');
      this.assert(scenario.checkAnswer(2) === false, 'Danger scenario answer checking incorrect for number input');
      this.assert(scenario.checkAnswer('3') === true, 'Danger scenario answer checking incorrect for correct answer');
      
      return this.pass('DangerScenario tests passed');
    } catch (error) {
      return this.fail(`DangerScenario tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the Parser utility
   * @returns {Object} Test result
   */
  async testParser() {
    try {
      // Create a new Parser
      const parser = new Parser();
      
      // Test command parsing
      let result = parser.parse('go north');
      this.assert(result.command === 'go', 'Command not parsed correctly');
      this.assert(result.args[0] === 'north', 'Command arguments not parsed correctly');
      
      result = parser.parse('take golden key');
      this.assert(result.command === 'take', 'Command not parsed correctly');
      this.assert(result.args.join(' ') === 'golden key', 'Multi-word arguments not parsed correctly');
      
      result = parser.parse('look');
      this.assert(result.command === 'look', 'Simple command not parsed correctly');
      this.assert(result.args.length === 0, 'Command with no args should have empty args array');
      
      // Test command normalization
      result = parser.parse('TAKE KEY');
      this.assert(result.command === 'take', 'Command not normalized to lowercase');
      
      result = parser.parse('  examine   map  ');
      this.assert(result.command === 'examine', 'Extra spaces not handled correctly');
      this.assert(result.args[0] === 'map', 'Extra spaces in args not handled correctly');
      
      return this.pass('Parser tests passed');
    } catch (error) {
      return this.fail(`Parser tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the StorageManager utility
   * @returns {Object} Test result
   */
  async testStorageManager() {
    try {
      // Create a new StorageManager
      const storageManager = new StorageManager();
      
      // Test data saving and loading
      const testData = {
        player: {
          name: 'Test Player',
          health: 100,
          score: 50
        },
        inventory: ['item1', 'item2'],
        location: 'test_loc'
      };
      
      // Test save to JSON
      const jsonData = storageManager.saveToJSON(testData);
      this.assert(typeof jsonData === 'string', 'saveToJSON should return a string');
      
      // Test load from JSON
      const loadedData = storageManager.loadFromJSON(jsonData);
      this.assert(loadedData.player.name === 'Test Player', 'loadFromJSON did not restore data correctly');
      this.assert(loadedData.inventory.includes('item1'), 'loadFromJSON did not restore arrays correctly');
      
      // Test file download and upload (can only be partially tested)
      const blob = storageManager.createDownloadBlob(jsonData);
      this.assert(blob instanceof Blob, 'createDownloadBlob should return a Blob');
      
      return this.pass('StorageManager tests passed');
    } catch (error) {
      return this.fail(`StorageManager tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the GameDataLoader utility
   * @returns {Object} Test result
   */
  async testGameDataLoader() {
    // This test requires the actual data files to be loaded
    // We'll check if they're available and skip if not
    if (typeof locationData === 'undefined') {
      return this.skip('Game data not available, skipping GameDataLoader test');
    }
    
    try {
      // Create a new GameDataLoader
      const dataLoader = new GameDataLoader();
      
      // Test loading all data
      const result = await dataLoader.loadAllData();
      this.assert(result === true, 'loadAllData should return true on success');
      this.assert(dataLoader.dataLoaded === true, 'dataLoaded flag should be set to true');
      
      // Test getting game data
      const gameData = dataLoader.getGameData();
      this.assert(gameData.locations !== undefined, 'Game data should include locations');
      this.assert(gameData.items !== undefined, 'Game data should include items');
      this.assert(gameData.npcs !== undefined, 'Game data should include NPCs');
      this.assert(gameData.challenges !== undefined, 'Game data should include challenges');
      this.assert(gameData.dangerScenarios !== undefined, 'Game data should include danger scenarios');
      
      // Test data integration
      this.assert(Object.keys(gameData.locations).length > 0, 'Locations data should not be empty');
      
      // Test a specific location to ensure it has connected items, NPCs, etc.
      const centralHub = gameData.locations.central_hub;
      if (centralHub) {
        this.assert(centralHub.name === 'Central Hub', 'Central Hub location should be loaded correctly');
        this.assert(centralHub.items !== undefined, 'Location should have items array');
        this.assert(centralHub.npcs !== undefined, 'Location should have NPCs array');
      }
      
      return this.pass('GameDataLoader tests passed');
    } catch (error) {
      return this.fail(`GameDataLoader tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the GameDataIntegrator utility
   * @returns {Object} Test result
   */
  async testGameDataIntegrator() {
    // This test requires the GameDataLoader to be working
    // We'll create a minimal test environment
    try {
      // Create a test game state
      const gameState = new GameState();
      
      // Create test game data
      const gameData = {
        locations: {
          'loc1': {
            id: 'loc1',
            name: 'Location 1',
            description: 'Test location 1',
            exits: { north: 'loc2' }
          },
          'loc2': {
            id: 'loc2',
            name: 'Location 2',
            description: 'Test location 2',
            exits: { south: 'loc1' }
          }
        },
        items: {
          'item1': {
            id: 'item1',
            name: 'Item 1',
            description: 'Test item 1',
            location: 'loc1',
            can_take: true
          }
        },
        npcs: {
          'npc1': {
            npc_id: 'npc1',
            name: 'NPC 1',
            location: 'loc2',
            introduction: 'Test introduction',
            quiz_options: ['Quiz 1'],
            quizzes: []
          }
        },
        challenges: {
          'challenge1': {
            id: 'challenge1',
            title: 'Challenge 1',
            description: 'Test challenge',
            location: 'loc1',
            challenge_text: 'Test challenge text',
            solution_type: 'multiple_choice',
            options: ['A', 'B'],
            correct_answer: 0,
            success_text: 'Success',
            failure_text: 'Failure',
            educational_content: 'Test content',
            curriculum_topic: 'Test topic',
            difficulty: 'easy',
            is_lethal: false
          }
        },
        dangerScenarios: {
          'danger1': {
            id: 'danger1',
            title: 'Danger 1',
            description: 'Test danger',
            location: 'loc2',
            trigger_text: 'Test trigger',
            solution_type: 'multiple_choice',
            options: ['A', 'B'],
            correct_answer: 1,
            success_text: 'Success',
            failure_text: 'Failure',
            educational_content: 'Test content',
            curriculum_topic: 'Test topic',
            is_lethal: true
          }
        }
      };
      
      // Create a GameDataIntegrator
      const integrator = new GameDataIntegrator(gameState, gameData);
      
      // Initialize the game world
      integrator.initializeGameWorld();
      
      // Test that locations were initialized
      const loc1 = gameState.getLocation('loc1');
      this.assert(loc1 !== null, 'Location 1 should be initialized');
      this.assert(loc1.getName() === 'Location 1', 'Location name should be set correctly');
      this.assert(loc1.getExits().north === 'loc2', 'Location exits should be set correctly');
      
      // Test that items were initialized and connected to locations
      const item1 = gameState.getItem('item1');
      this.assert(item1 !== null, 'Item 1 should be initialized');
      this.assert(item1.getLocation() === 'loc1', 'Item location should be set correctly');
      this.assert(loc1.getItems().includes('item1'), 'Location should have the item in its items array');
      
      // Test that NPCs were initialized and connected to locations
      const npc1 = gameState.getNPC('npc1');
      this.assert(npc1 !== null, 'NPC 1 should be initialized');
      this.assert(npc1.getLocation() === 'loc2', 'NPC location should be set correctly');
      const loc2 = gameState.getLocation('loc2');
      this.assert(loc2.getNPCs().includes('npc1'), 'Location should have the NPC in its NPCs array');
      
      // Test that challenges were initialized and connected to locations
      const challenge1 = gameState.getChallenge('challenge1');
      this.assert(challenge1 !== null, 'Challenge 1 should be initialized');
      this.assert(challenge1.getLocation() === 'loc1', 'Challenge location should be set correctly');
      this.assert(loc1.getChallenges().includes('challenge1'), 'Location should have the challenge in its challenges array');
      
      // Test that danger scenarios were initialized and connected to locations
      const danger1 = gameState.getDangerScenario('danger1');
      this.assert(danger1 !== null, 'Danger 1 should be initialized');
      this.assert(danger1.getLocation() === 'loc2', 'Danger scenario location should be set correctly');
      this.assert(loc2.getDangerScenarios().includes('danger1'), 'Location should have the danger scenario in its danger scenarios array');
      
      // Test that the starting location was set
      this.assert(gameState.getCurrentLocation() !== null, 'Current location should be set');
      
      // Test curriculum coverage stats
      const stats = integrator.getCurriculumCoverageStats();
      this.assert(stats !== null, 'Curriculum coverage stats should be generated');
      this.assert(stats.coveredTopics.includes('Test topic'), 'Curriculum coverage stats should include the test topic');
      
      return this.pass('GameDataIntegrator tests passed');
    } catch (error) {
      return this.fail(`GameDataIntegrator tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the CommandController
   * @returns {Object} Test result
   */
  async testCommandController() {
    try {
      // Create a test game state
      const gameState = new GameState();
      
      // Set up a simple game world
      const loc1 = new Location(
        'loc1',
        'Location 1',
        'Test location 1',
        { north: 'loc2' },
        ['item1'],
        [],
        [],
        []
      );
      
      const loc2 = new Location(
        'loc2',
        'Location 2',
        'Test location 2',
        { south: 'loc1' },
        [],
        [],
        [],
        []
      );
      
      const item1 = new Item(
        'item1',
        'Item 1',
        'Test item 1',
        'loc1',
        true,
        'You use Item 1.'
      );
      
      gameState.addLocation(loc1);
      gameState.addLocation(loc2);
      gameState.addItem(item1);
      gameState.setCurrentLocation('loc1');
      
      // Create a CommandController
      const parser = new Parser();
      const commandController = new CommandController(parser);
      commandController.setGameState(gameState);
      
      // Test 'look' command
      let result = commandController.processCommand('look');
      this.assert(result.message.includes('Location 1'), 'Look command should describe the current location');
      
      // Test 'go' command
      result = commandController.processCommand('go north');
      this.assert(result.locationChanged === true, 'Go command should change location');
      this.assert(gameState.getCurrentLocation() === 'loc2', 'Current location should be updated after go command');
      
      // Test invalid direction
      result = commandController.processCommand('go west');
      this.assert(result.message.includes('go in that direction'), 'Invalid direction should be handled');
      
      // Test 'take' command
      gameState.setCurrentLocation('loc1');
      result = commandController.processCommand('take item1');
      this.assert(gameState.hasInInventory('item1'), 'Item should be added to inventory after take command');
      this.assert(!loc1.getItems().includes('item1'), 'Item should be removed from location after take command');
      
      // Test 'inventory' command
      result = commandController.processCommand('inventory');
      this.assert(result.message.includes('Item 1'), 'Inventory command should list items');
      
      // Test 'drop' command
      result = commandController.processCommand('drop item1');
      this.assert(!gameState.hasInInventory('item1'), 'Item should be removed from inventory after drop command');
      this.assert(loc1.getItems().includes('item1'), 'Item should be added to location after drop command');
      
      // Test 'examine' command
      result = commandController.processCommand('examine item1');
      this.assert(result.message.includes('Test item 1'), 'Examine command should show item description');
      
      // Test 'use' command
      gameState.addToInventory('item1');
      result = commandController.processCommand('use item1');
      this.assert(result.message.includes('You use Item 1'), 'Use command should show item use text');
      
      // Test 'help' command
      result = commandController.processCommand('help');
      this.assert(result.message.includes('Available commands'), 'Help command should list available commands');
      
      return this.pass('CommandController tests passed');
    } catch (error) {
      return this.fail(`CommandController tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the UIController
   * @returns {Object} Test result
   */
  async testUIController() {
    try {
      // Create a mock terminal element
      document.body.innerHTML = `
        <div id="terminal"></div>
        <div id="inventory"></div>
        <div id="stats"></div>
      `;
      
      // Create a UIController
      const uiController = new UIController();
      
      // Test displaying messages
      uiController.displayMessage('Test message');
      const terminal = document.getElementById('terminal');
      this.assert(terminal.innerHTML.includes('Test message'), 'Message should be displayed in terminal');
      
      // Test displaying errors
      uiController.displayError('Test error');
      this.assert(terminal.innerHTML.includes('Test error'), 'Error should be displayed in terminal');
      this.assert(terminal.innerHTML.includes('class="error"'), 'Error should have error class');
      
      // Test displaying location
      const location = new Location(
        'test_loc',
        'Test Location',
        'This is a test location',
        {},
        [],
        [],
        [],
        []
      );
      uiController.displayLocation(location);
      this.assert(terminal.innerHTML.includes('Test Location'), 'Location name should be displayed');
      this.assert(terminal.innerHTML.includes('This is a test location'), 'Location description should be displayed');
      
      // Test updating inventory
      uiController.updateInventory(['item1', 'item2']);
      const inventory = document.getElementById('inventory');
      this.assert(inventory.innerHTML.includes('item1'), 'Inventory should display items');
      this.assert(inventory.innerHTML.includes('item2'), 'Inventory should display all items');
      
      // Test updating stats
      uiController.updateStats({
        health: 80,
        score: 50,
        moves: 10
      });
      const stats = document.getElementById('stats');
      this.assert(stats.innerHTML.includes('Health: 80'), 'Stats should display health');
      this.assert(stats.innerHTML.includes('Score: 50'), 'Stats should display score');
      this.assert(stats.innerHTML.includes('Moves: 10'), 'Stats should display moves');
      
      return this.pass('UIController tests passed');
    } catch (error) {
      return this.fail(`UIController tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the SaveLoadController
   * @returns {Object} Test result
   */
  async testSaveLoadController() {
    try {
      // Create a test game state
      const gameState = new GameState();
      
      // Set up a simple game world
      gameState.setCurrentLocation('loc1');
      gameState.addToInventory('item1');
      gameState.increaseScore(50);
      gameState.decreaseHealth(20);
      gameState.incrementMoves();
      
      // Create a SaveLoadController
      const storageManager = new StorageManager();
      const saveLoadController = new SaveLoadController(storageManager);
      saveLoadController.setGameState(gameState);
      
      // Test saving game
      const saveData = saveLoadController.saveGame();
      this.assert(saveData !== null, 'Save data should not be null');
      this.assert(typeof saveData === 'object', 'Save data should be an object');
      this.assert(saveData.currentLocation === 'loc1', 'Save data should include current location');
      this.assert(saveData.inventory.includes('item1'), 'Save data should include inventory');
      this.assert(saveData.score === 50, 'Save data should include score');
      this.assert(saveData.health === 80, 'Save data should include health');
      this.assert(saveData.moves === 1, 'Save data should include moves');
      
      // Test loading game
      // First, change the game state
      gameState.setCurrentLocation('loc2');
      gameState.removeFromInventory('item1');
      gameState.increaseScore(25);
      
      // Then load the saved data
      const loadResult = saveLoadController.loadGame(saveData);
      this.assert(loadResult === true, 'Load game should return true on success');
      this.assert(gameState.getCurrentLocation() === 'loc1', 'Current location should be restored');
      this.assert(gameState.hasInInventory('item1'), 'Inventory should be restored');
      this.assert(gameState.getScore() === 50, 'Score should be restored');
      this.assert(gameState.getHealth() === 80, 'Health should be restored');
      this.assert(gameState.getMoves() === 1, 'Moves should be restored');
      
      return this.pass('SaveLoadController tests passed');
    } catch (error) {
      return this.fail(`SaveLoadController tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the GameController
   * @returns {Object} Test result
   */
  async testGameController() {
    try {
      // Create a mock DOM
      document.body.innerHTML = `
        <div id="terminal"></div>
        <div id="inventory"></div>
        <div id="stats"></div>
        <input id="commandInput" type="text">
        <button id="submitCommand">Submit</button>
        <button id="saveGame">Save</button>
        <button id="loadGame">Load</button>
        <input id="fileInput" type="file" style="display: none;">
      `;
      
      // Create a GameController
      const gameController = new GameController();
      
      // Test initialization
      await gameController.initialize();
      this.assert(gameController.gameEngine !== null, 'Game engine should be initialized');
      
      // Test command submission
      // We can't fully test this without a complete game setup, but we can check that the method exists
      this.assert(typeof gameController.submitCommand === 'function', 'submitCommand method should exist');
      
      // Test save and load methods
      this.assert(typeof gameController.saveGame === 'function', 'saveGame method should exist');
      this.assert(typeof gameController.loadGame === 'function', 'loadGame method should exist');
      
      return this.pass('GameController tests passed');
    } catch (error) {
      return this.fail(`GameController tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the GameEngine
   * @returns {Object} Test result
   */
  async testGameEngine() {
    try {
      // Create mock controllers
      const commandController = {
        setGameState: function() {},
        processCommand: function() { return { message: 'Command processed' }; }
      };
      
      const uiController = {
        displayMessage: function() {},
        displayError: function() {},
        displayLocation: function() {},
        updateInventory: function() {},
        updateStats: function() {}
      };
      
      const saveLoadController = {
        setGameState: function() {},
        saveGame: function() { return {}; },
        loadGame: function() { return true; }
      };
      
      // Create a GameEngine
      const gameEngine = new GameEngine(commandController, uiController, saveLoadController);
      
      // Test that the game engine was created
      this.assert(gameEngine !== null, 'Game engine should be created');
      this.assert(gameEngine.gameState !== null, 'Game state should be initialized');
      
      // We can't fully test initialization without the data files, but we can check that the method exists
      this.assert(typeof gameEngine.initialize === 'function', 'initialize method should exist');
      
      // Test command processing method
      this.assert(typeof gameEngine.processCommand === 'function', 'processCommand method should exist');
      
      // Test save and load methods
      this.assert(typeof gameEngine.saveGame === 'function', 'saveGame method should exist');
      this.assert(typeof gameEngine.loadGame === 'function', 'loadGame method should exist');
      
      return this.pass('GameEngine tests passed');
    } catch (error) {
      return this.fail(`GameEngine tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the game flow
   * @returns {Object} Test result
   */
  async testGameFlow() {
    // This is a more complex integration test that would require a full game setup
    // We'll provide a simplified version
    try {
      // Create a test game state
      const gameState = new GameState();
      
      // Set up a simple game world
      const loc1 = new Location(
        'loc1',
        'Location 1',
        'Test location 1',
        { north: 'loc2' },
        ['item1'],
        [],
        [],
        []
      );
      
      const loc2 = new Location(
        'loc2',
        'Location 2',
        'Test location 2',
        { south: 'loc1' },
        [],
        ['npc1'],
        [],
        []
      );
      
      const item1 = new Item(
        'item1',
        'Item 1',
        'Test item 1',
        'loc1',
        true,
        'You use Item 1.'
      );
      
      const npc1 = new NPC(
        'npc1',
        'NPC 1',
        'loc2',
        'Hello, I am a test NPC.',
        ['Quiz 1'],
        [
          {
            topic: 'Quiz 1',
            introduction: 'This is quiz 1',
            questions: [
              {
                question: 'Test question?',
                options: ['A', 'B', 'C', 'D'],
                correct_answer: 1,
                explanation: 'B is correct'
              }
            ],
            success_response: 'Good job!',
            failure_response: 'Try again!'
          }
        ]
      );
      
      gameState.addLocation(loc1);
      gameState.addLocation(loc2);
      gameState.addItem(item1);
      gameState.addNPC(npc1);
      gameState.setCurrentLocation('loc1');
      
      // Create controllers
      const parser = new Parser();
      const commandController = new CommandController(parser);
      commandController.setGameState(gameState);
      
      // Test a sequence of commands to simulate game flow
      
      // Look around
      let result = commandController.processCommand('look');
      this.assert(result.message.includes('Location 1'), 'Look command should describe the current location');
      
      // Take the item
      result = commandController.processCommand('take item1');
      this.assert(gameState.hasInInventory('item1'), 'Item should be added to inventory');
      
      // Move to the next location
      result = commandController.processCommand('go north');
      this.assert(gameState.getCurrentLocation() === 'loc2', 'Current location should be updated');
      
      // Talk to the NPC
      result = commandController.processCommand('talk to npc1');
      this.assert(result.npcInteraction === true, 'NPC interaction should be triggered');
      this.assert(result.npcId === 'npc1', 'Correct NPC ID should be returned');
      
      // Return to the first location
      result = commandController.processCommand('go south');
      this.assert(gameState.getCurrentLocation() === 'loc1', 'Current location should be updated');
      
      // Drop the item
      result = commandController.processCommand('drop item1');
      this.assert(!gameState.hasInInventory('item1'), 'Item should be removed from inventory');
      this.assert(loc1.getItems().includes('item1'), 'Item should be added to location');
      
      return this.pass('Game flow tests passed');
    } catch (error) {
      return this.fail(`Game flow tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the location data
   * @returns {Object} Test result
   */
  async testLocationData() {
    // This test requires the actual data files to be loaded
    if (typeof locationData === 'undefined') {
      return this.skip('Location data not available, skipping test');
    }
    
    try {
      // Check that location data exists and has the expected structure
      this.assert(typeof locationData === 'object', 'Location data should be an object');
      this.assert(Object.keys(locationData).length > 0, 'Location data should not be empty');
      
      // Check a few key locations
      this.assert(locationData.central_hub !== undefined, 'Central Hub location should exist');
      this.assert(locationData.central_hub.name === 'Central Hub', 'Central Hub should have the correct name');
      this.assert(locationData.central_hub.description !== undefined, 'Location should have a description');
      this.assert(locationData.central_hub.exits !== undefined, 'Location should have exits');
      
      // Check that all locations have the required properties
      for (const locationId in locationData) {
        const location = locationData[locationId];
        this.assert(location.id !== undefined, `Location ${locationId} should have an ID`);
        this.assert(location.name !== undefined, `Location ${locationId} should have a name`);
        this.assert(location.description !== undefined, `Location ${locationId} should have a description`);
        
        // Check that all exits point to valid locations
        if (location.exits) {
          for (const direction in location.exits) {
            const targetLocationId = location.exits[direction];
            this.assert(locationData[targetLocationId] !== undefined, 
              `Exit ${direction} from ${locationId} points to non-existent location ${targetLocationId}`);
          }
        }
      }
      
      return this.pass('Location data tests passed');
    } catch (error) {
      return this.fail(`Location data tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the item data
   * @returns {Object} Test result
   */
  async testItemData() {
    // This test requires the actual data files to be loaded
    if (typeof itemData === 'undefined') {
      return this.skip('Item data not available, skipping test');
    }
    
    try {
      // Check that item data exists and has the expected structure
      this.assert(typeof itemData === 'object', 'Item data should be an object');
      this.assert(Object.keys(itemData).length > 0, 'Item data should not be empty');
      
      // Check that all items have the required properties
      for (const itemId in itemData) {
        const item = itemData[itemId];
        this.assert(item.id !== undefined, `Item ${itemId} should have an ID`);
        this.assert(item.name !== undefined, `Item ${itemId} should have a name`);
        this.assert(item.description !== undefined, `Item ${itemId} should have a description`);
        this.assert(item.location !== undefined, `Item ${itemId} should have a location`);
        
        // Check that the location exists (if locationData is available)
        if (typeof locationData !== 'undefined') {
          this.assert(locationData[item.location] !== undefined, 
            `Item ${itemId} is in non-existent location ${item.location}`);
        }
      }
      
      return this.pass('Item data tests passed');
    } catch (error) {
      return this.fail(`Item data tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the NPC data
   * @returns {Object} Test result
   */
  async testNPCData() {
    // This test requires the actual data files to be loaded
    if (typeof npcData === 'undefined') {
      return this.skip('NPC data not available, skipping test');
    }
    
    try {
      // Check that NPC data exists and has the expected structure
      this.assert(typeof npcData === 'object', 'NPC data should be an object');
      this.assert(Object.keys(npcData).length > 0, 'NPC data should not be empty');
      
      // Check that all NPCs have the required properties
      for (const npcId in npcData) {
        const npc = npcData[npcId];
        this.assert(npc.npc_id !== undefined, `NPC ${npcId} should have an ID`);
        this.assert(npc.name !== undefined, `NPC ${npcId} should have a name`);
        this.assert(npc.location !== undefined, `NPC ${npcId} should have a location`);
        this.assert(npc.introduction !== undefined, `NPC ${npcId} should have an introduction`);
        this.assert(npc.quiz_options !== undefined, `NPC ${npcId} should have quiz options`);
        this.assert(npc.quizzes !== undefined, `NPC ${npcId} should have quizzes`);
        
        // Check that the location exists (if locationData is available)
        if (typeof locationData !== 'undefined') {
          this.assert(locationData[npc.location] !== undefined, 
            `NPC ${npcId} is in non-existent location ${npc.location}`);
        }
        
        // Check that all quizzes have the required properties
        for (const quiz of npc.quizzes) {
          this.assert(quiz.topic !== undefined, `Quiz in NPC ${npcId} should have a topic`);
          this.assert(quiz.introduction !== undefined, `Quiz in NPC ${npcId} should have an introduction`);
          this.assert(quiz.questions !== undefined, `Quiz in NPC ${npcId} should have questions`);
          this.assert(quiz.success_response !== undefined, `Quiz in NPC ${npcId} should have a success response`);
          this.assert(quiz.failure_response !== undefined, `Quiz in NPC ${npcId} should have a failure response`);
          
          // Check that all questions have the required properties
          for (const question of quiz.questions) {
            this.assert(question.question !== undefined, `Question in NPC ${npcId} quiz should have a question text`);
            this.assert(question.options !== undefined, `Question in NPC ${npcId} quiz should have options`);
            this.assert(question.correct_answer !== undefined, `Question in NPC ${npcId} quiz should have a correct answer`);
            this.assert(question.explanation !== undefined, `Question in NPC ${npcId} quiz should have an explanation`);
            
            // Check that the correct answer is valid
            this.assert(question.correct_answer >= 0 && question.correct_answer < question.options.length, 
              `Correct answer index in NPC ${npcId} quiz is out of bounds`);
          }
        }
      }
      
      return this.pass('NPC data tests passed');
    } catch (error) {
      return this.fail(`NPC data tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the challenge data
   * @returns {Object} Test result
   */
  async testChallengeData() {
    // This test requires the actual data files to be loaded
    if (typeof challengeData === 'undefined') {
      return this.skip('Challenge data not available, skipping test');
    }
    
    try {
      // Check that challenge data exists and has the expected structure
      this.assert(typeof challengeData === 'object', 'Challenge data should be an object');
      this.assert(Object.keys(challengeData).length > 0, 'Challenge data should not be empty');
      
      // Check that all challenges have the required properties
      for (const challengeId in challengeData) {
        const challenge = challengeData[challengeId];
        this.assert(challenge.id !== undefined, `Challenge ${challengeId} should have an ID`);
        this.assert(challenge.title !== undefined, `Challenge ${challengeId} should have a title`);
        this.assert(challenge.description !== undefined, `Challenge ${challengeId} should have a description`);
        this.assert(challenge.location !== undefined, `Challenge ${challengeId} should have a location`);
        this.assert(challenge.challenge_text !== undefined, `Challenge ${challengeId} should have challenge text`);
        this.assert(challenge.solution_type !== undefined, `Challenge ${challengeId} should have a solution type`);
        this.assert(challenge.correct_answer !== undefined, `Challenge ${challengeId} should have a correct answer`);
        this.assert(challenge.success_text !== undefined, `Challenge ${challengeId} should have success text`);
        this.assert(challenge.failure_text !== undefined, `Challenge ${challengeId} should have failure text`);
        this.assert(challenge.educational_content !== undefined, `Challenge ${challengeId} should have educational content`);
        this.assert(challenge.curriculum_topic !== undefined, `Challenge ${challengeId} should have a curriculum topic`);
        
        // Check that the location exists (if locationData is available)
        if (typeof locationData !== 'undefined') {
          this.assert(locationData[challenge.location] !== undefined, 
            `Challenge ${challengeId} is in non-existent location ${challenge.location}`);
        }
        
        // Check that multiple choice challenges have options
        if (challenge.solution_type === 'multiple_choice') {
          this.assert(challenge.options !== undefined, `Multiple choice challenge ${challengeId} should have options`);
          this.assert(Array.isArray(challenge.options), `Challenge ${challengeId} options should be an array`);
          this.assert(challenge.options.length > 0, `Challenge ${challengeId} should have at least one option`);
          
          // Check that the correct answer is valid
          this.assert(challenge.correct_answer >= 0 && challenge.correct_answer < challenge.options.length, 
            `Correct answer index in challenge ${challengeId} is out of bounds`);
        }
      }
      
      return this.pass('Challenge data tests passed');
    } catch (error) {
      return this.fail(`Challenge data tests failed: ${error.message}`);
    }
  }

  /**
   * Tests the danger scenario data
   * @returns {Object} Test result
   */
  async testDangerScenarioData() {
    // This test requires the actual data files to be loaded
    if (typeof dangerScenarioData === 'undefined') {
      return this.skip('Danger scenario data not available, skipping test');
    }
    
    try {
      // Check that danger scenario data exists and has the expected structure
      this.assert(typeof dangerScenarioData === 'object', 'Danger scenario data should be an object');
      this.assert(Object.keys(dangerScenarioData).length > 0, 'Danger scenario data should not be empty');
      
      // Check that all danger scenarios have the required properties
      for (const scenarioId in dangerScenarioData) {
        const scenario = dangerScenarioData[scenarioId];
        this.assert(scenario.id !== undefined, `Danger scenario ${scenarioId} should have an ID`);
        this.assert(scenario.title !== undefined, `Danger scenario ${scenarioId} should have a title`);
        this.assert(scenario.description !== undefined, `Danger scenario ${scenarioId} should have a description`);
        this.assert(scenario.location !== undefined, `Danger scenario ${scenarioId} should have a location`);
        this.assert(scenario.trigger_text !== undefined, `Danger scenario ${scenarioId} should have trigger text`);
        this.assert(scenario.solution_type !== undefined, `Danger scenario ${scenarioId} should have a solution type`);
        this.assert(scenario.correct_answer !== undefined, `Danger scenario ${scenarioId} should have a correct answer`);
        this.assert(scenario.success_text !== undefined, `Danger scenario ${scenarioId} should have success text`);
        this.assert(scenario.failure_text !== undefined, `Danger scenario ${scenarioId} should have failure text`);
        this.assert(scenario.educational_content !== undefined, `Danger scenario ${scenarioId} should have educational content`);
        this.assert(scenario.curriculum_topic !== undefined, `Danger scenario ${scenarioId} should have a curriculum topic`);
        this.assert(scenario.is_lethal !== undefined, `Danger scenario ${scenarioId} should specify if it's lethal`);
        
        // Check that the location exists (if locationData is available)
        if (typeof locationData !== 'undefined') {
          this.assert(locationData[scenario.location] !== undefined, 
            `Danger scenario ${scenarioId} is in non-existent location ${scenario.location}`);
        }
        
        // Check that multiple choice scenarios have options
        if (scenario.solution_type === 'multiple_choice') {
          this.assert(scenario.options !== undefined, `Multiple choice danger scenario ${scenarioId} should have options`);
          this.assert(Array.isArray(scenario.options), `Danger scenario ${scenarioId} options should be an array`);
          this.assert(scenario.options.length > 0, `Danger scenario ${scenarioId} should have at least one option`);
          
          // Check that the correct answer is valid
          this.assert(scenario.correct_answer >= 0 && scenario.correct_answer < scenario.options.length, 
            `Correct answer index in danger scenario ${scenarioId} is out of bounds`);
        }
      }
      
      return this.pass('Danger scenario data tests passed');
    } catch (error) {
      return this.fail(`Danger scenario data tests failed: ${error.message}`);
    }
  }
}

// Export the TestSuite class
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TestSuite;
}
