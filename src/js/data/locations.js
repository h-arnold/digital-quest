/**
 * locations.js - Data file for game locations
 * 
 * This file contains all the location data for the GCSE Digital Technology
 * text adventure game.
 */

const locationData = {
  "digital_nexus": {
    "id": "digital_nexus",
    "name": "Digital Nexus",
    "description": "You stand in the central hub of the Digital Quest world. Holographic displays show the various realms of digital technology knowledge that branch out from this central point. A large sign reads 'WELCOME TO THE DIGITAL QUEST - YOUR JOURNEY THROUGH GCSE DIGITAL TECHNOLOGY'.",
    "exits": [
      {"direction": "north", "destination": "data_domain_entrance", "destination_name": "Data Domain"},
      {"direction": "east", "destination": "system_citadel_entrance", "destination_name": "System Citadel"},
      {"direction": "south", "destination": "communication_cove_entrance", "destination_name": "Communication Cove"},
      {"direction": "west", "destination": "impact_islands_entrance", "destination_name": "Impact Islands"},
      {"direction": "northeast", "destination": "security_stronghold_entrance", "destination_name": "Security Stronghold"},
      {"direction": "northwest", "destination": "technology_timeline_entrance", "destination_name": "Technology Timeline"}
    ]
  },
  "data_domain_entrance": {
    "id": "data_domain_entrance",
    "name": "Data Domain Entrance",
    "description": "You've entered the Data Domain, where all concepts related to data representation, storage, and processing are explored. A glowing pathway branches in multiple directions, with signs pointing to different data-related areas.",
    "exits": [
      {"direction": "south", "destination": "digital_nexus", "destination_name": "Digital Nexus"},
      {"direction": "north", "destination": "analog_valley", "destination_name": "Analog Valley"},
      {"direction": "east", "destination": "digital_heights", "destination_name": "Digital Heights"},
      {"direction": "west", "destination": "conversion_bridge", "destination_name": "Conversion Bridge"},
      {"direction": "northeast", "destination": "storage_archives", "destination_name": "Storage Archives"}
    ]
  },
  "analog_valley": {
    "id": "analog_valley",
    "name": "Analog Valley",
    "description": "You descend into a lush valley where continuous, flowing data streams meander through the landscape. Unlike the precise, structured nature of other areas, everything here is smooth, continuous, and infinite in its possible values. Vinyl records spin on floating platforms, and analog wave patterns ripple through the air.",
    "exits": [
      {"direction": "south", "destination": "data_domain_entrance", "destination_name": "Data Domain Entrance"},
      {"direction": "east", "destination": "conversion_bridge", "destination_name": "Conversion Bridge"}
    ]
  },
  "digital_heights": {
    "id": "digital_heights",
    "name": "Digital Heights",
    "description": "You climb to a plateau of precise, structured data formations. Everything here exists in discrete states - on or off, 1 or 0. Giant binary digits float in the air, occasionally combining to form numbers, text, and images. A series of eight giant light bulbs suspended in mid-air form a binary pattern that changes periodically.",
    "exits": [
      {"direction": "west", "destination": "data_domain_entrance", "destination_name": "Data Domain Entrance"},
      {"direction": "north", "destination": "conversion_bridge", "destination_name": "Conversion Bridge"}
    ]
  },
  "conversion_bridge": {
    "id": "conversion_bridge",
    "name": "Conversion Bridge",
    "description": "You walk along a fascinating bridge that connects the analog and digital realms. On one side, smooth analog waves flow continuously; on the other, precise digital patterns march in orderly sequences. In the middle, you can see the conversion process happening - analog signals being sampled at regular intervals and transformed into digital values.",
    "exits": [
      {"direction": "west", "destination": "analog_valley", "destination_name": "Analog Valley"},
      {"direction": "south", "destination": "digital_heights", "destination_name": "Digital Heights"},
      {"direction": "east", "destination": "data_domain_entrance", "destination_name": "Data Domain Entrance"}
    ]
  },
  "storage_archives": {
    "id": "storage_archives",
    "name": "Storage Archives",
    "description": "You enter a vast repository of data storage technologies from throughout history. Punch cards and paper tape fill ancient cabinets, magnetic tapes spin on massive reels, hard disk platters rotate rapidly, and solid-state storage glows with silent efficiency. In the center stands a peculiar machine with slots for different storage devices and a complex task specification displayed on its screen.",
    "exits": [
      {"direction": "southwest", "destination": "data_domain_entrance", "destination_name": "Data Domain Entrance"},
      {"direction": "north", "destination": "magnetic_section", "destination_name": "Magnetic Storage Section"}
    ]
  },
  "magnetic_section": {
    "id": "magnetic_section",
    "name": "Magnetic Storage Section",
    "description": "You're surrounded by enormous tape drives and spinning disk platters. The air hums with the sound of read/write heads moving across magnetic media. Visualizations show how data is encoded as magnetic polarities on various storage devices. A scheduling terminal displays a backup plan that appears to be causing the system to struggle.",
    "exits": [
      {"direction": "south", "destination": "storage_archives", "destination_name": "Storage Archives"}
    ]
  },
  "system_citadel_entrance": {
    "id": "system_citadel_entrance",
    "name": "System Citadel Entrance",
    "description": "You stand before the imposing System Citadel, a fortress of knowledge about digital systems, hardware, and software. The architecture combines circuit board patterns with classical fortress design. Different wings of the citadel represent different aspects of system architecture.",
    "exits": [
      {"direction": "west", "destination": "digital_nexus", "destination_name": "Digital Nexus"},
      {"direction": "north", "destination": "hardware_harbor", "destination_name": "Hardware Harbor"},
      {"direction": "east", "destination": "software_sanctuary", "destination_name": "Software Sanctuary"},
      {"direction": "south", "destination": "process_management_platform", "destination_name": "Process Management Platform"},
      {"direction": "northeast", "destination": "cloud_kingdom", "destination_name": "Cloud Kingdom"},
      {"direction": "southeast", "destination": "development_cycle_circuit", "destination_name": "Development Cycle Circuit"}
    ]
  },
  "hardware_harbor": {
    "id": "hardware_harbor",
    "name": "Hardware Harbor",
    "description": "You explore a busy port where physical components of computing systems are loaded and unloaded. CPUs, memory modules, storage devices, and peripherals move along conveyor belts. Educational displays explain the function of each component. A massive array of logic gates controls the flow of data throughout the System Citadel, with one section appearing to malfunction.",
    "exits": [
      {"direction": "south", "destination": "system_citadel_entrance", "destination_name": "System Citadel Entrance"}
    ]
  },
  "software_sanctuary": {
    "id": "software_sanctuary",
    "name": "Software Sanctuary",
    "description": "You wander through a garden of software, where programs grow like plants. System software forms the sturdy trees and foundation, while applications bloom as colorful flowers above. Utility programs buzz around like helpful insects. In one section, license agreements grow like strange plants - some open and accessible, others enclosed in restrictive containers.",
    "exits": [
      {"direction": "west", "destination": "system_citadel_entrance", "destination_name": "System Citadel Entrance"}
    ]
  },
  "process_management_platform": {
    "id": "process_management_platform",
    "name": "Process Management Platform",
    "description": "You observe a complex dance of processes being scheduled and managed by the operating system. Different colored lights represent different programs competing for CPU time and resources. You can see how the scheduler allocates time slices to each process. A strange program running on one of the terminals appears to be calling itself repeatedly, creating copies that create more copies.",
    "exits": [
      {"direction": "north", "destination": "system_citadel_entrance", "destination_name": "System Citadel Entrance"}
    ]
  },
  "cloud_kingdom": {
    "id": "cloud_kingdom",
    "name": "Cloud Kingdom",
    "description": "You ascend to a realm of cloud computing, where data and processing float freely above physical constraints. Virtualized resources expand and contract based on demand, and services are provided from seemingly nowhere. A visualization of a web application experiencing wildly fluctuating traffic shows cloud resources either overwhelmed or sitting idle. A terminal marked 'Cloud Storage Management - Authorized Personnel Only' has a warning sign about 'precipitation events'.",
    "exits": [
      {"direction": "southwest", "destination": "system_citadel_entrance", "destination_name": "System Citadel Entrance"}
    ]
  },
  "development_cycle_circuit": {
    "id": "development_cycle_circuit",
    "name": "Development Cycle Circuit",
    "description": "You find yourself on a circular track representing the System Development Life Cycle. Different stations around the track represent requirements analysis, design, implementation, testing, deployment, and maintenance. Project vehicles move around the track, some flowing smoothly through the stages, others stuck at bottlenecks. A version control system managing different iterations of software projects has hundreds of branches with a warning about 'merge conflicts'.",
    "exits": [
      {"direction": "northwest", "destination": "system_citadel_entrance", "destination_name": "System Citadel Entrance"}
    ]
  },
  "communication_cove_entrance": {
    "id": "communication_cove_entrance",
    "name": "Communication Cove Entrance",
    "description": "You arrive at Communication Cove, a bustling harbor where all forms of digital communication converge. Packets of data sail between devices, and different communication protocols direct traffic through the waters. Signs point to different areas specializing in various aspects of digital communication.",
    "exits": [
      {"direction": "north", "destination": "digital_nexus", "destination_name": "Digital Nexus"},
      {"direction": "east", "destination": "network_node", "destination_name": "Network Node"},
      {"direction": "south", "destination": "message_marketplace", "destination_name": "Message Marketplace"},
      {"direction": "west", "destination": "social_network_square", "destination_name": "Social Network Square"},
      {"direction": "southeast", "destination": "truth_tribunal", "destination_name": "Truth Tribunal"}
    ]
  },
  "network_node": {
    "id": "network_node",
    "name": "Network Node",
    "description": "You explore a central networking hub where data packets are routed between different networks. Visualizations show how the Internet protocols work to deliver information across the global network. A network traffic management system has a warning about maintaining proper packet routing protocols.",
    "exits": [
      {"direction": "west", "destination": "communication_cove_entrance", "destination_name": "Communication Cove Entrance"}
    ]
  },
  "message_marketplace": {
    "id": "message_marketplace",
    "name": "Message Marketplace",
    "description": "You browse through a marketplace of communication methods, each with its own characteristics and best uses. Synchronous methods like video calls happen in real-time, while asynchronous methods like email wait patiently in queues. A suspicious-looking email terminal with the subject line 'CLICK HERE FOR FREE PRIZE!!!' stands out despite numerous red flags.",
    "exits": [
      {"direction": "north", "destination": "communication_cove_entrance", "destination_name": "Communication Cove Entrance"}
    ]
  },
  "social_network_square": {
    "id": "social_network_square",
    "name": "Social Network Square",
    "description": "You mingle in a plaza where different social networks interconnect. Each platform has its own culture, rules, and communication styles. In one corner, a dispute rages over who owns content posted on a social media platform, with users arguing with platform representatives about rights to photos and posts they've shared.",
    "exits": [
      {"direction": "east", "destination": "communication_cove_entrance", "destination_name": "Communication Cove Entrance"}
    ]
  },
  "truth_tribunal": {
    "id": "truth_tribunal",
    "name": "Truth Tribunal",
    "description": "You enter a forum where the reliability of online information is evaluated. Different sources present their claims, and critical thinking tools are used to assess their credibility. Information from different online sources about a new technology is being presented, and you must evaluate which source is most reliable based on various credibility factors.",
    "exits": [
      {"direction": "northwest", "destination": "communication_cove_entrance", "destination_name": "Communication Cove Entrance"}
    ]
  },
  "impact_islands_entrance": {
    "id": "impact_islands_entrance",
    "name": "Impact Islands Entrance",
    "description": "You arrive at an archipelago representing the impacts of digital systems on organizations, individuals, and society. Each island focuses on a different aspect of how digital technology changes our world. A ferry service connects the various islands.",
    "exits": [
      {"direction": "east", "destination": "digital_nexus", "destination_name": "Digital Nexus"},
      {"direction": "north", "destination": "efficiency_enclave", "destination_name": "Efficiency Enclave"},
      {"direction": "west", "destination": "implementation_inlet", "destination_name": "Implementation Inlet"},
      {"direction": "south", "destination": "workplace_wonders", "destination_name": "Workplace Wonders"},
      {"direction": "southwest", "destination": "commerce_crossroads", "destination_name": "Commerce Crossroads"},
      {"direction": "southeast", "destination": "service_sector", "destination_name": "Service Sector"}
    ]
  },
  "efficiency_enclave": {
    "id": "efficiency_enclave",
    "name": "Efficiency Enclave",
    "description": "You explore an island where digital systems dramatically improve organizational efficiency. Automated processes handle routine tasks, data flows seamlessly between departments, and analytics provide insights for better decision-making. A business struggling with digital transformation has partially digitized but not integrated systems, creating inefficiencies and data silos.",
    "exits": [
      {"direction": "south", "destination": "impact_islands_entrance", "destination_name": "Impact Islands Entrance"}
    ]
  },
  "implementation_inlet": {
    "id": "implementation_inlet",
    "name": "Implementation Inlet",
    "description": "You visit a harbor where new digital systems are being implemented in organizations. Different docks represent different implementation approaches - direct cutover, parallel running, phased implementation, and pilot implementation - each with its own advantages and risks. A company is attempting to replace their legacy system with a new digital solution, visualized at the different docks.",
    "exits": [
      {"direction": "east", "destination": "impact_islands_entrance", "destination_name": "Impact Islands Entrance"}
    ]
  },
  "workplace_wonders": {
    "id": "workplace_wonders",
    "name": "Workplace Wonders",
    "description": "You observe how digital technology transforms the workplace. Traditional office setups shift into various remote and hybrid configurations, changing when, where, and how people work. Collaboration tools bridge distances, and new work patterns emerge. Different working arrangements are visualized, each with different collaboration patterns.",
    "exits": [
      {"direction": "north", "destination": "impact_islands_entrance", "destination_name": "Impact Islands Entrance"}
    ]
  },
  "commerce_crossroads": {
    "id": "commerce_crossroads",
    "name": "Commerce Crossroads",
    "description": "You stand at a crossroads of commerce, where digital technology reshapes business models and value chains. Traditional supply chains with many intermediaries contrast with direct digital connections between producers and consumers. Different business models are visualized as different trade routes.",
    "exits": [
      {"direction": "northeast", "destination": "impact_islands_entrance", "destination_name": "Impact Islands Entrance"}
    ]
  },
  "service_sector": {
    "id": "service_sector",
    "name": "Service Sector",
    "description": "You explore an area dedicated to the rise of digital services and content monetization. Physical products transform into services, and content creators use various strategies to generate revenue from their digital offerings. Content creators are using different strategies to generate revenue from their digital content, visualized as different types of transactions.",
    "exits": [
      {"direction": "northwest", "destination": "impact_islands_entrance", "destination_name": "Impact Islands Entrance"}
    ]
  },
  "security_stronghold_entrance": {
    "id": "security_stronghold_entrance",
    "name": "Security Stronghold Entrance",
    "description": "You approach a fortified stronghold dedicated to security and data protection. Multiple layers of defenses protect valuable data assets, and educational displays explain various threats and countermeasures. Different sections of the stronghold focus on specific aspects of digital security.",
    "exits": [
      {"direction": "southwest", "destination": "digital_nexus", "destination_name": "Digital Nexus"},
      {"direction": "north", "destination": "threat_theater", "destination_name": "Threat Theater"},
      {"direction": "east", "destination": "resilience_realm", "destination_name": "Resilience Realm"},
      {"direction": "south", "destination": "footprint_forest", "destination_name": "Footprint Forest"},
      {"direction": "southeast", "destination": "ethics_embassy", "destination_name": "Ethics Embassy"}
    ]
  },
  "threat_theater": {
    "id": "threat_theater",
    "name": "Threat Theater",
    "description": "You enter a theater showcasing the many threats to digital security. Malware, phishing, social engineering, and other attack vectors are demonstrated in controlled environments. A containment unit holding captured malware specimens for study has one container labeled 'Extremely Volatile - Do Not Disturb'. A display of deceptive emails and websites designed to trick users ranges from obvious scams to sophisticated forgeries.",
    "exits": [
      {"direction": "south", "destination": "security_stronghold_entrance", "destination_name": "Security Stronghold Entrance"}
    ]
  },
  "resilience_realm": {
    "id": "resilience_realm",
    "name": "Resilience Realm",
    "description": "You explore an area dedicated to cyber resilience - the measures that protect against, detect, and recover from security incidents. Firewalls, encryption, authentication systems, and backup solutions are all demonstrated. A secure communication system needs to be configured, with different encryption methods visualized as different types of locks and keys protecting data packets.",
    "exits": [
      {"direction": "west", "destination": "security_stronghold_entrance", "destination_name": "Security Stronghold Entrance"}
    ]
  },
  "footprint_forest": {
    "id": "footprint_forest",
    "name": "Footprint Forest",
    "description": "You wander through a forest where every action leaves digital footprints. Social media posts, search histories, online purchases, and location data create trails through the woods. Educational displays show how to manage your digital footprint. A social media profile is leaving massive footprints everywhere, with personal information visibly leaking into the forest.",
    "exits": [
      {"direction": "north", "destination": "security_stronghold_entrance", "destination_name": "Security Stronghold Entrance"}
    ]
  },
  "ethics_embassy": {
    "id": "ethics_embassy",
    "name": "Ethics Embassy",
    "description": "You visit a diplomatic center for digital ethics and legal responsibilities. Representatives from different regulatory frameworks discuss data protection, privacy rights, and ethical use of technology. A door marked 'Compliance Department' with warning signs about proper documentation has a small queue of frustrated-looking NPCs outside. A complex legal case involves a company that has collected customer data, with representatives from different regulatory frameworks debating whether the company's actions are compliant.",
    "exits": [
      {"direction": "northwest", "destination": "security_stronghold_entrance", "destination_name": "Security Stronghold Entrance"}
    ]
  },
  "technology_timeline_entrance": {
    "id": "technology_timeline_entrance",
    "name": "Technology Timeline Entrance",
    "description": "You stand at the entrance to a chronological journey through the development of digital technology. A path winds through different eras, from early computing pioneers to modern innovations and future possibilities.",
    "exits": [
      {"direction": "southeast", "destination": "digital_nexus", "destination_name": "Digital Nexus"},
      {"direction": "north", "destination": "milestone_museum", "destination_name": "Milestone Museum"},
      {"direction": "west", "destination": "development_den", "destination_name": "Development Den"},
      {"direction": "east", "destination": "research_repository", "destination_name": "Research Repository"}
    ]
  },
  "milestone_museum": {
    "id": "milestone_museum",
    "name": "Milestone Museum",
    "description": "You browse exhibits showcasing key milestones in computing history. From mechanical calculators and early electronic computers to personal computers, mobile devices, and beyond, the evolution of technology is displayed chronologically. A timeline of computing history has been scrambled, with key innovations and devices out of order.",
    "exits": [
      {"direction": "south", "destination": "technology_timeline_entrance", "destination_name": "Technology Timeline Entrance"}
    ]
  },
  "development_den": {
    "id": "development_den",
    "name": "Development Den",
    "description": "You observe how technology has developed over time, with patterns and principles that drive innovation. Moore's Law is visualized as an exponential curve, and similar patterns are shown for storage, bandwidth, and other aspects of computing. The evolution of storage technology across multiple generations is displayed, showing the dramatic improvements over time.",
    "exits": [
      {"direction": "east", "destination": "technology_timeline_entrance", "destination_name": "Technology Timeline Entrance"}
    ]
  },
  "research_repository": {
    "id": "research_repository",
    "name": "Research Repository",
    "description": "You explore cutting-edge research that points to the future of computing. Quantum computing, artificial intelligence, extended reality, and other emerging technologies are demonstrated in prototype form. An experimental quantum computing setup has a warning sign: 'Caution: Quantum Superposition In Progress - Do Not Observe Directly'. Scientists are working on experimental systems that may transform digital technology in the coming years.",
    "exits": [
      {"direction": "west", "destination": "technology_timeline_entrance", "destination_name": "Technology Timeline Entrance"}
    ]
  }
};
