import { Bot, Film, Code, Gamepad2, Printer, Brain } from "lucide-react";

export const modulesData = [
    {
        id: "robotics",
        icon: Bot,
        title: "3D Printing & Robotics",
        description: "CAD Design, Automation Projects, and Working Models",
        gradient: "from-[#00F5FF] to-[#0099CC]",
        image: "/robotics.png",
        equipment: ["Arduino Kits", "Raspberry Pi", "Sensors & Actuators", "3D Printer"],
        careers: ["Robotics Engineer", "Automation Specialist", "IoT Developer"],
        skills: ["CAD Design", "Automation Projects", "Sensor Wiring", "Working Models"],
        outcomes: "Students build competition-ready robots and develop critical STEM skills",
        longDescription: "Our Robotics and Prototyping module is designed to take students on a journey from basic mechanical assembly to creating complex, autonomous systems. Students learn to interface hardware with software using industry-standard platforms like Arduino and Raspberry Pi. The curriculum focuses on hands-on project-based learning, encouraging students to solve real-world problems through innovative robotic solutions.",
        curriculum: [
            { title: "Foundations of Mechanics", description: "Introduction to simple machines, gears, and structural stability." },
            { title: "Electronics & Circuitry", description: "Understanding basic electronic components, breadboarding, and soldering." },
            { title: "Embedded Programming", description: "Programming microcontrollers like Arduino using C++ fundamentals." },
            { title: "Sensors and Intelligence", description: "Integrating ultrasonic, infrared, and motion sensors for robot awareness." },
            { title: "Advanced Prototyping", description: "Custom chassis design and 3D printed components integration." }
        ],
        faqs: [
            { question: "Do students need prior coding experience?", answer: "No, we start from the very basics of logic and build up to programming." },
            { question: "What robots will they build?", answer: "Students build everything from simple line-followers to advanced obstacle-avoiding autonomous droids." },
            { question: "Is the equipment provided?", answer: "Yes, ZenworoX provides all necessary hardware and kits for the duration of the module." }
        ]
    },
    {
        id: "animation",
        icon: Film,
        title: "🎨 Animation & Graphics",
        description: "2D/3D Animation, Modeling, and VFX Basics",
        gradient: "from-[#6A5BFF] to-[#9B7FFF]",
        image: "/vfx animation.jpeg",
        equipment: ["High-end Workstations", "Graphics Tablets", "Animation Software", "Rendering Farm"],
        careers: ["3D Artist", "VFX Specialist", "Motion Designer"],
        skills: ["2D/3D Animation", "Modeling", "VFX Basics", "Character Design"],
        outcomes: "Create portfolio-ready work for film and gaming industries",
        longDescription: "The Animation and Graphics module dives deep into the world of visual effects and 3D creation. Using industry-standard software, students learn the fundamentals of modeling, texturing, rigging, and animation. This program is tailored for aspiring digital artists who want to bring their imagination to life, providing them with the technical skills needed for high-end production environments in film, television, and gaming.",
        curriculum: [
            { title: "Intro to Digital Art", description: "Learning the basics of composition, color theory, and digital drawing." },
            { title: "3D Modeling Basics", description: "Creating simple 3D objects and understanding mesh geometry." },
            { title: "Materials and Textures", description: "Applying realistic shaders and textures to digital models." },
            { title: "Character Rigging", description: "Building skeletal systems for characters and preparing them for movement." },
            { title: "VFX & Compositing", description: "Adding special effects and blending 3D assets with real-world environments." }
        ],
        faqs: [
            { question: "Which software do we use?", answer: "We primarily use Blender for 3D work and Adobe Suite for 2D and compositing." },
            { question: "Is a drawing tablet necessary?", answer: "While not strictly required, we provide tablets for students to use in the lab." },
            { question: "Can I use these skills for game design?", answer: "Absolutely, the 3D modeling and animation skills are directly applicable to the gaming industry." }
        ]
    },
    {
        id: "coding",
        icon: Code,
        title: "💻 Coding & Computer Science",
        description: "Python, Data Analysis, and Circuit Coding with Hardware",
        gradient: "from-[#00F5FF] to-[#6A5BFF]",
        image: "/lab 3.png",
        equipment: ["Developer Laptops", "Cloud Access", "AI/ML Platforms", "IDEs"],
        careers: ["Software Developer", "Data Scientist", "AI Engineer"],
        skills: ["Python", "Data Analysis", "Arduino", "Raspberry Pi", "Circuit Coding"],
        outcomes: "Build real applications and AI models solving real problems",
        longDescription: "In the Coding & AI/ML module, students go beyond surface-level programming. They master the logic and syntax of versatile languages like Python and JavaScript, then transition into the cutting-edge fields of Artificial Intelligence and Machine Learning. The course emphasizes data-driven decision making and the ethical development of AI, empowering students to build intelligent applications that can analyze and interpret complex datasets.",
        curriculum: [
            { title: "Logic & Problem Solving", description: "Introduction to algorithmic thinking and basic programming constructs." },
            { title: "Full-Stack Development", description: "Building responsive websites using modern frameworks like React." },
            { title: "Data Science Fundamentals", description: "Learning to collect, clean, and visualize data using Python." },
            { title: "Machine Learning Models", description: "Training models for image recognition and natural language processing." },
            { title: "AI Ethics & Future", description: "Exploring the societal impact of AI and building ethical AI solutions." }
        ],
        faqs: [
            { question: "What age groups is this for?", answer: "This module is structured for students from middle school to high school." },
            { question: "Is Python hard for beginners?", answer: "Python is known for its readable syntax, making it the perfect first language." },
            { question: "Will they build apps?", answer: "Yes, students build functional web apps and simple AI-powered tools." }
        ]
    },
    {
        id: "game-dev",
        icon: Gamepad2,
        title: "Game Development",
        description: "Design and build games using professional engines",
        gradient: "from-[#FF6B6B] to-[#FF8E53]",
        image: "/lab 4.png",
        equipment: ["Gaming PCs", "Unity/Unreal", "VR Headsets", "Game Controllers"],
        careers: ["Game Designer", "Game Programmer", "Level Designer"],
        skills: ["Game Engines", "C#/C++", "Game Physics", "UI/UX Design"],
        outcomes: "Publish games on app stores and gaming platforms",
        longDescription: "Our Game Development module is a comprehensive journey into the mechanics and artistry of game creation. Students learn to use professional engines like Unity and Unreal to build interactive worlds. From character design and level layout to physics programming and user interface design, this module covers the entire development lifecycle, culminating in students publishing their own games to various platforms.",
        curriculum: [
            { title: "Game Design Theory", description: "Understanding player experience, loops, and mechanics." },
            { title: "Intro to Unity", description: "Navigating the editor and using C# for basic gameplay scripts." },
            { title: "2D & 3D Level Design", description: "Creating immersive environments and designing challenging levels." },
            { title: "Game UI/UX", description: "Designing intuitive menus and player interfaces." },
            { title: "Publishing & Monetization", description: "Preparing games for Steam, Play Store, or App Store." }
        ],
        faqs: [
            { question: "Can I make mobile games?", answer: "Yes, our curriculum covers development for both PC and mobile platforms." },
            { question: "Do I need to be good at math?", answer: "Basic math helps for physics, but we teach the necessary concepts along the way." },
            { question: "Is Unity free for students?", answer: "Yes, Unity and Unreal have generous free tiers for educational use." }
        ]
    },
    {
        id: "3d-printing",
        icon: Printer,
        title: "3D Printing",
        description: "Transform digital designs into physical prototypes",
        gradient: "from-[#4ECDC4] to-[#44A08D]",
        image: "/3d printing.jpeg",
        equipment: ["FDM Printers", "Resin Printers", "CAD Software", "Post-processing Tools"],
        careers: ["Product Designer", "Prototyping Specialist", "Manufacturing Engineer"],
        skills: ["CAD Design", "3D Modeling", "Material Science", "Manufacturing"],
        outcomes: "Create functional prototypes and innovative products",
        longDescription: "The 3D Printing module bridges the gap between digital imagination and physical reality. Students learn Computer-Aided Design (CAD) to create precise digital models, then master the operation of various 3D printing technologies (FDM, Resin). This course teaches the principles of rapid prototyping, materials science, and additive manufacturing, preparing students for innovative roles in product design and modern engineering.",
        curriculum: [
            { title: "Industrial Design Basics", description: "Learning to think like a product designer." },
            { title: "CAD Modeling (Tinkercad to Fusion 360)", description: "Mastering software for precise engineering designs." },
            { title: "Printer Anatomy & Maintenance", description: "Understanding how 3D printers work and how to fix them." },
            { title: "Advanced Materials", description: "Exploring PLA, ABS, and resin printing applications." },
            { title: "Rapid Prototyping", description: "Fast-tracking from idea to physical model for problem solving." }
        ],
        faqs: [
            { question: "Are 3D printed objects strong?", answer: "Depending on the material and internal structure, they can be remarkably durable." },
            { question: "How long does a print take?", answer: "Small items take minutes, while complex parts can take several hours." },
            { question: "Is 3D printing wasteful?", answer: "We use biodegradable PLA and recycle failed prints and support material." }
        ]
    },
    {
        id: "stem",
        icon: Brain,
        title: "STEM Integration",
        description: "Interdisciplinary projects combining all technologies",
        gradient: "from-[#A770EF] to-[#CF8BF3]",
        image: "/lab 6.png",
        equipment: ["All Lab Equipment", "Project Kits", "Research Tools", "Competition Gear"],
        careers: ["Innovation Specialist", "Research Scientist", "Technology Consultant"],
        skills: ["System Thinking", "Project Management", "Research", "Innovation"],
        outcomes: "Compete in national and international STEM competitions",
        longDescription: "STEM Integration is our flagship interdisciplinary module that brings together concepts from Science, Technology, Engineering, and Mathematics. Students engage in large-scale projects that require the application of multiple technologies, such as using 3D printing for robotic components or AI for data analysis in scientific research. This holistic approach fosters critical thinking, complex problem-solving, and prepares students for high-level innovation competitions.",
        curriculum: [
            { title: "Scientific Inquiry", description: "Applying the scientific method to real-world technology challenges." },
            { title: "Cross-Tech Projects", description: "Building systems like smart greenhouses using IoT and sensors." },
            { title: "Data Analysis in STEM", description: "Using technology to analyze and interpret scientific data." },
            { title: "Innovation & Intellectual Property", description: "Understanding patents and how to protect original inventions." },
            { title: "Global STEM Competitions", description: "Preparing for international events like FIRST Robotics and World Robot Olympiad." }
        ],
        faqs: [
            { question: "Is this for advanced students?", answer: "This module is designed to challenge students who have a strong interest in interdisciplinary works." },
            { question: "Can we pick our own projects?", answer: "Yes, the latter half of the module is project-led by student interests." },
            { question: "What is the biggest outcome?", answer: "Developing a mindset that sees how different fields interact to solve big problems." }
        ]
    },
];
