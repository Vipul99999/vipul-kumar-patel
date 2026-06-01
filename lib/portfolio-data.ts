export const profileData = {
  name: 'Vipul Kumar Patel',
  title: 'oftware Engineer | Backend & Full-Stack Development | Scalable Systems | AI Enthusiast',
  avatar: '/vipul-kumar-patel.png', 
  email: 'vipul20020308@gmail.com', // Replace with your real email
  phone: '+91 7458927442', // Replace with your real phone number
  birthday: 'March 08, 2002', 
  location: 'Mirzapur, Uttar Pradesh, India',
  social: {
    github: 'https://github.com/Vipul99999',
    linkedin: 'https://www.linkedin.com/in/vipul-kumar-patel-90b1242b1/',
  },
}

export const aboutData = {
  description: [
    "I'm a Software Engineer specializing in Backend Development, Full-Stack Applications, and Scalable System Design. I enjoy building production-grade software with clean architecture, secure authentication, efficient database design, caching strategies, and high-performance APIs that solve real-world problems.",

    "Alongside modern web engineering, I actively explore Artificial Intelligence, Generative AI, document intelligence, computer vision, prompt engineering, and LLM-powered applications. My goal is to combine strong software engineering fundamentals with intelligent systems to build reliable, scalable, and impactful products."
  ],

  highlightsData: [
    {
      number: '800+',
      label: 'DSA Problems Solved',
    },
    {
      number: '10+',
      label: 'Production Projects',
    },
    {
      number: '1+',
      label: 'Years Industry Experience',
    },
    {
      number: '4+',
      label: 'AI-Powered Applications',
    },
  ],

  services: [
    {
      icon: 'Code',
      title: 'Backend Engineering',
      description:
        'Designing scalable APIs, authentication systems, caching layers, database architectures, background workers, and distributed backend services using Node.js, Express, FastAPI, PostgreSQL, MongoDB, and Redis.'
    },
    {
      icon: 'Smartphone',
      title: 'Full-Stack Development',
      description:
        'Building responsive, production-ready web applications with React.js, Next.js, TypeScript, Tailwind CSS, Zustand, and modern frontend engineering practices.'
    },
    {
      icon: 'Zap',
      title: 'AI-Powered Applications',
      description:
        'Developing practical AI solutions using OCR, computer vision, document intelligence, prompt engineering, vector search, and emerging LLM workflows.'
    }
  ],

  engineeringFocus: [
    {
      title: 'Scalable Systems',
      text: 'Building backend architectures that remain maintainable, reliable, and efficient as complexity and traffic grow.'
    },
    {
      title: 'Performance',
      text: 'Optimizing APIs, database queries, caching strategies, and application responsiveness to deliver better user experiences.'
    },
    {
      title: 'AI Integration',
      text: 'Exploring practical applications of LLMs, OCR, computer vision, vector search, and intelligent automation.'
    },
    {
      title: 'Continuous Learning',
      text: 'Actively improving through DSA practice, system design, open-source projects, and emerging technologies.'
    }
  ],

  technologies: [
    'Node.js',
    'TypeScript',
    'React.js',
    'Next.js',
    'PostgreSQL',
    'Redis',
    'MongoDB',
    'FastAPI',
    'Python',
    'C/C++',
    'Linux',
    'Docker',
    'Git & GitHub',
    'Generative AI & RAG (LangChain)',
    'Prompt Engineering',
    'Redis',
    'Tailwind CSS',
    'System Design & Architecture',
    'Data Structures & Algorithms',
    'Authentication & Security',

  ]
}

export const resumeData = {
  education: [
    {
      title: 'Bachelor of Technology in Computer Science & Engineering',
      period: 'Oct 2023 — May 2026',
      description:
        'Pursuing B.Tech in Computer Science and Engineering at Pranveer Singh Institute of Technology, Kanpur. Focused on Data Structures & Algorithms, System Design, Backend Engineering, Databases, and Scalable Web Systems.'
    },
    {
      title: 'Diploma in Electronics Engineering',
      period: 'Jul 2018 — Sep 2021',
      description:
        'Completed Diploma in Electronics Engineering from Government Polytechnic Mirzapur. Developed strong foundations in electronics, industrial systems, troubleshooting, and technical problem-solving.'
    }
  ],

  experience: [
    {
      title: 'Software Engineer (Projects & Open Source)',
      period: '2024 — Present',
      description:
        'Building production-grade full-stack applications, backend APIs, authentication systems, AI-powered applications, and distributed web services using Node.js, React, FastAPI, PostgreSQL, Redis, and TypeScript.'
    },
    {
      title: 'Jr Engineer (Quality) — VVDN Technologies',
      period: '2022 — 2023',
      description:
        'Performed quality validation, production analysis, root-cause investigation, and reliability improvement for large-scale electronic manufacturing systems.'
    }
  ],
  skills: [
    { name: 'Python & FastAPI', level: 95 },
    { name: 'Pydantic & Data Contracts', level: 95 },
    { name: 'Generative AI & RAG (LangChain)', level: 85 },
    { name: 'Prompt Engineering', level: 80 },
    { name: 'Databases (PostgreSQL, MongoDB, SQL & Redis)', level: 88 },
    { name: 'Node.js & Express.js', level: 92 },
    { name: 'React.js & Next.js', level: 90 },
    { name: 'TypeScript & JavaScript', level: 90 },
    { name: 'REST APIs & Authentication', level: 90 },
    { name: 'System Design & Backend Architecture', level: 85 },
    { name: 'Data Structures & Algorithms', level: 88 }
  ],
}

