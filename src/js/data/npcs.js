/**
 * npcs.js - Data file for non-player characters
 * 
 * This file contains all the NPC data for the GCSE Digital Technology
 * text adventure game, including their quizzes and educational content.
 */

const npcData = {
  "professor_binary": {
    "npc_id": "professor_binary",
    "name": "Professor Binary",
    "location": "digital_heights",
    "introduction": "Greetings, digital explorer! I am Professor Binary, expert in data representation. Care to test your knowledge of how computers represent different types of data? I have quizzes on binary numbers, text encoding, and image representation.",
    "quiz_options": ["Binary Numbers", "Text Encoding", "Image Representation"],
    "quizzes": [
      {
        "topic": "Binary Numbers",
        "introduction": "Let's see how well you understand binary numbers - the foundation of all digital data!",
        "questions": [
          {
            "question": "What is the decimal value of the binary number 1010?",
            "options": ["8", "10", "12", "16"],
            "correct_answer": 1,
            "explanation": "In binary, each position represents a power of 2, starting from the right with 2^0. So 1010 = 1×2^3 + 0×2^2 + 1×2^1 + 0×2^0 = 8 + 0 + 2 + 0 = 10."
          },
          {
            "question": "How many different values can be represented with 8 bits?",
            "options": ["8", "16", "64", "256"],
            "correct_answer": 3,
            "explanation": "With n bits, you can represent 2^n different values. So with 8 bits, you can represent 2^8 = 256 different values (0-255)."
          },
          {
            "question": "What is the binary representation of the decimal number 25?",
            "options": ["11001", "10101", "11100", "10011"],
            "correct_answer": 0,
            "explanation": "To convert decimal to binary, divide by 2 repeatedly and record the remainders from bottom to top. 25÷2=12 remainder 1, 12÷2=6 remainder 0, 6÷2=3 remainder 0, 3÷2=1 remainder 1, 1÷2=0 remainder 1. Reading from top to bottom: 11001."
          }
        ],
        "success_response": "Excellent work! You've demonstrated a solid understanding of binary numbers. This knowledge is fundamental to understanding how all digital data is stored and processed.",
        "failure_response": "It seems you need a bit more practice with binary numbers. Remember, binary uses only 0s and 1s, with each position representing a power of 2. Keep practicing your conversions between binary and decimal!"
      },
      {
        "topic": "Text Encoding",
        "introduction": "Let's explore how computers represent text using binary codes!",
        "questions": [
          {
            "question": "Which encoding standard is most commonly used for text on the modern web?",
            "options": ["ASCII", "EBCDIC", "Unicode (UTF-8)", "Morse Code"],
            "correct_answer": 2,
            "explanation": "Unicode, particularly UTF-8, is the most common text encoding on the modern web. Unlike ASCII which only supports 128 characters, Unicode can represent characters from virtually all writing systems in the world."
          },
          {
            "question": "How many bits are used to represent a standard ASCII character?",
            "options": ["4 bits", "7 bits", "8 bits", "16 bits"],
            "correct_answer": 1,
            "explanation": "Standard ASCII uses 7 bits to represent each character, allowing for 128 different characters (0-127). Extended ASCII uses 8 bits, allowing for 256 characters."
          },
          {
            "question": "What is the main advantage of Unicode over ASCII?",
            "options": ["It's faster to process", "It supports multiple languages and symbols", "It uses less storage space", "It's easier to program with"],
            "correct_answer": 1,
            "explanation": "The main advantage of Unicode is its support for multiple languages and symbols. While ASCII is limited to primarily English characters, Unicode can represent characters from virtually all of the world's writing systems."
          }
        ],
        "success_response": "Well done! You understand how computers encode text. This knowledge is crucial for working with different languages and ensuring data is correctly interpreted across different systems.",
        "failure_response": "Text encoding can be tricky! Remember that computers need standardized ways to represent text as binary numbers. ASCII is simpler but limited, while Unicode supports many more characters for global communication."
      },
      {
        "topic": "Image Representation",
        "introduction": "Let's see how well you understand how digital images are represented and stored!",
        "questions": [
          {
            "question": "What does the term 'pixel' stand for?",
            "options": ["Picture element", "Pixelated image", "Picture extension layer", "Photo index element"],
            "correct_answer": 0,
            "explanation": "A pixel (short for 'picture element') is the smallest unit of a digital image. Each pixel contains color information, and images are made up of grids of pixels."
          },
          {
            "question": "How is color typically represented in a 24-bit color image?",
            "options": ["8 bits each for red, green, and blue", "24 shades of gray", "6 bits each for red, green, blue, and alpha", "One byte for hue, saturation, and brightness"],
            "correct_answer": 0,
            "explanation": "In 24-bit color (also called true color), each pixel's color is represented by 8 bits (1 byte) each for red, green, and blue components. This allows for 256 levels of each color, creating over 16 million possible colors."
          },
          {
            "question": "What happens to file size when you double the resolution (width and height) of an image?",
            "options": ["It doubles", "It stays the same", "It quadruples", "It increases by 50%"],
            "correct_answer": 2,
            "explanation": "When you double both the width and height of an image, you're multiplying the total number of pixels by 4 (2×2). Since each pixel requires the same amount of data, the file size (before compression) will approximately quadruple."
          }
        ],
        "success_response": "Excellent! You have a good grasp of how digital images are represented. This knowledge helps you understand file formats, image quality, and storage requirements for graphics.",
        "failure_response": "Digital image representation can be complex! Remember that images are made up of pixels, each containing color information, and higher resolutions mean more pixels and larger file sizes."
      }
    ]
  },
  "dr_analog": {
    "npc_id": "dr_analog",
    "name": "Dr. Analog",
    "location": "analog_valley",
    "introduction": "Hello there! I'm Dr. Analog, specialist in continuous signal processing. The digital world may be taking over, but understanding analog concepts is still crucial. Would you like to test your knowledge about analog signals and their characteristics?",
    "quiz_options": ["Analog Signals"],
    "quizzes": [
      {
        "topic": "Analog Signals",
        "introduction": "Let's explore your understanding of analog signals and how they differ from digital signals!",
        "questions": [
          {
            "question": "Which of the following best describes an analog signal?",
            "options": ["A signal with only two possible values", "A signal that varies continuously over time", "A signal that uses only whole numbers", "A signal that must be processed by a computer"],
            "correct_answer": 1,
            "explanation": "Analog signals vary continuously over time and can take any value within a range. This contrasts with digital signals, which have discrete values (typically just two values in binary digital systems)."
          },
          {
            "question": "Which of these is an example of an analog device?",
            "options": ["Calculator", "Traditional vinyl record player", "Digital camera", "E-book reader"],
            "correct_answer": 1,
            "explanation": "A traditional vinyl record player is an analog device. It reads continuous physical grooves in the record and converts them directly to continuous electrical signals that produce sound without digital conversion."
          },
          {
            "question": "What is a key disadvantage of analog signals compared to digital signals?",
            "options": ["They use more power", "They are more susceptible to noise and degradation", "They can't represent complex information", "They are always slower to transmit"],
            "correct_answer": 1,
            "explanation": "A key disadvantage of analog signals is their susceptibility to noise and degradation. Unlike digital signals which can be regenerated perfectly, analog signals accumulate noise and distortion during transmission and copying, leading to quality loss."
          }
        ],
        "success_response": "Excellent work! You understand the nature of analog signals and how they differ from digital signals. This foundation helps explain why we convert analog signals to digital in modern systems while preserving their important characteristics.",
        "failure_response": "Analog concepts can be challenging! Remember that analog signals are continuous and can take any value within a range, unlike digital signals which use discrete values. This fundamental difference affects how they're processed, stored, and transmitted."
      }
    ]
  },
  "conversion_specialist": {
    "npc_id": "conversion_specialist",
    "name": "Conversion Specialist",
    "location": "conversion_bridge",
    "introduction": "Welcome to the Conversion Bridge! I'm the Conversion Specialist, expert in the transformation between analog and digital signals. Would you like to test your knowledge about how we convert between these two fundamental types of data?",
    "quiz_options": ["Analog-to-Digital Conversion"],
    "quizzes": [
      {
        "topic": "Analog-to-Digital Conversion",
        "introduction": "Let's see how well you understand the process of converting analog signals to digital format!",
        "questions": [
          {
            "question": "What are the two main steps in analog-to-digital conversion?",
            "options": ["Amplification and filtering", "Sampling and quantization", "Compression and encryption", "Modulation and demodulation"],
            "correct_answer": 1,
            "explanation": "The two main steps in analog-to-digital conversion are sampling (measuring the analog signal at regular intervals) and quantization (assigning each sample to the nearest value from a fixed set of digital values)."
          },
          {
            "question": "What does the sampling rate determine in analog-to-digital conversion?",
            "options": ["The volume of the signal", "How many times per second the analog signal is measured", "The color depth of images", "The file compression ratio"],
            "correct_answer": 1,
            "explanation": "The sampling rate determines how many times per second the analog signal is measured. Higher sampling rates capture more detail from the original analog signal but require more storage space and processing power."
          },
          {
            "question": "According to the Nyquist Theorem, what is the minimum sampling rate needed to accurately capture an analog signal?",
            "options": ["Equal to the highest frequency in the signal", "Twice the highest frequency in the signal", "Half the highest frequency in the signal", "Four times the highest frequency in the signal"],
            "correct_answer": 1,
            "explanation": "According to the Nyquist Theorem, to accurately capture an analog signal, you must sample at a rate of at least twice the highest frequency present in the signal. This prevents aliasing, where high frequencies appear as lower frequencies in the digital version."
          }
        ],
        "success_response": "Excellent! You understand the key concepts of analog-to-digital conversion. This process is fundamental to how we capture real-world information (sound, images, etc.) and represent it in digital form for processing, storage, and transmission.",
        "failure_response": "Analog-to-digital conversion can be tricky to understand! Remember that it involves sampling (measuring at regular intervals) and quantization (assigning digital values), with the sampling rate determining how much detail is captured from the original signal."
      }
    ]
  },
  "storage_curator": {
    "npc_id": "storage_curator",
    "name": "Storage Curator",
    "location": "storage_archives",
    "introduction": "Welcome to the Storage Archives! I'm the Storage Curator, keeper of knowledge about data storage technologies throughout computing history. Would you like to test your knowledge about how we've stored digital information over the years?",
    "quiz_options": ["Storage Technologies", "Storage Characteristics"],
    "quizzes": [
      {
        "topic": "Storage Technologies",
        "introduction": "Let's explore your knowledge of different storage technologies and their evolution!",
        "questions": [
          {
            "question": "Which of these storage technologies came first historically?",
            "options": ["Magnetic hard drives", "Punch cards", "Flash memory", "Optical discs (CD/DVD)"],
            "correct_answer": 1,
            "explanation": "Punch cards were one of the earliest forms of digital storage, used as early as the 1800s for controlling looms and later for early computers. Magnetic hard drives weren't developed until the 1950s, optical discs in the 1980s, and flash memory in the 1980s-90s."
          },
          {
            "question": "Which storage technology uses electrical charges trapped in cells to store data?",
            "options": ["Magnetic tape", "Hard disk drive", "Flash memory", "Optical disc"],
            "correct_answer": 2,
            "explanation": "Flash memory stores data by trapping electrical charges in isolated gates (floating-gate transistors). This allows it to retain data without power, making it ideal for portable devices like USB drives, memory cards, and SSDs."
          },
          {
            "question": "What is the main advantage of solid-state drives (SSDs) over traditional hard disk drives (HDDs)?",
            "options": ["Higher capacity", "Lower cost", "Faster access times", "Better long-term data retention"],
            "correct_answer": 2,
            "explanation": "The main advantage of SSDs over HDDs is their significantly faster access times. With no moving parts, SSDs can access data almost instantly, while HDDs must physically move read/write heads to the correct location on spinning platters."
          }
        ],
        "success_response": "Well done! You have a good understanding of storage technologies and their evolution. This knowledge helps you make informed decisions about the best storage solutions for different requirements.",
        "failure_response": "Storage technologies have evolved dramatically over computing history! From punch cards to magnetic media to solid-state storage, each technology has its own characteristics, advantages, and limitations."
      },
      {
        "topic": "Storage Characteristics",
        "introduction": "Let's test your knowledge about the key characteristics and trade-offs of different storage solutions!",
        "questions": [
          {
            "question": "Which storage characteristic measures how quickly data can be read or written?",
            "options": ["Capacity", "Volatility", "Latency", "Redundancy"],
            "correct_answer": 2,
            "explanation": "Latency measures how quickly data can be accessed (read or written). Lower latency means faster response times, which is important for system performance, especially for frequently accessed data."
          },
          {
            "question": "What does 'volatile' mean when applied to storage?",
            "options": ["It's easily damaged by heat", "It loses data when power is removed", "It has variable performance", "It's highly flammable"],
            "correct_answer": 1,
            "explanation": "Volatile storage loses its data when power is removed. RAM is a common example of volatile storage - it provides fast access to data while a computer is running, but its contents are lost when the computer is turned off."
          },
          {
            "question": "Which of these is an example of sequential access storage?",
            "options": ["RAM", "Magnetic tape", "SSD", "DVD-ROM"],
            "correct_answer": 1,
            "explanation": "Magnetic tape is a sequential access storage medium, meaning data must be accessed in sequence from the beginning of the tape. This makes it slow for random access but efficient for backup purposes where entire datasets are written or read in order."
          }
        ],
        "success_response": "Excellent! You understand the key characteristics that differentiate storage technologies. This knowledge helps in selecting appropriate storage solutions based on requirements for capacity, speed, persistence, and cost.",
        "failure_response": "Storage technologies involve important trade-offs! Remember that key characteristics include capacity (how much data can be stored), speed (how quickly data can be accessed), volatility (whether data persists without power), and access method (random vs. sequential)."
      }
    ]
  },
  "hardware_engineer": {
    "npc_id": "hardware_engineer",
    "name": "Hardware Engineer",
    "location": "hardware_harbor",
    "introduction": "Hello there! I'm the Hardware Engineer, specialist in the physical components that make computing systems work. Would you like to test your knowledge about computer hardware and how the different components function together?",
    "quiz_options": ["Computer Components", "Logic Gates"],
    "quizzes": [
      {
        "topic": "Computer Components",
        "introduction": "Let's see how well you understand the key hardware components in a computing system!",
        "questions": [
          {
            "question": "Which component is primarily responsible for executing program instructions?",
            "options": ["RAM", "Hard Drive", "CPU", "GPU"],
            "correct_answer": 2,
            "explanation": "The Central Processing Unit (CPU) is primarily responsible for executing program instructions. It fetches instructions from memory, decodes them, executes them, and stores the results. It's often called the 'brain' of the computer."
          },
          {
            "question": "What is the main function of RAM in a computer system?",
            "options": ["Long-term data storage", "Processing graphics", "Temporary working memory", "Network communication"],
            "correct_answer": 2,
            "explanation": "Random Access Memory (RAM) serves as temporary working memory for the computer. It stores data and program instructions that the CPU needs to access quickly. Unlike storage devices, RAM is volatile, meaning its contents are lost when power is turned off."
          },
          {
            "question": "Which of these is an input device?",
            "options": ["Monitor", "Printer", "Speaker", "Scanner"],
            "correct_answer": 3,
            "explanation": "A scanner is an input device that converts physical documents into digital images. Input devices bring data into the computer system from the outside world, while output devices (like monitors, printers, and speakers) present information from the computer to users."
          }
        ],
        "success_response": "Well done! You have a solid understanding of computer hardware components and their functions. This knowledge is essential for understanding how computing systems work and how to troubleshoot or upgrade them.",
        "failure_response": "Computer hardware can be complex! Remember that each component has a specific role: the CPU processes instructions, RAM provides temporary working memory, storage devices hold data long-term, and input/output devices connect the computer to the outside world."
      },
      {
        "topic": "Logic Gates",
        "introduction": "Let's test your knowledge of logic gates - the fundamental building blocks of digital circuits!",
        "questions": [
          {
            "question": "What does an AND gate do?",
            "options": ["Outputs 1 if either input is 1", "Outputs 1 if both inputs are 1", "Outputs 1 if inputs are different", "Outputs the opposite of the input"],
            "correct_answer": 1,
            "explanation": "An AND gate outputs 1 (true) only if all of its inputs are 1 (true). Otherwise, it outputs 0 (false). This is like the logical 'and' operation - both conditions must be true for the result to be true."
          },
          {
            "question": "What does an OR gate do?",
            "options": ["Outputs 1 if either input is 1", "Outputs 1 if both inputs are 1", "Outputs 1 if inputs are different", "Outputs the opposite of the input"],
            "correct_answer": 0,
            "explanation": "An OR gate outputs 1 (true) if any of its inputs are 1 (true). It only outputs 0 (false) if all inputs are 0 (false). This is like the logical 'or' operation - at least one condition must be true for the result to be true."
          },
          {
            "question": "What does a NOT gate do?",
            "options": ["Outputs 1 if both inputs are 1", "Outputs 1 if either input is 1", "Outputs 1 if inputs are different", "Outputs the opposite of the input"],
            "correct_answer": 3,
            "explanation": "A NOT gate (also called an inverter) outputs the opposite of its input: if the input is 1 (true), it outputs 0 (false), and if the input is 0 (false), it outputs 1 (true). This is like the logical 'not' operation - it negates or inverts the input."
          }
        ],
        "success_response": "Excellent! You understand the fundamental logic gates that form the building blocks of all digital circuits. These simple components, when combined in various ways, enable all the complex operations that computers perform.",
        "failure_response": "Logic gates are the foundation of digital electronics! Remember: AND gates output true only when all inputs are true, OR gates output true when any input is true, and NOT gates invert the input. These simple operations combine to create all digital functionality."
      }
    ]
  },
  "software_librarian": {
    "npc_id": "software_librarian",
    "name": "Software Librarian",
    "location": "software_sanctuary",
    "introduction": "Welcome to the Software Sanctuary! I'm the Software Librarian, curator of knowledge about different types of software and their licenses. Would you like to test your understanding of software categories and the legal frameworks that govern their use?",
    "quiz_options": ["Software Types", "Software Licensing"],
    "quizzes": [
      {
        "topic": "Software Types",
        "introduction": "Let's explore your knowledge of different types of software and their functions!",
        "questions": [
          {
            "question": "Which category does an operating system belong to?",
            "options": ["Application software", "System software", "Utility software", "Programming software"],
            "correct_answer": 1,
            "explanation": "An operating system is system software. System software provides core functions that are essential for managing computer resources and enabling other software to run. Operating systems like Windows, macOS, and Linux manage hardware resources and provide services for applications."
          },
          {
            "question": "What is the primary purpose of utility software?",
            "options": ["Creating documents and presentations", "Managing system resources", "Supporting system maintenance and optimization", "Developing new software"],
            "correct_answer": 2,
            "explanation": "The primary purpose of utility software is to support system maintenance and optimization. Examples include antivirus programs, disk cleanup tools, file compression utilities, and backup software. These tools help maintain, secure, and optimize the computer system."
          },
          {
            "question": "Which of these is an example of application software?",
            "options": ["Windows 10", "File Explorer", "Device drivers", "Spreadsheet program"],
            "correct_answer": 3,
            "explanation": "A spreadsheet program (like Microsoft Excel or Google Sheets) is application software. Application software is designed for end users to perform specific tasks, unlike system software which manages the computer itself. Other examples include word processors, web browsers, and games."
          }
        ],
        "success_response": "Well done! You have a good understanding of different software categories and their purposes. This knowledge helps you identify the right tools for specific tasks and understand how different software components work together.",
        "failure_response": "Software categories can be confusing! Remember that system software (like operating systems) manages the computer itself, utility software helps maintain and optimize the system, and application software helps users perform specific tasks."
      },
      {
        "topic": "Software Licensing",
        "introduction": "Let's test your knowledge about software licenses and their implications!",
        "questions": [
          {
            "question": "What does 'open source' mean for software?",
            "options": ["It's available for free", "The source code is publicly available and can be modified", "It works on all operating systems", "It has no copyright protection"],
            "correct_answer": 1,
            "explanation": "Open source means the source code is publicly available and can be modified. Open source software allows users to view, modify, and distribute the source code, subject to certain conditions depending on the specific license. It may or may not be free of charge."
          },
          {
            "question": "What is a key characteristic of proprietary software?",
            "options": ["The source code is freely available", "Users can modify and redistribute it", "The source code is kept private by the owner", "It must be free of charge"],
            "correct_answer": 2,
            "explanation": "A key characteristic of proprietary software is that the source code is kept private by the owner. Users typically receive only the executable files, not the source code, and are restricted from modifying, copying, or redistributing the software except as permitted by the license."
          },
          {
            "question": "What does a software EULA primarily define?",
            "options": ["How the software was developed", "The terms under which users can use the software", "The technical specifications of the software", "The price of the software"],
            "correct_answer": 1,
            "explanation": "An End User License Agreement (EULA) primarily defines the terms under which users can use the software. It specifies what users are allowed and not allowed to do with the software, including installation, copying, modification, and redistribution rights and restrictions."
          }
        ],
        "success_response": "Excellent! You understand the different types of software licenses and their implications. This knowledge is important for making informed decisions about software use, development, and distribution while respecting intellectual property rights.",
        "failure_response": "Software licensing can be complex! Remember that licenses define what users can legally do with software. Proprietary software keeps source code private, while open source makes it available for viewing and modification under specific conditions."
      }
    ]
  },
  "os_administrator": {
    "npc_id": "os_administrator",
    "name": "OS Administrator",
    "location": "process_management_platform",
    "introduction": "Greetings, user! I'm the OS Administrator, responsible for managing processes and resources in this system. Would you like to test your knowledge about how operating systems manage processes and allocate resources?",
    "quiz_options": ["Process Management"],
    "quizzes": [
      {
        "topic": "Process Management",
        "introduction": "Let's explore your understanding of how operating systems manage processes and resources!",
        "questions": [
          {
            "question": "What is a process in operating system terms?",
            "options": ["A program stored on disk", "A program in execution", "A single thread of execution", "A system utility"],
            "correct_answer": 1,
            "explanation": "A process is a program in execution. When you run a program, the operating system creates a process that includes the program code, its current activity, and a set of resources allocated to it (memory space, files, I/O devices, etc.)."
          },
          {
            "question": "What happens in a context switch?",
            "options": ["A user switches between applications", "The operating system changes its user interface", "The CPU switches from one process to another", "A program changes from one function to another"],
            "correct_answer": 2,
            "explanation": "A context switch occurs when the CPU switches from executing one process to another. The operating system saves the state of the current process and loads the saved state of the next process to be executed. This allows multiple processes to share a single CPU."
          },
          {
            "question": "What is the purpose of a process scheduler in an operating system?",
            "options": ["To install new programs", "To decide which process runs next and for how long", "To allocate memory to applications", "To manage file permissions"],
            "correct_answer": 1,
            "explanation": "The process scheduler decides which process runs next and for how long. It aims to maximize CPU usage, provide fair access to resources, minimize response time for users, and ensure all processes make progress. Different scheduling algorithms balance these goals in different ways."
          }
        ],
        "success_response": "Excellent! You understand how operating systems manage processes and resources. This knowledge is fundamental to understanding multitasking, performance optimization, and troubleshooting in computer systems.",
        "failure_response": "Process management can be complex! Remember that operating systems must efficiently share limited resources (CPU time, memory, etc.) among multiple processes, using scheduling algorithms to decide which process runs when."
      }
    ]
  },
  "cloud_architect": {
    "npc_id": "cloud_architect",
    "name": "Cloud Architect",
    "location": "cloud_kingdom",
    "introduction": "Welcome to the Cloud Kingdom! I'm the Cloud Architect, designer of scalable, flexible computing resources that exist beyond physical constraints. Would you like to test your knowledge about cloud computing concepts and services?",
    "quiz_options": ["Cloud Computing"],
    "quizzes": [
      {
        "topic": "Cloud Computing",
        "introduction": "Let's explore your understanding of cloud computing concepts and services!",
        "questions": [
          {
            "question": "What is a key characteristic of cloud computing?",
            "options": ["It requires specialized hardware", "It always costs more than traditional computing", "It provides on-demand self-service resources", "It only works for storage solutions"],
            "correct_answer": 2,
            "explanation": "A key characteristic of cloud computing is providing on-demand self-service resources. Users can provision computing capabilities as needed without requiring human interaction with service providers. Other key characteristics include broad network access, resource pooling, rapid elasticity, and measured service."
          },
          {
            "question": "What does SaaS stand for in cloud computing?",
            "options": ["Storage as a Service", "Software as a Service", "Security as a Service", "Systems as a Service"],
            "correct_answer": 1,
            "explanation": "SaaS stands for Software as a Service. It's a cloud computing model where applications are hosted by a provider and made available to customers over the internet, typically through a web browser. Examples include Google Workspace, Microsoft 365, and Salesforce."
          },
          {
            "question": "What is the main benefit of auto-scaling in cloud environments?",
            "options": ["It automatically updates software", "It adjusts resources based on demand", "It provides automatic backups", "It moves data between different cloud providers"],
            "correct_answer": 1,
            "explanation": "The main benefit of auto-scaling is that it adjusts resources based on demand. This means applications can automatically add resources during high traffic periods and reduce resources during low usage, optimizing both performance and cost without manual intervention."
          }
        ],
        "success_response": "Well done! You understand key concepts of cloud computing. This knowledge is increasingly important as more organizations move their IT infrastructure to cloud-based solutions for greater flexibility, scalability, and often cost-effectiveness.",
        "failure_response": "Cloud computing concepts can be complex! Remember that cloud services provide on-demand, scalable resources over the internet, with different service models (IaaS, PaaS, SaaS) offering different levels of management and control."
      }
    ]
  },
  "development_manager": {
    "npc_id": "development_manager",
    "name": "Development Manager",
    "location": "development_cycle_circuit",
    "introduction": "Hello there! I'm the Development Manager, overseer of the System Development Life Cycle. Would you like to test your knowledge about how digital systems are planned, created, tested, and maintained?",
    "quiz_options": ["System Development Life Cycle"],
    "quizzes": [
      {
        "topic": "System Development Life Cycle",
        "introduction": "Let's explore your understanding of the System Development Life Cycle (SDLC) and its phases!",
        "questions": [
          {
            "question": "What is typically the first phase of the System Development Life Cycle?",
            "options": ["Implementation", "Requirements analysis", "Testing", "Coding"],
            "correct_answer": 1,
            "explanation": "Requirements analysis is typically the first phase of the SDLC. During this phase, the team gathers and analyzes information about what the system needs to do, including functional requirements (what the system should do) and non-functional requirements (how the system should perform)."
          },
          {
            "question": "What is the main purpose of the testing phase in the SDLC?",
            "options": ["To write the code", "To gather user requirements", "To identify and fix defects", "To deploy the system to users"],
            "correct_answer": 2,
            "explanation": "The main purpose of the testing phase is to identify and fix defects. Various testing methods (unit testing, integration testing, system testing, user acceptance testing) are used to verify that the system meets requirements and functions correctly before it's deployed to users."
          },
          {
            "question": "What does version control help manage in software development?",
            "options": ["Project budgets", "Changes to source code over time", "User training", "Hardware requirements"],
            "correct_answer": 1,
            "explanation": "Version control helps manage changes to source code over time. It tracks who made what changes when, allows multiple developers to work on the same codebase without conflicts, enables reverting to previous versions if needed, and facilitates branching and merging development paths."
          }
        ],
        "success_response": "Excellent! You understand the System Development Life Cycle and its phases. This knowledge is essential for planning and managing digital system projects effectively, ensuring they meet requirements and are delivered on time and within budget.",
        "failure_response": "The System Development Life Cycle can be complex! Remember that it typically includes phases like requirements analysis, design, implementation, testing, deployment, and maintenance, with each phase building on the previous ones to create a successful system."
      }
    ]
  },
  "network_engineer": {
    "npc_id": "network_engineer",
    "name": "Network Engineer",
    "location": "network_node",
    "introduction": "Greetings! I'm the Network Engineer, specialist in the protocols and systems that connect digital devices. Would you like to test your knowledge about networking concepts and how data travels across networks?",
    "quiz_options": ["Networking Fundamentals", "Internet Protocols"],
    "quizzes": [
      {
        "topic": "Networking Fundamentals",
        "introduction": "Let's explore your understanding of fundamental networking concepts!",
        "questions": [
          {
            "question": "What is the main purpose of a router in a network?",
            "options": ["To connect devices within a single network", "To amplify network signals", "To direct data between different networks", "To store network data"],
            "correct_answer": 2,
            "explanation": "The main purpose of a router is to direct data between different networks. Routers examine the destination address of data packets and determine the best path to forward them to reach their destination, allowing communication between different networks (like your home network and the internet)."
          },
          {
            "question": "What does LAN stand for?",
            "options": ["Large Area Network", "Local Area Network", "Long Access Node", "Linked Application Network"],
            "correct_answer": 1,
            "explanation": "LAN stands for Local Area Network. A LAN is a network that connects computers and devices in a limited area such as a home, school, office building, or closely positioned group of buildings. LANs typically have higher data transfer rates and lower latency than wide area networks (WANs)."
          },
          {
            "question": "What is the function of a network switch?",
            "options": ["To connect a device to a power source", "To connect multiple devices within a single network", "To protect against power surges", "To boost wireless signals"],
            "correct_answer": 1,
            "explanation": "A network switch connects multiple devices within a single network. Unlike a hub which broadcasts data to all connected devices, a switch is more intelligent - it learns which device is connected to which port and forwards data only to the specific device it's intended for, improving network efficiency."
          }
        ],
        "success_response": "Well done! You understand fundamental networking concepts. This knowledge is essential for designing, implementing, and troubleshooting the networks that connect our digital world.",
        "failure_response": "Networking concepts can be complex! Remember that networks consist of devices (computers, printers, etc.) connected by media (cables, wireless) and equipment (switches, routers) that enable them to communicate and share resources."
      },
      {
        "topic": "Internet Protocols",
        "introduction": "Let's test your knowledge of the protocols that make the Internet work!",
        "questions": [
          {
            "question": "What does IP stand for in networking?",
            "options": ["Internet Protocol", "Information Processing", "Internal Procedure", "Interface Port"],
            "correct_answer": 0,
            "explanation": "IP stands for Internet Protocol. It's a set of rules governing how data packets are addressed, transmitted, and routed across networks. IP provides the addressing mechanism that allows devices to find each other and exchange data across the internet."
          },
          {
            "question": "What is the purpose of DNS in networking?",
            "options": ["To encrypt data", "To compress data for faster transmission", "To translate domain names to IP addresses", "To detect network intrusions"],
            "correct_answer": 2,
            "explanation": "The purpose of DNS (Domain Name System) is to translate human-readable domain names (like www.example.com) to IP addresses (like 93.184.216.34) that computers use to identify each other. This allows users to access websites using memorable names instead of numerical addresses."
          },
          {
            "question": "Which protocol is primarily used for secure web browsing?",
            "options": ["HTTP", "FTP", "SMTP", "HTTPS"],
            "correct_answer": 3,
            "explanation": "HTTPS (Hypertext Transfer Protocol Secure) is primarily used for secure web browsing. It's an extension of HTTP that uses encryption (typically TLS or SSL) to secure communications between the browser and the website, protecting sensitive information from eavesdropping and tampering."
          }
        ],
        "success_response": "Excellent! You understand key internet protocols. This knowledge helps you comprehend how data travels across networks, how devices find each other, and how security is implemented in network communications.",
        "failure_response": "Internet protocols can be complex! Remember that they're standardized rules that allow devices to communicate: IP handles addressing and routing, TCP ensures reliable delivery, HTTP transfers web content, and DNS translates domain names to IP addresses."
      }
    ]
  },
  "communications_specialist": {
    "npc_id": "communications_specialist",
    "name": "Communications Specialist",
    "location": "message_marketplace",
    "introduction": "Hello there! I'm the Communications Specialist, expert in digital communication methods and their characteristics. Would you like to test your knowledge about different ways digital information can be exchanged?",
    "quiz_options": ["Digital Communication Methods"],
    "quizzes": [
      {
        "topic": "Digital Communication Methods",
        "introduction": "Let's explore your understanding of different digital communication methods and their characteristics!",
        "questions": [
          {
            "question": "What is the key difference between synchronous and asynchronous communication?",
            "options": ["Synchronous uses text, asynchronous uses audio", "Synchronous happens in real-time, asynchronous doesn't require immediate responses", "Synchronous is more secure than asynchronous", "Synchronous is only for business, asynchronous is for personal use"],
            "correct_answer": 1,
            "explanation": "The key difference is that synchronous communication happens in real-time (participants communicate simultaneously), while asynchronous communication doesn't require immediate responses (messages can be sent and responded to at different times). Examples of synchronous include video calls and chat; asynchronous includes email and forum posts."
          },
          {
            "question": "Which of these is an example of synchronous communication?",
            "options": ["Email", "Blog post", "Video conference", "Forum discussion"],
            "correct_answer": 2,
            "explanation": "A video conference is an example of synchronous communication because participants communicate in real-time. They must be present simultaneously, and there's an immediate exchange of information. Other examples include phone calls, live chats, and in-person meetings."
          },
          {
            "question": "What are common signs of a phishing attempt in an email?",
            "options": ["Comes from a known sender with proper grammar", "Contains specific information relevant only to you", "Creates urgency and asks for personal information", "Has a professional design with company logos"],
            "correct_answer": 2,
            "explanation": "Common signs of phishing include creating a sense of urgency and requesting personal information. Other red flags include suspicious sender addresses, generic greetings, grammatical errors, suspicious links or attachments, and requests that bypass normal security procedures. Legitimate organizations typically don't request sensitive information via email."
          }
        ],
        "success_response": "Well done! You understand different digital communication methods and their characteristics. This knowledge helps you choose the most appropriate communication channels for different purposes and recognize potential security threats.",
        "failure_response": "Digital communication methods have important distinctions! Remember that synchronous methods (like video calls) happen in real-time, while asynchronous methods (like email) allow delayed responses. Each has advantages for different situations."
      }
    ]
  },
  "social_media_analyst": {
    "npc_id": "social_media_analyst",
    "name": "Social Media Analyst",
    "location": "social_network_square",
    "introduction": "Hi there! I'm the Social Media Analyst, observer of online social interactions and their implications. Would you like to test your knowledge about social networks, online communities, and digital content ownership?",
    "quiz_options": ["Social Media and Content Rights"],
    "quizzes": [
      {
        "topic": "Social Media and Content Rights",
        "introduction": "Let's explore your understanding of social media platforms and digital content ownership!",
        "questions": [
          {
            "question": "When you post a photo on most social media platforms, who typically retains the copyright?",
            "options": ["The platform owns it completely", "You retain copyright but grant the platform a license to use it", "The copyright becomes public domain", "The platform's advertisers own the rights"],
            "correct_answer": 1,
            "explanation": "On most social media platforms, you retain the copyright to your content, but you grant the platform a license to use it. This license is typically broad, allowing the platform to display, distribute, modify, and sometimes sublicense your content, but you remain the copyright owner."
          },
          {
            "question": "What does it mean when social media content 'goes viral'?",
            "options": ["It contains computer viruses", "It's been approved by health authorities", "It spreads rapidly through sharing", "It violates platform guidelines"],
            "correct_answer": 2,
            "explanation": "When content 'goes viral,' it spreads rapidly through sharing, reaching a large audience quickly. Like a biological virus, viral content spreads exponentially as people share it with their networks, who then share it further. This can happen with various types of content including videos, images, and posts."
          },
          {
            "question": "What is a key consideration when deciding whether to share information on social media?",
            "options": ["Whether it will get many likes", "Whether it's accurate and appropriate to share", "Whether it includes trending hashtags", "Whether it includes high-quality images"],
            "correct_answer": 1,
            "explanation": "A key consideration should be whether the information is accurate and appropriate to share. Before sharing content, it's important to verify its accuracy, consider its source, think about who might see it, and reflect on potential consequences of sharing. Responsible sharing helps prevent the spread of misinformation."
          }
        ],
        "success_response": "Excellent! You understand important concepts related to social media and digital content rights. This knowledge helps you make informed decisions about what you share online and understand the implications of platform terms of service.",
        "failure_response": "Social media and content rights can be complex! Remember that while you typically retain copyright to content you create, platforms usually require you to grant them broad licenses to use your content. Always consider accuracy and appropriateness before sharing information online."
      }
    ]
  },
  "information_evaluator": {
    "npc_id": "information_evaluator",
    "name": "Information Evaluator",
    "location": "truth_tribunal",
    "introduction": "Welcome to the Truth Tribunal! I'm the Information Evaluator, specialist in assessing the reliability and credibility of online information. Would you like to test your critical thinking skills for evaluating digital information sources?",
    "quiz_options": ["Information Evaluation"],
    "quizzes": [
      {
        "topic": "Information Evaluation",
        "introduction": "Let's explore your ability to evaluate the reliability and credibility of online information!",
        "questions": [
          {
            "question": "Which of these is generally considered the most reliable type of source for factual information?",
            "options": ["Anonymous blog post", "Peer-reviewed academic journal", "Social media comment", "Advertisement"],
            "correct_answer": 1,
            "explanation": "Peer-reviewed academic journals are generally considered the most reliable sources for factual information. The peer review process means that experts in the field have critically evaluated the research methods, findings, and conclusions before publication, providing a high level of quality control and credibility."
          },
          {
            "question": "What does 'confirmation bias' refer to in information evaluation?",
            "options": ["Confirming information with multiple sources", "The tendency to favor information that confirms existing beliefs", "Verifying the date information was published", "Checking if information comes from official sources"],
            "correct_answer": 1,
            "explanation": "Confirmation bias refers to the tendency to favor information that confirms our existing beliefs and ignore contradictory evidence. This bias can lead people to accept dubious information that aligns with their views while rejecting credible information that challenges them. Being aware of this bias is important for objective evaluation."
          },
          {
            "question": "Which question is LEAST helpful when evaluating the credibility of an online source?",
            "options": ["Who created this information?", "When was it published?", "How many images does it contain?", "What evidence supports the claims?"],
            "correct_answer": 2,
            "explanation": "The number of images a source contains is least helpful for evaluating credibility. While visual elements can enhance understanding, they don't necessarily indicate reliability. More important factors include the author's expertise and credentials, publication date (for currency), supporting evidence, and potential biases or conflicts of interest."
          }
        ],
        "success_response": "Well done! You demonstrate good critical thinking skills for evaluating online information. These skills are essential in the digital age, where anyone can publish information and misinformation can spread rapidly.",
        "failure_response": "Information evaluation requires careful critical thinking! Remember to consider the source's expertise and potential biases, check for supporting evidence, verify with multiple reliable sources, and be aware of your own biases when assessing online information."
      }
    ]
  }
};
