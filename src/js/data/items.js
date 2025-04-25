/**
 * items.js - Data file for game items
 * 
 * This file contains all the item data for the GCSE Digital Technology
 * text adventure game.
 */

const itemData = {
  "binary_decoder": {
    "id": "binary_decoder",
    "name": "Binary Decoder",
    "description": "A handheld device that translates binary code into decimal, hexadecimal, and ASCII text. Essential for understanding digital data representation.",
    "location": "digital_heights",
    "can_take": true,
    "use_text": "You use the Binary Decoder to translate some nearby binary code. It reveals: '01000111 01000011 01010011 01000101' = 'GCSE' in ASCII."
  },
  "analog_oscilloscope": {
    "id": "analog_oscilloscope",
    "name": "Analog Oscilloscope",
    "description": "A device that visualizes continuous analog signals as waveforms on its screen. It helps demonstrate the difference between analog and digital signals.",
    "location": "analog_valley",
    "can_take": true,
    "use_text": "You use the Analog Oscilloscope to observe the continuous waveforms of analog signals around you. The smooth, uninterrupted curves contrast sharply with the stepped patterns of digital signals."
  },
  "sampling_tool": {
    "id": "sampling_tool",
    "name": "Sampling Tool",
    "description": "A precision instrument that demonstrates how analog signals are converted to digital by taking measurements at regular intervals.",
    "location": "conversion_bridge",
    "can_take": true,
    "use_text": "You use the Sampling Tool on a nearby analog wave. It takes measurements at regular intervals, converting the smooth analog signal into discrete digital values. You can see how higher sampling rates capture more detail from the original signal."
  },
  "storage_analyzer": {
    "id": "storage_analyzer",
    "name": "Storage Analyzer",
    "description": "A compact device that can assess the capacity, speed, and reliability of different storage media. It displays detailed comparisons between storage technologies.",
    "location": "storage_archives",
    "can_take": true,
    "use_text": "You use the Storage Analyzer to compare different storage technologies. It shows how storage capacity has increased exponentially over time, while physical size has decreased dramatically. The analysis reveals trade-offs between speed, capacity, cost, and durability."
  },
  "backup_scheduler": {
    "id": "backup_scheduler",
    "name": "Backup Scheduler",
    "description": "A tool for planning and optimizing data backup strategies. It helps balance frequency, storage requirements, and recovery capabilities.",
    "location": "magnetic_section",
    "can_take": true,
    "use_text": "You use the Backup Scheduler to optimize the backup plan. By implementing a proper incremental backup strategy with occasional full backups, you reduce storage requirements while maintaining good recovery capabilities. The system now runs more efficiently."
  },
  "logic_gate_tester": {
    "id": "logic_gate_tester",
    "name": "Logic Gate Tester",
    "description": "A device that tests and demonstrates the function of different logic gates (AND, OR, NOT, etc.) that form the foundation of digital computing.",
    "location": "hardware_harbor",
    "can_take": true,
    "use_text": "You use the Logic Gate Tester on the malfunctioning section of logic gates. By testing each gate, you discover that an AND gate is producing incorrect output. After replacing it, the data flow returns to normal. The tester displays truth tables for various logic operations."
  },
  "license_analyzer": {
    "id": "license_analyzer",
    "name": "License Analyzer",
    "description": "A tool that scans software licenses and explains their terms in plain language, highlighting differences between proprietary, open source, and other license types.",
    "location": "software_sanctuary",
    "can_take": true,
    "use_text": "You use the License Analyzer on various software licenses. It clearly explains the differences between proprietary licenses (which restrict copying and modification), open source licenses (which allow modification but may require sharing changes), and public domain software (which has no restrictions)."
  },
  "process_debugger": {
    "id": "process_debugger",
    "name": "Process Debugger",
    "description": "A specialized tool for analyzing and debugging running processes. It can identify resource usage, dependencies, and potential issues like infinite loops or deadlocks.",
    "location": "process_management_platform",
    "can_take": true,
    "use_text": "You use the Process Debugger on the strange program. It reveals a recursive function that creates new instances of itself without a proper termination condition - a classic infinite recursion bug. After adding a depth limit to the recursion, the program runs correctly."
  },
  "cloud_optimizer": {
    "id": "cloud_optimizer",
    "name": "Cloud Optimizer",
    "description": "A sophisticated tool for analyzing and optimizing cloud resource allocation. It helps balance performance, availability, and cost for cloud-based applications.",
    "location": "cloud_kingdom",
    "can_take": true,
    "use_text": "You use the Cloud Optimizer on the web application with fluctuating traffic. By implementing auto-scaling rules based on traffic patterns and load metrics, you create a system that efficiently allocates resources - scaling up during peak times and down during quiet periods to save costs."
  },
  "version_control_resolver": {
    "id": "version_control_resolver",
    "name": "Version Control Resolver",
    "description": "A tool for managing complex version control situations, particularly useful for resolving merge conflicts and tracking changes across multiple branches.",
    "location": "development_cycle_circuit",
    "can_take": true,
    "use_text": "You use the Version Control Resolver on the conflicted repository. It helps you identify and resolve merge conflicts by showing exactly what changed in each branch. After carefully merging the changes, the codebase is consistent again, with all features properly integrated."
  },
  "packet_analyzer": {
    "id": "packet_analyzer",
    "name": "Packet Analyzer",
    "description": "A network tool that captures and analyzes data packets, showing their headers, contents, and routing information. Essential for understanding network protocols.",
    "location": "network_node",
    "can_take": true,
    "use_text": "You use the Packet Analyzer to examine network traffic. It reveals the structure of IP packets, showing how they're routed across networks using addresses and protocols. You can see the TCP/IP layers in action, with each layer adding its own header information to the data."
  },
  "phishing_detector": {
    "id": "phishing_detector",
    "name": "Phishing Detector",
    "description": "A security tool that identifies signs of phishing attempts in emails and websites. It highlights suspicious elements like misleading URLs, poor grammar, and urgency tactics.",
    "location": "message_marketplace",
    "can_take": true,
    "use_text": "You use the Phishing Detector on the suspicious email. It immediately flags multiple warning signs: the sender address doesn't match the claimed organization, links point to deceptive URLs, there's an urgent call to action, and the email contains grammar errors. This is definitely a phishing attempt!"
  },
  "content_rights_analyzer": {
    "id": "content_rights_analyzer",
    "name": "Content Rights Analyzer",
    "description": "A legal tool that clarifies ownership and usage rights for digital content. It explains how terms of service and platform policies affect who controls user-generated content.",
    "location": "social_network_square",
    "can_take": true,
    "use_text": "You use the Content Rights Analyzer on the disputed social media content. It examines the platform's terms of service and reveals that while users retain copyright ownership, they've granted the platform a broad license to use, modify, and distribute their content. The analyzer suggests reviewing platform terms before posting sensitive content."
  },
  "source_evaluator": {
    "id": "source_evaluator",
    "name": "Source Evaluator",
    "description": "A critical thinking tool that assesses the reliability of information sources based on factors like expertise, bias, currency, and supporting evidence.",
    "location": "truth_tribunal",
    "can_take": true,
    "use_text": "You use the Source Evaluator on the different information sources. It analyzes each source based on the author's expertise, potential biases, publication date, supporting evidence, and peer review status. The most reliable source turns out to be a recent peer-reviewed research paper by experts in the field, with transparent methodology and minimal conflicts of interest."
  },
  "system_integrator": {
    "id": "system_integrator",
    "name": "System Integrator",
    "description": "A business tool that identifies opportunities to connect disparate systems and streamline data flow between departments. It visualizes current inefficiencies and potential improvements.",
    "location": "efficiency_enclave",
    "can_take": true,
    "use_text": "You use the System Integrator on the struggling business. It identifies several disconnected systems creating data silos and redundant work. By implementing proper integration between the CRM, inventory, and accounting systems, data can flow seamlessly between departments, eliminating manual re-entry and improving decision-making with real-time information."
  },
  "implementation_planner": {
    "id": "implementation_planner",
    "name": "Implementation Planner",
    "description": "A project management tool specifically designed for planning digital system implementations. It helps evaluate different implementation approaches based on risk tolerance and business constraints.",
    "location": "implementation_inlet",
    "can_take": true,
    "use_text": "You use the Implementation Planner to analyze the company's system replacement options. After assessing their risk tolerance, technical capabilities, and business constraints, it recommends a phased implementation approach. This allows them to gradually replace components of the legacy system while maintaining operations, with each phase building on the success of previous ones."
  },
  "collaboration_analyzer": {
    "id": "collaboration_analyzer",
    "name": "Collaboration Analyzer",
    "description": "A tool that evaluates different work arrangements and their impact on collaboration, productivity, and work-life balance. It suggests optimal setups based on team and task characteristics.",
    "location": "workplace_wonders",
    "can_take": true,
    "use_text": "You use the Collaboration Analyzer on the different working arrangements. It shows how each setup affects communication patterns, work-life balance, and productivity for different types of work. For creative collaborative work, it suggests a hybrid model with scheduled in-person collaboration days and flexible remote work for focused tasks."
  },
  "business_model_canvas": {
    "id": "business_model_canvas",
    "name": "Business Model Canvas",
    "description": "A strategic management tool that helps visualize and develop business models. It's particularly useful for understanding how digital technology enables new value propositions and revenue streams.",
    "location": "commerce_crossroads",
    "can_take": true,
    "use_text": "You use the Business Model Canvas to analyze different digital business models. It reveals how direct-to-consumer digital models eliminate intermediaries, reducing costs and creating direct customer relationships. You also see how platform models create value by connecting different user groups, and how subscription models provide predictable revenue streams compared to one-time purchases."
  },
  "monetization_strategist": {
    "id": "monetization_strategist",
    "name": "Monetization Strategist",
    "description": "A tool for digital content creators that analyzes different revenue generation strategies. It compares approaches like advertising, subscriptions, microtransactions, and freemium models.",
    "location": "service_sector",
    "can_take": true,
    "use_text": "You use the Monetization Strategist to evaluate different content monetization approaches. It shows the trade-offs between advertising (high reach but lower revenue per user), subscriptions (predictable revenue but higher user commitment), freemium (wide adoption with premium upsells), and one-time purchases. The best strategy depends on the content type, audience, and creator goals."
  },
  "malware_containment_unit": {
    "id": "malware_containment_unit",
    "name": "Malware Containment Unit",
    "description": "A secure device for safely examining malicious software. It allows observation of malware behavior without risk of infection or spread to other systems.",
    "location": "threat_theater",
    "can_take": true,
    "use_text": "You carefully use the Malware Containment Unit to examine the volatile specimen. Inside the secure environment, you observe how the malware attempts to replicate, hide itself, and communicate with remote servers. The unit's analysis reveals it's a polymorphic virus that constantly changes its code to evade detection, explaining why it's particularly dangerous."
  },
  "encryption_configurator": {
    "id": "encryption_configurator",
    "name": "Encryption Configurator",
    "description": "A security tool for setting up and testing different encryption systems. It demonstrates both symmetric and asymmetric encryption methods and their appropriate uses.",
    "location": "resilience_realm",
    "can_take": true,
    "use_text": "You use the Encryption Configurator on the secure communication system. After analyzing the requirements, you implement asymmetric encryption for initial key exchange (using public/private key pairs) and faster symmetric encryption for the actual data transfer. The system now securely encrypts all communications, protecting them from unauthorized access."
  },
  "privacy_auditor": {
    "id": "privacy_auditor",
    "name": "Privacy Auditor",
    "description": "A tool that analyzes digital activities and identifies what personal data is being collected, stored, and shared. It helps manage and minimize your digital footprint.",
    "location": "footprint_forest",
    "can_take": true,
    "use_text": "You use the Privacy Auditor on the leaky social media profile. It reveals extensive data collection including location history, browsing habits, contact lists, and personal preferences. After adjusting privacy settings, limiting app permissions, and removing unnecessary connections, the data leakage is significantly reduced."
  },
  "compliance_checker": {
    "id": "compliance_checker",
    "name": "Compliance Checker",
    "description": "A legal tool that evaluates data handling practices against various regulatory frameworks like GDPR, CCPA, and others. It identifies compliance issues and suggests remediation steps.",
    "location": "ethics_embassy",
    "can_take": true,
    "use_text": "You use the Compliance Checker on the company's data collection practices. It analyzes their procedures against relevant regulations and identifies several issues: lack of explicit consent, excessive data retention, insufficient access controls, and missing documentation. The tool generates a compliance plan with specific steps to address each issue."
  },
  "tech_timeline_organizer": {
    "id": "tech_timeline_organizer",
    "name": "Tech Timeline Organizer",
    "description": "A historical tool that helps arrange computing innovations in chronological order. It provides context about how each development built upon previous ones and influenced future technology.",
    "location": "milestone_museum",
    "can_take": true,
    "use_text": "You use the Tech Timeline Organizer to fix the scrambled history display. It helps you arrange key innovations in proper sequence: mechanical calculators, early electronic computers (ENIAC, etc.), mainframes, minicomputers, personal computers, the Internet, the World Wide Web, mobile computing, smartphones, cloud computing, and emerging technologies like AI and quantum computing."
  },
  "moores_law_calculator": {
    "id": "moores_law_calculator",
    "name": "Moore's Law Calculator",
    "description": "A predictive tool that demonstrates how computing power has doubled approximately every two years. It can extrapolate historical trends and project future capabilities.",
    "location": "development_den",
    "can_take": true,
    "use_text": "You use the Moore's Law Calculator to analyze computing trends. It shows how transistor counts have doubled approximately every two years since the 1970s, driving exponential growth in computing power. Similar patterns appear in storage capacity, network bandwidth, and other technologies. The calculator projects continued growth but notes physical limitations that may require new computing paradigms."
  },
  "quantum_probability_viewer": {
    "id": "quantum_probability_viewer",
    "name": "Quantum Probability Viewer",
    "description": "An advanced tool that visualizes quantum states and probabilities. It helps make the counterintuitive nature of quantum computing more understandable.",
    "location": "research_repository",
    "can_take": true,
    "use_text": "You use the Quantum Probability Viewer to safely observe the quantum computing experiment. It visualizes how quantum bits (qubits) exist in multiple states simultaneously due to superposition, and how quantum entanglement allows correlated states across separate qubits. You can see how this enables quantum computers to explore multiple solutions in parallel, potentially solving certain problems exponentially faster than classical computers."
  }
};