export const portfolioData = {
  categories: ['all', 'ai', 'full-stack', 'backend', 'applications'],

  projects: [
    {
      title: 'IDoc AI',
      category: 'ai',
      featured: true,
      ai: true,
      status: 'In Progress',

      image: '/projects/idoc-ai.png',

      description:
        'AI-powered document intelligence platform for OCR extraction, document analysis, search, translation, formatting, and knowledge retrieval workflows.',

      tech: [
        'Next.js',
        'TypeScript',
        'Python',
        'OCR',
        'NLP',
        'Docker'
      ],

      metrics: [
        'Document Intelligence',
        'OCR Processing',
        'Knowledge Retrieval'
      ],

      liveUrl: '',
      githubUrl: 'https://github.com/Vipul99999/IDoc-ai'
    },

    {
      title: 'PenBot AI',
      category: 'ai',
      featured: true,
      ai: true,
      status: 'Public',

      image: '/pnebot-dashBoard-page.png',

      description:
        'AI-powered note digitization platform that converts handwritten notes and PDFs into structured, searchable, and editable digital content.',

      tech: [
        'React.js',
        'FastAPI',
        'MongoDB',
        'TypeScript',
        'OCR',
        'Tesseract.js'
      ],

      metrics: [
        'OCR Pipeline',
        'PDF Processing',
        'Searchable Notes'
      ],

      liveUrl: '',
      githubUrl: 'https://github.com/Vipul99999/PenBot-AI'
    },

    {
      title: 'FaceCheck',
      category: 'ai',
      featured: true,
      ai: true,
      status: 'Public',

      image: '/face-detection-attendance-system.png',

      description:
        'Face recognition attendance platform featuring anti-spoofing validation, real-time attendance tracking, and analytics dashboards.',

      tech: [
        'Python',
        'FastAPI',
        'React.js',
        'InsightFace',
        'OpenCV',
        'SQLite'
      ],

      metrics: [
        'Face Recognition',
        'Anti-Spoof Detection',
        'Attendance Analytics'
      ],

      liveUrl: 'https://face-check-six.vercel.app/',
      githubUrl: 'https://github.com/Vipul99999/FaceCheck'
    },

    {
      title: 'Placement Prep AI',
      category: 'ai',
      featured: true,
      ai: true,
      status: 'Private',

      image: '/projects/placement-prep.png',

      description:
        'AI-assisted preparation platform providing company-specific interview preparation, resume analysis, and personalized learning workflows.',

      tech: [
        'Next.js',
        'TypeScript',
        'MongoDB',
        'Gemini API',
        'Tailwind CSS'
      ],

      metrics: [
        'Resume Analysis',
        'Interview Preparation',
        'Learning Roadmaps'
      ],

      liveUrl: '',
      githubUrl: 'https://github.com/Vipul99999/placement-prep-ai'
    },

    {
      title: 'Distributed Task Management System (TUDU)',
      category: 'full-stack',
      featured: true,
      status: 'Public',

      image: '/tudu-home-page.png',

      description:
        'Distributed task management platform with service-oriented architecture, secure authentication, RBAC, and PostgreSQL-backed workflows.',

      tech: [
        'Next.js',
        'TypeScript',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Prisma'
      ],

      metrics: [
        'Service Separation',
        'JWT Authentication',
        'RBAC System'
      ],

      liveUrl: '',
      githubUrl: 'https://github.com/Vipul99999/Distributed-Task-Management-System-TUDU-'
    },

    {
      title: 'High-Performance URL Shortener(Usr)',
      category: 'backend',
      status: 'Private',

      image: '/projects/url-shortener.png',

      description:
        'Scalable URL shortening service featuring Redis caching, analytics, rate limiting, Base62 encoding, and background workers.',

      tech: [
        'Node.js',
        'TypeScript',
        'PostgreSQL',
        'Redis',
        'Prisma'
      ],

      metrics: [
        'Redis Cache',
        'Analytics Tracking',
        'Background Workers'
      ],

      liveUrl: '',
      githubUrl: 'https://github.com/Vipul99999/Usr'
    },

    {
      title: 'Authentication & Authorization Service',
      category: 'backend',
      status: 'Public',

      image: '/vipul-auth.png',

      description:
        'Production-grade authentication service featuring JWT rotation, RBAC, OAuth integration, email verification, and session management.',

      tech: [
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'OAuth2'
      ],

      metrics: [
        'JWT Rotation',
        'OAuth Integration',
        'RBAC Authorization'
      ],

      liveUrl: 'https://vipul-auth.vercel.app/',
      githubUrl: 'https://github.com/Vipul99999/VipulAuth'
    },

    {
      title: 'JS Clarity Lab',
      category: 'applications',
      status: 'Public',

      image: '/js-clarity-lab.png',

      description:
        'Interactive educational platform visualizing JavaScript execution, asynchronous behavior, closures, and event-loop concepts.',

      tech: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript'
      ],

      metrics: [
        'Execution Visualizer',
        'Event Loop Simulation',
        'Interactive Learning'
      ],

      liveUrl: 'https://js-clarity-lab.vercel.app/',
      githubUrl: 'https://github.com/Vipul99999/JS-Clarity-Lab'
    },

    {
      title: 'Kaise Bolu',
      category: 'applications',
      status: 'Live',

      image: '/kaise-bolu.png',

      description:
        'Mobile-first conversation assistant generating context-aware replies with privacy-first local processing.',

      tech: [
        'React',
        'Vite',
        'Tailwind CSS',
        'PWA'
      ],

      metrics: [
        'Offline Support',
        'PWA Experience',
        'Local Processing'
      ],

      liveUrl: 'https://kaise-bolu.vercel.app/',
      githubUrl: 'https://github.com/Vipul99999/kaise-bolu'
    },

    {
      title: 'Typezy',
      category: 'applications',
      status: 'Private',

      image: '/typezy.png',

      description:
        'Multilingual typing platform featuring WPM tracking, analytics, accuracy monitoring, and local-first performance metrics.',

      tech: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Zustand',
        'Recharts'
      ],

      metrics: [
        'Typing Analytics',
        'WPM Tracking',
        'Multilingual Support'
      ],

      liveUrl: 'https://typezy-five.vercel.app/',
      githubUrl: ''
    }
  ]
};

