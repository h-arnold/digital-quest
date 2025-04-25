/**
 * danger_scenarios.js - Data file for dangerous scenarios
 * 
 * This file contains all the danger scenario data for the GCSE Digital Technology
 * text adventure game, including humorous Monty Python/Terry Pratchett-esque
 * consequences and educational content.
 */

const dangerScenarioData = {
  "binary_black_hole": {
    "id": "binary_black_hole",
    "location": "digital_heights",
    "title": "The Binary Black Hole",
    "description": "A swirling vortex of ones and zeros that seems to be pulling everything toward its center.",
    "trigger_text": "As you approach the swirling binary vortex, it suddenly expands! Binary digits fly around you like angry bees, and you feel yourself being pulled toward the center. 'HALT!' booms a voice. 'Only those who understand binary can pass safely. Convert the decimal number 42 to binary or be compressed into a single bit!'",
    "solution_type": "text_input",
    "correct_answer": "101010",
    "success_text": "The voice sounds impressed. 'Correct! 42 is indeed 101010 in binary.' The swirling vortex calms and forms a stable bridge of alternating ones and zeros. 'You may pass, digital scholar. Your bits shall remain uncompressed... THIS time.'",
    "failure_text": "The voice sighs dramatically. 'INCORRECT! 42 in binary is 101010. Your understanding is as incomplete as a program missing its semicolons!' The binary vortex suddenly contracts, pulling you in with irresistible force. You experience the strange sensation of being compressed into smaller and smaller spaces until you're nothing but a single bit. Eventually, the system administrator finds you and restores you from backup, but you've lost some progress.",
    "educational_content": "Binary (base-2) is the fundamental language of computing, using only 0s and 1s. To convert decimal to binary, divide by 2 repeatedly and record the remainders from bottom to top. For 42: 42÷2=21 remainder 0, 21÷2=10 remainder 1, 10÷2=5 remainder 0, 5÷2=2 remainder 1, 2÷2=1 remainder 0, 1÷2=0 remainder 1. Reading from bottom to top: 101010.",
    "curriculum_topic": "Data representation - binary numbers",
    "is_lethal": true
  },
  "bureaucratic_black_hole": {
    "id": "bureaucratic_black_hole",
    "location": "ethics_embassy",
    "title": "The Bureaucratic Black Hole",
    "description": "A massive pile of forms, regulations, and red tape that seems to be growing by itself.",
    "trigger_text": "As you examine the towering stack of paperwork, a form suddenly flies out and wraps itself around your wrist. More forms follow, trying to entangle you in red tape! A bureaucratic voice drones: 'Form DP-42: Request for Freedom from Data Protection Paperwork. To escape, identify which of the following is NOT a key principle of GDPR data protection.'",
    "solution_type": "multiple_choice",
    "options": [
      "Lawfulness, fairness, and transparency",
      "Purpose limitation",
      "Mandatory data collection",
      "Accountability"
    ],
    "correct_answer": 2,
    "success_text": "The bureaucratic voice sounds disappointed. 'Correct. Mandatory data collection is NOT a GDPR principle. In fact, it contradicts the principles of data minimization and purpose limitation.' The forms reluctantly release you and return to their pile, muttering about 'the good old days when we could collect whatever we wanted.'",
    "failure_text": "The bureaucratic voice cackles with delight. 'INCORRECT! Mandatory data collection is NOT a GDPR principle! Now you must fill out ALL THE FORMS!' The paperwork swarms you like a paper avalanche. For what seems like eternity, you're trapped in an endless cycle of filling forms in triplicate, only to be told you've used the wrong color ink. By the time you escape, you've aged considerably and lost valuable time.",
    "educational_content": "The General Data Protection Regulation (GDPR) is based on seven key principles: 1) Lawfulness, fairness, and transparency, 2) Purpose limitation (specific, explicit purposes), 3) Data minimization (only what's necessary), 4) Accuracy, 5) Storage limitation (not kept longer than needed), 6) Integrity and confidentiality (security), and 7) Accountability. Mandatory data collection would violate several of these principles, particularly data minimization and purpose limitation.",
    "curriculum_topic": "Security - data protection",
    "is_lethal": true
  },
  "spam_tsunami": {
    "id": "spam_tsunami",
    "location": "message_marketplace",
    "title": "The Spam Tsunami",
    "description": "A massive wave of spam emails, pop-ups, and suspicious attachments building on the horizon.",
    "trigger_text": "The ground begins to rumble as a towering wave of spam messages rises on the horizon! 'YOUR ATTENTION PLEASE,' blares an announcement. 'A SPAM TSUNAMI APPROACHES! Identify the message most likely to be a phishing attempt to avoid being swept away!'",
    "solution_type": "multiple_choice",
    "options": [
      "A newsletter you subscribed to last week",
      "A receipt for an online purchase you recently made",
      "An urgent message about your account being compromised, requiring immediate verification via the included link",
      "A personal email from a colleague with an expected attachment discussed earlier"
    ],
    "correct_answer": 2,
    "success_text": "A shield of digital awareness forms around you! 'Correct! The urgent message with a verification link is a classic phishing attempt using urgency to bypass your critical thinking.' The spam tsunami crashes against your shield and parts around you, leaving you dry and safe as countless spam messages wash past.",
    "failure_text": "The spam tsunami crashes over you before you can react! You're swept up in a churning mess of Nigerian prince schemes, miracle weight loss offers, and fake inheritance notifications. Popup windows multiply faster than you can close them, each one spawning two more in a Hydra-like fashion. Your system is completely overwhelmed, and by the time the spam filter finally rescues you, you've lost valuable time and resources.",
    "educational_content": "Phishing attempts try to trick users into revealing sensitive information by masquerading as legitimate entities. Key warning signs include: creating artificial urgency, requesting sensitive information, suspicious sender addresses, suspicious links, poor grammar/spelling, generic greetings, and requests that bypass normal security procedures. The message in option C shows classic phishing characteristics: creating urgency and requesting you to click a verification link, which would likely lead to a fake website designed to steal your credentials.",
    "curriculum_topic": "Security - phishing",
    "is_lethal": true
  },
  "cloud_condensation_catastrophe": {
    "id": "cloud_condensation_catastrophe",
    "location": "cloud_kingdom",
    "title": "The Cloud Condensation Catastrophe",
    "description": "Ominous storm clouds forming above the cloud storage facilities.",
    "trigger_text": "As you attempt to delete some cloud data, the sky darkens dramatically! The cloud storage is condensing into actual storm clouds! A meteorological voice thunders: 'FOOL! You can't just delete cloud data without understanding its nature! Quick, which statement about cloud computing is FALSE before this storm breaks!'",
    "solution_type": "multiple_choice",
    "options": [
      "Cloud computing provides on-demand self-service resources",
      "Cloud storage physically stores your data in actual clouds in the sky",
      "Cloud computing enables resource pooling across multiple customers",
      "Cloud services often use a measured service payment model"
    ],
    "correct_answer": 1,
    "success_text": "The meteorological voice calms. 'Correct! Cloud computing has nothing to do with actual meteorological clouds - it's just a metaphor for remote computing resources accessed via the internet.' The storm clouds dissipate, returning to their proper digital form.",
    "failure_text": "The meteorological voice roars with laughter. 'WRONG! Cloud computing has NOTHING to do with actual clouds in the sky!' The storm breaks with biblical intensity. Digital rain pours down - not gentle zeros and ones, but massive binary digits that crash around you like hailstones. Lightning bolts of pure data strike nearby, formatting everything they touch back to factory settings. You're completely drenched in redundant code and temporary files before you manage to escape.",
    "educational_content": "Cloud computing is a metaphor for on-demand access to computing resources (servers, storage, databases, networking, software) over the internet ('the cloud'), with five essential characteristics: 1) On-demand self-service, 2) Broad network access, 3) Resource pooling, 4) Rapid elasticity, and 5) Measured service. Despite the name, cloud computing has nothing to do with meteorological clouds - the term refers to the cloud symbol often used in network diagrams to represent the internet.",
    "curriculum_topic": "Systems - cloud computing",
    "is_lethal": true
  },
  "infinite_recursion_loop": {
    "id": "infinite_recursion_loop",
    "location": "process_management_platform",
    "title": "The Infinite Recursion Loop",
    "description": "A strange program that keeps calling itself, creating copies that create more copies.",
    "trigger_text": "You accidentally trigger a recursive function without a base case! The function calls itself, which calls itself, which calls itself... Copies of the function multiply around you like a hall of mirrors! A desperate system voice cries out: 'STACK OVERFLOW IMMINENT! Quick, what must be added to prevent infinite recursion?'",
    "solution_type": "multiple_choice",
    "options": [
      "More recursive calls",
      "A base case that stops recursion when a condition is met",
      "Additional parameters",
      "Print statements"
    ],
    "correct_answer": 1,
    "success_text": "The system voice sighs with relief. 'Correct! A base case provides the essential termination condition for recursion.' The recursive copies begin to resolve, each one returning to its caller until only the original remains, which completes normally.",
    "failure_text": "The system voice wails in despair. 'INCORRECT! Without a base case, recursion continues infinitely!' The recursive copies multiply exponentially until they fill all available memory. The stack overflows spectacularly, creating a recursive fractal pattern that pulls you in. You experience the strange sensation of calling yourself, who calls yourself, who calls yourself... By the time the system recovers and pulls you out, you've lost significant progress and find yourself back at the entrance.",
    "educational_content": "Recursion is when a function calls itself. While powerful, recursive functions must have a base case (a condition where the function stops calling itself) to prevent infinite recursion, which consumes memory until the system crashes with a 'stack overflow' error. Proper recursion design includes: 1) A base case to terminate recursion, 2) A recursive case that moves toward the base case, and 3) Proper parameter management. Common examples include factorial calculations, tree traversals, and divide-and-conquer algorithms.",
    "curriculum_topic": "Programming concepts - recursion",
    "is_lethal": true
  },
  "logic_gate_labyrinth": {
    "id": "logic_gate_labyrinth",
    "location": "hardware_harbor",
    "title": "The Logic Gate Labyrinth",
    "description": "A maze where the paths are formed by interconnected logic gates that rearrange themselves.",
    "trigger_text": "The logic gates around you suddenly activate and rearrange into a complex labyrinth! The paths shift based on logical operations, and you're trapped inside! A robotic voice announces: 'LOGIC MAZE ACTIVATED. To escape, determine the output of this circuit: If input A=1 and input B=0, what is the output of an XOR gate?'",
    "solution_type": "multiple_choice",
    "options": ["0", "1", "Error", "Both 0 and 1"],
    "correct_answer": 1,
    "success_text": "The robotic voice confirms: 'CORRECT. XOR (exclusive OR) outputs 1 when inputs are different.' The logic gates rearrange themselves to form a clear path to the exit, with the XOR gates helpfully lighting up to guide your way.",
    "failure_text": "The robotic voice buzzes: 'INCORRECT. XOR (exclusive OR) outputs 1 when inputs are different.' The logic gates rearrange into an even more complex configuration! You wander for what seems like hours through AND gates, OR gates, and NOT gates that keep changing the paths. Every time you think you've found the exit, a NAND gate reverses your progress. Eventually, a passing system administrator takes pity on you and provides a logic analyzer to help you escape, but you've lost valuable time.",
    "educational_content": "Logic gates are the fundamental building blocks of digital circuits. An XOR (exclusive OR) gate outputs 1 only when its inputs are different (one is 0 and one is 1), and outputs 0 when inputs are the same (both 0 or both 1). This differs from a regular OR gate, which outputs 1 if any input is 1. Other basic gates include AND (outputs 1 only when all inputs are 1), NOT (inverts the input), NAND (NOT-AND), and NOR (NOT-OR).",
    "curriculum_topic": "Hardware - logic gates",
    "is_lethal": true
  },
  "version_control_vortex": {
    "id": "version_control_vortex",
    "location": "development_cycle_circuit",
    "title": "The Version Control Vortex",
    "description": "A swirling vortex of code branches, merges, and commits that seems unstable.",
    "trigger_text": "You've stumbled into a massive merge conflict! Different versions of the code swirl around you like a tornado, with incompatible changes creating a dangerous vortex! A desperate developer's voice calls out: 'Help! We tried to merge without checking the changes! What's the best way to resolve this merge conflict?'",
    "solution_type": "multiple_choice",
    "options": [
      "Delete all the code and start over",
      "Always keep your own changes and discard others",
      "Carefully examine both versions and manually combine the changes appropriately",
      "Merge random pieces from each version"
    ],
    "correct_answer": 2,
    "success_text": "The developer's voice sounds relieved. 'Correct! Careful examination and appropriate combination is the proper way to resolve merge conflicts.' The code versions stop swirling and begin to align properly, with conflict markers appearing to help you identify and resolve the differences.",
    "failure_text": "The developer's voice cries out in horror. 'NO! That's not how you resolve conflicts!' The version control vortex intensifies, pulling in more and more code branches. You're caught in a nightmarish cycle of failed auto-merges, with git conflict markers (<<<<<<< HEAD, =======, >>>>>>> branch) wrapping around you like digital tentacles. Incompatible code changes collide with explosive force, and you're tossed about in the vortex until a senior developer finally runs 'git merge --abort' and rescues you.",
    "educational_content": "Merge conflicts occur in version control when different developers make conflicting changes to the same part of a file. Resolving conflicts requires careful examination of both changes to determine the correct combination. Modern version control systems like Git mark conflicts with special markers (<<<<<<< HEAD, =======, >>>>>>> branch) to help identify the conflicting sections. Proper conflict resolution preserves important changes from both versions while ensuring the code remains functional and consistent.",
    "curriculum_topic": "Development - version control",
    "is_lethal": true
  },
  "network_protocol_pandemonium": {
    "id": "network_protocol_pandemonium",
    "location": "network_node",
    "title": "The Network Protocol Pandemonium",
    "description": "A chaotic tangle of network cables and protocols fighting with each other.",
    "trigger_text": "The network suddenly goes haywire! Protocols are routing packets randomly, TCP handshakes are failing, and DNS is resolving everything to random addresses! A network administrator's voice crackles through the chaos: 'The protocols are fighting! Quick, which protocol translates domain names to IP addresses? Answer correctly before the network completely collapses!'",
    "solution_type": "multiple_choice",
    "options": ["HTTP", "FTP", "DNS", "SMTP"],
    "correct_answer": 2,
    "success_text": "The network administrator sounds relieved. 'Correct! DNS (Domain Name System) handles the translation of domain names to IP addresses.' The protocols begin to calm down and return to their proper functions, with DNS proudly directing traffic to the correct addresses.",
    "failure_text": "The network administrator groans. 'WRONG! It's DNS! Domain Name System!' The network chaos intensifies to spectacular levels. You're bombarded with misrouted packets from all over the internet. One moment you're receiving someone's private email, the next you're getting fragments of a cat video, then a partial bank statement. HTTP requests return random webpages, making navigation impossible. You're completely lost in the network until the administrator performs a full system restart, but you've lost valuable time and data.",
    "educational_content": "The Domain Name System (DNS) is a critical internet protocol that translates human-readable domain names (like www.example.com) to IP addresses (like 93.184.216.34) that computers use to route traffic. Without DNS, users would need to remember numeric IP addresses for every website. Other key protocols include HTTP (web page transfer), FTP (file transfer), SMTP (email sending), POP/IMAP (email retrieval), and TCP/IP (the fundamental communication protocols of the internet).",
    "curriculum_topic": "Networking - protocols",
    "is_lethal": true
  },
  "malware_mutation_mayhem": {
    "id": "malware_mutation_mayhem",
    "location": "threat_theater",
    "title": "The Malware Mutation Mayhem",
    "description": "A containment unit that's failing, with malicious code visibly changing and evolving to escape.",
    "trigger_text": "The malware containment is failing! A particularly dangerous specimen is mutating rapidly, changing its code to evade detection! A security alert blares: 'WARNING! POLYMORPHIC MALWARE BREACH IMMINENT! Identify which type of security software is MOST effective against polymorphic malware!'",
    "solution_type": "multiple_choice",
    "options": [
      "Signature-based detection only",
      "Firewall only",
      "Password manager",
      "Behavioral-based detection"
    ],
    "correct_answer": 3,
    "success_text": "The security system acknowledges: 'CORRECT. Behavioral-based detection identifies malware by its actions rather than its changing code.' The security systems switch to behavioral monitoring, quickly identifying and containing the polymorphic malware despite its attempts to disguise itself.",
    "failure_text": "The security system wails: 'INCORRECT! Signature-based detection alone cannot stop polymorphic threats!' The containment unit shatters as the malware escapes, rapidly infecting all nearby systems. It morphs constantly, changing its signature to evade detection while maintaining its malicious functionality. Your device is infected, with the malware corrupting your data, stealing your credentials, and using your system to spread further. By the time the security team contains the outbreak with proper behavioral detection tools, you've lost significant progress and resources.",
    "educational_content": "Polymorphic malware changes its code with each infection while maintaining its malicious functionality, making it difficult to detect with traditional signature-based methods that look for specific patterns. Behavioral-based detection is more effective against such threats because it identifies malware based on its actions and behaviors rather than its code. Modern security solutions typically combine multiple approaches, including signature detection, behavioral analysis, heuristics, and machine learning to provide comprehensive protection.",
    "curriculum_topic": "Security - malware",
    "is_lethal": true
  },
  "quantum_uncertainty_quagmire": {
    "id": "quantum_uncertainty_quagmire",
    "location": "research_repository",
    "title": "The Quantum Uncertainty Quagmire",
    "description": "A section of the floor that appears to exist in multiple states simultaneously, looking both solid and non-existent.",
    "trigger_text": "You've wandered into a quantum probability field! The floor beneath you exists in a superposition of states - both solid and non-existent simultaneously! A quantum physicist's voice echoes from everywhere and nowhere: 'You're in quantum superposition! To collapse the wave function safely, identify what gives quantum computers their potential advantage for certain problems!'",
    "solution_type": "multiple_choice",
    "options": [
      "They run at higher temperatures than classical computers",
      "They use standard binary bits more efficiently",
      "They can explore multiple solutions simultaneously through superposition",
      "They're simply smaller than classical computers"
    ],
    "correct_answer": 2,
    "success_text": "The quantum physicist sounds impressed. 'Correct! Quantum superposition allows qubits to exist in multiple states simultaneously, enabling quantum computers to explore many solutions in parallel.' The quantum floor stabilizes beneath you, collapsing into a definite, solid state that supports your weight safely.",
    "failure_text": "The quantum physicist sighs. 'I'm afraid that's incorrect. The answer is superposition!' The quantum uncertainty intensifies, with the floor now rapidly shifting between solid and non-existent states. You experience the bizarre sensation of both falling and not falling simultaneously, existing in multiple locations at once. The quantum probability field expands, and you find yourself in a Schrödinger's cat situation - both safe and in danger until someone observes your state. When the quantum field finally collapses, you've lost track of time and location, finding yourself back at the entrance.",
    "educational_content": "Quantum computing leverages quantum mechanical phenomena like superposition (existing in multiple states simultaneously) and entanglement (correlated states between particles). Unlike classical bits (0 or 1), quantum bits (qubits) can exist in superpositions of states, potentially allowing quantum computers to explore multiple solutions in parallel and solve certain problems exponentially faster than classical computers. This is particularly promising for applications like cryptography, drug discovery, and simulating quantum systems.",
    "curriculum_topic": "Technology trends - emerging technologies",
    "is_lethal": true
  }
};
