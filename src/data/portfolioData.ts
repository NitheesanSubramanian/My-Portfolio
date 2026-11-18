import { Project, SkillGroup, EducationItem, ExperienceItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Nitheesan S",
  title: "Software Developer | AI & Machine Learning Enthusiast | Full-Stack Developer | Cybersecurity Enthusiast",
  shortRole: "Software Developer & AI Engineer",
  location: "Coimbatore, Tamil Nadu, India",
  email: "NitheesanS10@gmail.com",
  phone: "+91 6383877317",
  github: "https://github.com/nitheesan", // Editable placeholder
  linkedin: "https://linkedin.com/in/nitheesan-s", // Editable placeholder
  resumePdf: "/documents/resume.pdf",
  cehCertificatePdf: "/documents/ceh-Certificate.pdf",
  portraitImage: "/images/nitheesan-portrait.jpg",
  summary: "I am a Computer Science and Business Systems engineering student passionate about building intelligent, scalable, and user-focused software solutions. My technical interests include full-stack development, artificial intelligence, machine learning, generative AI, retrieval-augmented generation, and cybersecurity. I enjoy exploring emerging technologies and transforming complex problems into practical applications. Through academic projects, technical experiments, and independent learning, I continuously work on strengthening my programming and engineering skills. My ambition is to become a skilled software engineer and contribute to innovative technology-driven products.",
  languages: [
    { language: "Tamil", proficiency: "Native / Full Professional" },
    { language: "English", proficiency: "Professional Working" }
  ],
  coreCompetencies: [
    "Analytical Thinking",
    "Problem-Solving",
    "Technical Documentation",
    "Attention to Detail",
    "Time Management",
    "Team Collaboration",
    "Verbal & Written Communication",
    "Continuous Learning"
  ],
  developmentPhilosophy: [
    {
      title: "Clean & Modular Architecture",
      description: "Writing maintainable, scalable, and well-structured code with decoupled services and reusable design patterns."
    },
    {
      title: "Data-Driven Intelligence",
      description: "Harnessing statistical learning and AI models to convert raw information into actionable digital insights."
    },
    {
      title: "Security by Design",
      description: "Incorporating proactive vulnerability awareness, penetration testing concepts, and defensive principles from day one."
    },
    {
      title: "User-Centric Engineering",
      description: "Balancing sophisticated backend mechanics with intuitive, responsive, and accessible frontend interfaces."
    }
  ]
};

export const featuredProjectsSummary = [
  "AI-Based Career Intelligence System",
  "Drift-Aware Adaptive RAG",
  "Live Classroom Attendance & Performance Tracker"
];