export const blogData = {
  posts: [
    {
      title: 'Building Fail-Safe REST APIs with Pydantic v2 and FastAPI',
      category: 'Backend Architecture',
      date: 'May 24, 2026',
      readTime: '6 min',
      image: '/projects/pydantic.png',
      excerpt: 'How to implement strict type contracts, advanced TypeAdapters, and custom field-level error formatters for client-side debugging.',
      tags: ['FastAPI', 'Python', 'Pydantic v2', 'API Design'],
      slug: 'building-fail-safe-apis-fastapi-pydantic',
    },
    {
      title: 'Context Engineering: Designing Smarter Full-Stack AI Companions',
      category: 'Generative AI',
      date: 'May 10, 2026',
      readTime: '7 min',
      image: '/projects/penbot-ai.png',
      excerpt: 'A practical look into processing unstructured text layouts, orchestrating prompts via LangChain, and managing local client-side privacy boundaries.',
      tags: ['LangChain', 'GenAI', 'FastAPI', 'React.js'],
      slug: 'context-engineering-full-stack-ai-companions',
    },
    {
      title: 'Optimizing Client-Side State for Local-First, Privacy-Focused PWAs',
      category: 'Frontend Engineering',
      date: 'Apr 15, 2026',
      readTime: '5 min',
      image: '/projects/kaise-bolu.png',
      excerpt: 'Bypassing complex backend servers completely by structuring lightweight offline-first matching patterns inside the client browser.',
      tags: ['React 18', 'Vite', 'PWA', 'Tailwind CSS'],
      slug: 'optimizing-local-first-pwa-state',
    },
    {
      title: 'Demystifying Biometric Face Recognition Embeddings in Python',
      category: 'Computer Vision',
      date: 'Mar 28, 2026',
      readTime: '8 min',
      image: '/projects/facecheck.png',
      excerpt: 'An architectural deep-dive into computing face recognition vectors, processing distance thresholds, and setting up anti-spoofing validation.',
      tags: ['Python', 'FastAPI', 'InsightFace', 'Computer Vision'],
      slug: 'biometric-face-recognition-embeddings-python',
    }
  ],
}

export const contactData = {
  email: 'vipul20020308@gmail.com', 
  phone: '+91 7458927442', 
  location: 'Mirzapur, Uttar Pradesh, India',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.6291667106!2d80.94616585!3d26.8466937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b17b%3A0xfa111141942e631d!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1717142400000!5m2!1sen!2sin', 
}