export const projectsData: Project[] = [
  {
    id: "career-intelligence",
    title: "AI-Based Career Intelligence System",
    category: "Artificial Intelligence",
    secondaryCategories: ["Generative AI", "Data Science"],
    featured: true,
    badge: "Featured AI Platform",
    tagline: "Intelligent career navigation and skill-based trajectory mapping platform",
    description: "An AI-powered career intelligence platform designed to help individuals understand their current skills, explore suitable career paths, and make informed career progression decisions through intelligent career guidance, skill-based exploration, and personalized career analytics.",
    technologies: ["Python", "Generative AI", "NLP", "Machine Learning", "FastAPI", "React.js"],
    highlights: [
      "Intelligent Career Guidance",
      "Skill-Based Career Exploration",
      "AI-Powered Analysis",
      "Personalized Career Intelligence"
    ],
    features: [
      "Comprehensive multi-dimensional skill profiling and benchmark matching",
      "Dynamic trajectory mapping for emerging software engineering and AI roles",
      "Personalized learning and upskilling recommendations based on target positions",
      "Real-time evaluation of industry requirements versus candidate portfolio"
    ],
    architecture: [
      "Natural Language skill parser extracting core competencies from user inputs",
      "Vector similarity engine comparing profile vectors against current industry taxonomies",
      "Contextual recommendation pipeline generating custom milestone roadmaps",
      "Responsive user interface rendering interactive career progression charts"
    ],
    githubUrl: "#", // Placeholder
    liveDemoUrl: "#", // Placeholder
    image: "/images/projects/career-ai.svg"
  },
  {
    id: "drift-aware-rag",
    title: "Drift-Aware Adaptive Retrieval-Augmented Generation for Enterprise Knowledge Management",
    category: "Generative AI",
    secondaryCategories: ["Artificial Intelligence", "Machine Learning"],
    featured: true,
    badge: "Enterprise RAG Architecture",
    tagline: "Adaptive knowledge retrieval system designed to mitigate information drift and hallucinations",
    description: "An enterprise-focused adaptive RAG system designed to improve knowledge retrieval and handle evolving enterprise information. Incorporates a Knowledge Evolution Engine that detects knowledge drift, combines dense and BM25 hybrid retrieval, performs context fusion, and applies rigorous evidence verification to reduce hallucinations.",
    technologies: [
      "Python",
      "RAG",
      "Vector Database",
      "Knowledge Graph",
      "BM25",
      "Dense Retrieval",
      "Hybrid Retrieval",
      "NLP"
    ],
    highlights: [
      "Knowledge Evolution Engine",
      "Knowledge Drift Detection",
      "Vector Database & Knowledge Graph",
      "Metadata and Version History",
      "Dense Retrieval & BM25 Retrieval",
      "Hybrid Retrieval & Query Intelligence",
      "Context Fusion & Evidence Verification",
      "Hallucination Reduction"
    ],
    features: [
      "Continuous monitoring of source documents for semantic and temporal drift",
      "Dual indexing with high-dimensional vector embeddings and inverted lexical BM25 indices",
      "Knowledge graph topology preserving entity relationships and enterprise hierarchies",
      "Query intelligence re-writing and intent decomposition before document fetch",
      "Automated evidence verification checking retrieved source citations against synthesized answers"
    ],
    architecture: [
      "Ingestion & Evolution Layer: Version-aware document chunking and metadata tracking",
      "Hybrid Retrieval Layer: Reciprocal Rank Fusion (RRF) between dense vectors and sparse BM25",
      "Knowledge Graph Linking: Triplet extraction preserving corporate entity relationships",
      "Synthesis & Verification Guardrails: Fact-checking pipeline preventing generative drift"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    image: "/images/projects/rag-drift.svg"
  },
  {
    id: "classroom-tracker",
    title: "Live Classroom Attendance & Performance Tracker",
    category: "Full-Stack Development",
    secondaryCategories: ["All Projects"],
    featured: true,
    badge: "Full-Stack Web App",
    tagline: "Real-time classroom management application for student attendance and academic tracking",
    description: "A comprehensive classroom management application designed to help teachers and administrators monitor student attendance and academic performance with precision, automated logging, and responsive controls.",
    technologies: ["React.js", "Spring Boot", "REST APIs", "MySQL", "Tailwind CSS"],
    highlights: [
      "Student score tracking from 0–100",
      "Automatic timestamps",
      "Search and filtering",
      "Date and time sorting",
      "Delete records with confirmation",
      "Teacher/admin dashboard"
    ],
    features: [
      "Interactive student scoring system supporting range validation (0-100)",
      "Automated audit timestamps for check-ins, record creation, and score modifications",
      "Multi-field search across student names, roll numbers, and performance bands",
      "Bidirectional date/time sorting for longitudinal attendance reviews",
      "Secure modal confirmation workflow before record deletion to prevent data loss",
      "Teacher administrative control panel with aggregate attendance percentage graphs"
    ],
    architecture: [
      "Frontend: React SPA with optimistic UI updates and responsive state management",
      "Backend: Spring Boot REST controllers with tiered service and repository layers",
      "Data Layer: Relational schema ensuring referential integrity across course sections"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    image: "/images/projects/classroom.svg"
  },
  {
    id: "knn-tomato-prediction",
    title: "KNN-Based Tomato Quality Prediction",
    category: "Machine Learning",
    secondaryCategories: ["Data Science"],
    featured: false,
    badge: "ML Experiment",
    tagline: "Parametric fruit quality classification using nearest-neighbor metrics",
    description: "A machine learning experiment utilizing the K-Nearest Neighbors algorithm to predict and classify tomato quality based on sweetness, crunchiness, and physical produce parameters, benchmarking Euclidean versus Manhattan distance metrics.",
    technologies: ["Python", "Scikit-Learn", "KNN", "Pandas", "Matplotlib", "NumPy"],
    highlights: [
      "Euclidean Distance Metric",
      "Manhattan Distance Metric",
      "KNN Classification",
      "Nearest-Neighbor Analysis"
    ],
    features: [
      "Multi-metric distance benchmarking (Euclidean vs. Manhattan) across test clusters",
      "Optimization of hyperparameter K using cross-validated error curve analysis",
      "Feature normalization to balance sweetness Brix levels and texture crunchiness scores",
      "Visual decision boundary rendering showing cluster boundaries for ripe vs. suboptimal fruit"
    ],
    architecture: [
      "Dataset normalization using Min-Max scaling",
      "Distance calculation matrix implementation",
      "Boundary classification and confusion matrix visualization"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    image: "/images/projects/knn-tomato.svg"
  },
  {
    id: "iris-flower-classification",
    title: "Iris Flower Classification",
    category: "Machine Learning",
    secondaryCategories: ["Data Science"],
    featured: false,
    badge: "Pattern Recognition",
    tagline: "Classic morphological classification experiment using supervised KNN",
    description: "A foundational supervised machine learning classification experiment using the standard Iris dataset to classify botanical species based on sepal and petal measurements.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Seaborn", "Jupyter"],
    highlights: [
      "KNN Algorithm",
      "Dataset Preparation",
      "Classification Workflows",
      "Performance Evaluation"
    ],
    features: [
      "Exploratory data analysis with pair plots and correlation heatmaps",
      "Train-test splitting with stratified sampling to preserve class distributions",
      "Precision, recall, and F1-score evaluation across Setosa, Versicolor, and Virginica classes",
      "Analysis of sepal length/width vs. petal length/width discriminant power"
    ],
    architecture: [
      "Data preprocessing and feature scaling pipeline",
      "Supervised KNN model fit and prediction",
      "Classification report and confusion matrix generation"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    image: "/images/projects/iris.svg"
  },
  {
    id: "online-shopping-analyzer",
    title: "AI-Based Online Shopping Order Analyzer",
    category: "Artificial Intelligence",
    secondaryCategories: ["Generative AI", "Data Science"],
    featured: false,
    badge: "NLP & Data Extraction",
    tagline: "Automated transaction parsing engine converting unstructured invoices into verified JSON",
    description: "An AI-powered transaction extraction and categorization experiment that converts unstructured shopping receipts and order confirmation text into normalized, schema-validated JSON structures.",
    technologies: ["Python", "NLP", "Regex", "Pydantic", "JSON Validation", "FastAPI"],
    highlights: [
      "Transaction Extraction",
      "Merchant Identification",
      "Amount & Currency Extraction",
      "Date Identification",
      "Payment Method Classification",
      "Shopping Category Classification",
      "Structured JSON Validation"
    ],
    features: [
      "Robust entity recognition extracting merchant names, transaction dates, and line items",
      "Currency and monetary value standardization across multiple regional formats",
      "Rule-assisted NLP classifier mapping orders to retail categories (Electronics, Apparel, Groceries)",
      "Strict Pydantic schema validation preventing malformed output and missing keys"
    ],
    architecture: [
      "Text ingestion and normalization pipeline",
      "Information extraction pipeline combining regex heuristics and semantic token classification",
      "Pydantic data model validation verifying field types and business constraints",
      "Structured JSON output ready for downstream financial aggregation"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    image: "/images/projects/shopping-analyzer.svg"
  },
  {
    id: "smartphone-review-summarizer",
    title: "Smartphone Review Summarizer",
    category: "Generative AI",
    secondaryCategories: ["Artificial Intelligence", "Data Science"],
    featured: false,
    badge: "NLP Summarization",
    tagline: "Natural Language Processing experiment extracting consumer sentiments and core takeaways",
    description: "An NLP-based experiment designed to distill lengthy, multi-paragraph smartphone customer reviews into concise, actionable summaries highlighting product pros, cons, and customer sentiments.",
    technologies: ["Python", "NLP", "Transformers", "Text Processing", "HuggingFace"],
    highlights: [
      "Review Distillation & Summarization",
      "Aspect-Based Feature Extraction",
      "Customer Sentiment Analysis",
      "Key Feedback Aggregation"
    ],
    features: [
      "Aspect-based keyword clustering (Camera quality, Battery life, Display, Thermal performance)",
      "Extractive and abstractive text summarization workflows for customer testimonials",
      "Sentiment polarity scoring per hardware component",
      "Exportable executive summary reports for product benchmarking"
    ],
    architecture: [
      "Text tokenization and noise removal (emojis, formatting tags)",
      "Aspect extraction layer identifying mobile hardware components",
      "Summarization module generating concise multi-aspect highlights"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    image: "/images/projects/review-summarizer.svg"
  },
  {
    id: "data-preprocessing-pipeline",
    title: "Data Preprocessing and Machine Learning Workflow",
    category: "Data Science",
    secondaryCategories: ["Machine Learning"],
    featured: false,
    badge: "Data Engineering",
    tagline: "End-to-end data cleaning, imputation, encoding, and baseline classification pipeline",
    description: "A comprehensive machine learning workflow demonstrating robust exploratory analysis, handling missing values through statistical imputation, categorical encoding, feature scaling, and comparative baseline classification.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    highlights: [
      "Missing-Value Handling & Imputation",
      "Data Cleaning & Outlier Detection",
      "Categorical Encoding (One-Hot & Ordinal)",
      "Dataset Preparation & Scaling",
      "Classification Workflows"
    ],
    features: [
      "Automated assessment of missing data mechanisms (MCAR, MAR)",
      "Multi-strategy imputation comparison (Mean, Median, Iterative/KNN Imputer)",
      "One-hot and label encoding for heterogeneous tabular features",
      "Feature scaling using StandardScaler and RobustScaler to dampen outlier influence",
      "Model evaluation across baseline linear, tree-based, and distance classifiers"
    ],
    architecture: [
      "Scikit-Learn Pipeline composing transformers and estimators",
      "Data profiling reporting skewness, kurtosis, and correlation matrices",
      "Evaluation reporting with cross-validated ROC-AUC and accuracy metrics"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    image: "/images/projects/data-prep.svg"
  }
];

export const skillGroupsData: SkillGroup[] = [
  {
    category: "Programming",
    icon: "Code2",
    description: "Core languages utilized for software development, systems logic, and data analysis.",
    skills: [
      { name: "Java", proficiencyLevel: "Proficient", description: "Object-oriented software development, enterprise backends, data structures", highlight: true },
      { name: "Python", proficiencyLevel: "Proficient", description: "AI/ML modeling, scientific computing, automation scripts, backend APIs", highlight: true }
    ]
  },
  {
    category: "Frontend",
    icon: "Layout",
    description: "Modern client-side libraries and mobile frameworks for responsive user interfaces.",
    skills: [
      { name: "React.js", proficiencyLevel: "Proficient", description: "Single-page applications, component state, hooks, virtual DOM", highlight: true },
      { name: "React Native", proficiencyLevel: "Practical Exposure", description: "Cross-platform mobile application development" },
      { name: "Expo", proficiencyLevel: "Practical Exposure", description: "Rapid mobile prototyping, builds, and device testing workflows" }
    ]
  },
  {
    category: "Backend",
    icon: "Server",
    description: "Server architectures, RESTful interfaces, and modular backend services.",
    skills: [
      { name: "Node.js", proficiencyLevel: "Proficient", description: "Event-driven asynchronous JavaScript runtime for backend services" },
      { name: "Express.js", proficiencyLevel: "Proficient", description: "Lightweight web frameworks and middleware composition" },
      { name: "FastAPI", proficiencyLevel: "Proficient", description: "High-performance Python web APIs with automatic OpenAPI generation", highlight: true },
      { name: "Spring Boot", proficiencyLevel: "Proficient", description: "Enterprise Java microservices, dependency injection, REST APIs", highlight: true },
      { name: "REST APIs", proficiencyLevel: "Proficient", description: "RESTful architecture, stateless HTTP methods, CRUD design patterns" },
      { name: "Microservices", proficiencyLevel: "Practical Exposure", description: "Service modularization, decoupled communication, API gateways" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Relational and document storage solutions for structured and unstructured data.",
    skills: [
      { name: "PostgreSQL", proficiencyLevel: "Proficient", description: "Relational database modeling, complex queries, ACID compliance", highlight: true },
      { name: "MongoDB", proficiencyLevel: "Proficient", description: "NoSQL document store, BSON aggregation pipelines, flexible schemas" },
      { name: "MySQL", proficiencyLevel: "Proficient", description: "Relational tables, indexing, transactions, and schema normalization" },
      { name: "SQLite", proficiencyLevel: "Proficient", description: "Lightweight embedded database engine for local and testing workflows" }
    ]
  },
  {
    category: "Artificial Intelligence and Machine Learning",
    icon: "BrainCircuit",
    description: "Machine learning algorithms, deep learning models, generative AI, and RAG architectures.",
    skills: [
      { name: "Machine Learning", proficiencyLevel: "Proficient", description: "Supervised and unsupervised learning, model tuning, validation", highlight: true },
      { name: "TensorFlow", proficiencyLevel: "Practical Exposure", description: "Deep learning workflows, tensor operations, computational graphs" },
      { name: "Keras", proficiencyLevel: "Practical Exposure", description: "High-level neural network prototyping and model layers" },
      { name: "Natural Language Processing", proficiencyLevel: "Proficient", description: "Tokenization, text classification, summarization, sentiment analysis", highlight: true },
      { name: "Generative AI", proficiencyLevel: "Proficient", description: "Large Language Models, prompt design, structured text outputs", highlight: true },
      { name: "Retrieval-Augmented Generation", proficiencyLevel: "Proficient", description: "Hybrid search, dense vector embeddings, context grounding", highlight: true },
      { name: "ARIMA", proficiencyLevel: "Practical Exposure", description: "Autoregressive Integrated Moving Average for time-series forecasting" },
      { name: "LSTM", proficiencyLevel: "Practical Exposure", description: "Long Short-Term Memory recurrent networks for sequential data" },
      { name: "Prophet", proficiencyLevel: "Practical Exposure", description: "Additive time-series forecasting with seasonal trend modeling" }
    ]
  },
  {
    category: "Cybersecurity and Ethical Hacking",
    icon: "ShieldAlert",
    description: "Security assessment, penetration testing concepts, system hardening, and defensive practices.",
    skills: [
      { name: "Linux", proficiencyLevel: "Proficient", description: "System administration, shell scripting, permissions, process management", highlight: true },
      { name: "Go", proficiencyLevel: "Practical Exposure", description: "Concurrent programming, tooling, and systems security experiments" },
      { name: "Python", proficiencyLevel: "Proficient", description: "Security tooling, packet analysis scripts, automation workflows" },
      { name: "Social Engineering Concepts", proficiencyLevel: "Practical Exposure", description: "Human factor vulnerabilities, phishing awareness, vector analysis" },
      { name: "Wi-Fi Security", proficiencyLevel: "Practical Exposure", description: "WPA/WPA2 handshakes, network reconnaissance, rogue AP concepts" },
      { name: "Web Application Penetration Testing", proficiencyLevel: "Practical Exposure", description: "OWASP Top 10 vulnerabilities, injection testing, authentication flaws", highlight: true },
      { name: "API Penetration Testing", proficiencyLevel: "Practical Exposure", description: "Broken object level authorization (BOLA), parameter tampering, rate limits" },
      { name: "Mobile Application Penetration Testing", proficiencyLevel: "Practical Exposure", description: "APK reverse engineering concepts, insecure data storage inspection" },
      { name: "Active Directory Security Testing", proficiencyLevel: "Practical Exposure", description: "Domain trust enumeration, Kerberos attack vectors, privilege escalation concepts" },
      { name: "Hardware and RF Security", proficiencyLevel: "Practical Exposure", description: "Radio frequency basics, hardware debugging interfaces" },
      { name: "IoT Security", proficiencyLevel: "Practical Exposure", description: "Firmware extraction concepts, protocol security (MQTT, BLE)" }
    ]
  },
  {
    category: "Cloud and DevOps",
    icon: "Cloud",
    description: "Cloud computing infrastructure, containerization, and automated delivery pipelines.",
    skills: [
      { name: "AWS EC2", proficiencyLevel: "Practical Exposure", description: "Elastic Compute Cloud virtual instance provisioning and configuration" },
      { name: "AWS S3", proficiencyLevel: "Practical Exposure", description: "Scalable object storage, access control policies, static assets" },
      { name: "Microsoft Azure", proficiencyLevel: "Practical Exposure", description: "Cloud computing fundamentals, resource groups, Azure services (AZ-900)" },
      { name: "Docker", proficiencyLevel: "Practical Exposure", description: "Container creation, Dockerfile authoring, multi-container compose" },
      { name: "CI/CD", proficiencyLevel: "Practical Exposure", description: "Continuous integration and automated build verification" },
      { name: "GitHub Actions", proficiencyLevel: "Practical Exposure", description: "Automated workflow scripts for test execution and deployments" }
    ]
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    description: "Version control, API collaboration, testing utilities, and API documentation standards.",
    skills: [
      { name: "Git", proficiencyLevel: "Proficient", description: "Distributed version control, branching workflows, merge resolution", highlight: true },
      { name: "GitHub", proficiencyLevel: "Proficient", description: "Repository management, pull requests, issue tracking, collaboration" },
      { name: "Postman", proficiencyLevel: "Proficient", description: "REST API testing, request collections, environment variables, test scripts", highlight: true },
      { name: "Swagger / OpenAPI", proficiencyLevel: "Proficient", description: "Interactive API documentation, schema definition, endpoint specification" }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "skcet-btech",
    institution: "Sri Krishna College of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    degree: "B.Tech – Computer Science and Business Systems (CSBS)",
    period: "2024–2027",
    score: "8.0",
    scoreLabel: "CGPA",
    description: "Pursuing specialized engineering curriculum combining core computer science foundations, algorithm design, software engineering methodologies, artificial intelligence, and strategic business systems.",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, Database Management Systems, and Web Technologies",
      "Advanced subjects in Machine Learning, Generative AI, Software Engineering, and Enterprise Architecture",
      "Active participant in technical symposiums, hackathons, and practical software design projects",
      "Maintained consistent academic record with a cumulative GPA of 8.0"
    ]
  },
  {
    id: "psg-polytechnic",
    institution: "PSG Polytechnic College",
    location: "Coimbatore, Tamil Nadu",
    degree: "Diploma in Information Technology",
    period: "Completed",
    description: "Established strong early foundations in computer systems, programming fundamentals, networking concepts, and relational databases at one of Tamil Nadu's premier technical institutions.",
    highlights: [
      "Hands-on laboratory training in structured programming (C, Java) and database design",
      "Hardware fundamentals, operating systems, and computer networking principles",
      "Developed problem-solving discipline and practical software development mindset"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "corporate-worms-intern",
    company: "Corporate Worms",
    role: "Machine Learning Intern",
    period: "Internship Period [Editable Placeholder]",
    location: "Industry Internship",
    isPlaceholderPeriod: true,
    summary: "Worked with machine learning concepts and practical implementation during an industry internship. Gained hands-on exposure to machine learning workflows, data analysis, model development, technical learning, and problem-solving.",
    responsibilities: [
      "Worked with machine learning concepts and practical implementation during an industry internship",
      "Gained hands-on exposure to machine learning workflows and model development",
      "Conducted exploratory data analysis, data cleaning, and preprocessing on structured datasets",
      "Collaborated with technical mentors to evaluate algorithmic approaches and troubleshoot implementation hurdles",
      "Strengthened practical coding skills in Python, data science packages, and analytical problem-solving"
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "Model Development", "NumPy", "Pandas"]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "ceh-cappriciosec",
    title: "Cybersecurity & Ethical Hacking",
    issuer: "CappricioSec University",
    date: "17 November 2026",
    durationOrScore: "42 Hours Intensive",
    credentialId: "7881f5a6f8d5246d59ad",
    pdfPath: "/documents/ceh-Certificate.pdf",
    badgeText: "Verified Credential",
    summary: "Comprehensive 42-hour intensive professional training program covering modern offensive and defensive cybersecurity domains, systems exploitation, wireless security, application penetration testing, Active Directory assessments, and IoT/RF analysis.",
    topics: [
      "Linux Administration & Hardening",
      "Go & Python for Security Tooling",
      "Social Engineering Vectors & Countermeasures",
      "Wi-Fi Security & Handshake Analysis",
      "Web Application Penetration Testing (OWASP)",
      "API Penetration Testing & Authentication Checks",
      "Mobile Application Penetration Testing",
      "Active Directory Security & Privilege Escalation",
      "Hardware and RF Security",
      "IoT Security Testing"
    ]
  },
  {
    id: "nptel-robotics",
    title: "NPTEL – Robotics",
    issuer: "NPTEL / IIT Ministry of Education",
    durationOrScore: "Score: 75 / 100",
    badgeText: "Elite Certification",
    summary: "Rigorous academic certification program covering robotics kinematics, dynamic modeling, sensors, actuator control systems, and robotic automation architectures.",
    topics: [
      "Spatial Transformations & Kinematics",
      "Actuator & Sensor Integration",
      "Trajectory Planning & Control Systems",
      "Industrial Robotics & Automation"
    ]
  },
  {
    id: "nptel-project-management",
    title: "NPTEL – Project Management",
    issuer: "NPTEL / IIT Ministry of Education",
    durationOrScore: "Score: 70 / 100",
    badgeText: "Certified Credential",
    summary: "Comprehensive certification covering strategic project life cycles, resource allocation, critical path method (CPM), PERT analysis, risk management, and quality control.",
    topics: [
      "Project Life Cycle & Planning",
      "Work Breakdown Structures (WBS)",
      "CPM & PERT Network Scheduling",
      "Risk Mitigation & Quality Assurance"
    ]
  }
];
