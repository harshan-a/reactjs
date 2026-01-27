type ProjectType = {
  title: string
  image: string
  description: string
  demoLink: string
  repoLink: string
  category: "frontend" | "backend" | "fullstack"
  techStack: string[]
}

const projectsData: ProjectType[] = [
  // Frontend Projects
  {
    title: "Youtube Homepage",
    image: "/images/projects/youtube-homepage.JPG",
    description:
      "A responsive YouTube Homepage UI clone built using HTML and CSS, focusing on layout structure and visual accuracy. This project helped strengthen my fundamentals in modern CSS and page layout design.",
    demoLink: "https://harshan-a.github.io/html-css-youtube-project",
    repoLink: "https://github.com/harshan-a/html-css-youtube-project",
    category: "frontend",
    techStack: ["HTML", "CSS"],
  },
  {
    title: "Amazon Clone",
    image: "/images/projects/amazon-clone.JPG",
    description:
      "A multi-page Amazon UI clone built to practice core JavaScript concepts and client-side data handling. The project simulates basic e-commerce flows like searching products, placing orders, and tracking them across pages. It helped me understand how real-world websites manage state and navigation without a backend.",
    demoLink: "https://harshan-a.github.io/javascript-amazon-project/",
    repoLink: "https://github.com/harshan-a/javascript-amazon-project",
    category: "frontend",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Rock Paper Scissors Game",
    image: "/images/projects/rock-paper-scissors.JPG",
    description:
      "An interactive Rock Paper Scissors game built to practice core JavaScript logic. The game simulates computer moves, tracks scores persistently, and provides both manual and automated gameplay modes. This project helped me solidify my understanding of functions, conditionals, and event handling in JavaScript.",
    demoLink: "https://harshan-a.github.io/javascript-rock-paper-scissors/",
    repoLink: "https://github.com/harshan-a/javascript-rock-paper-scissors",
    category: "frontend",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Calculator App",
    image: "/images/projects/calculator-app.JPG",
    description:
      "A simple and interactive Calculator web app built to practice JavaScript logic and DOM manipulation. The app performs basic arithmetic operations with proper input handling and error-free calculations. This project strengthened my understanding of event-driven programming in JavaScript.",
    demoLink: "https://harshan-a.github.io/javascript-calculator",
    repoLink: "https://github.com/harshan-a/javascript-calculator",
    category: "frontend",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Todo List App",
    image: "/images/projects/todo-list-app.JPG",
    description:
      "A simple Todo List application built to understand JavaScript fundamentals and DOM manipulation. Users can add tasks with a date and remove completed or unwanted todos. This project helped me practice event handling and dynamic content updates in JavaScript.",
    demoLink: "https://harshan-a.github.io/javascript-todo-list",
    repoLink: "https://github.com/harshan-a/javascript-todo-list",
    category: "frontend",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Hangman Game",
    image: "/images/projects/hangman-game.JPG",
    description:
      "A browser-based Hangman game where players guess a hidden word using hints and limited attempts. The game visually updates with each incorrect guess, making the gameplay engaging and intuitive. This game was built to practice JavaScript concepts after learning the fundamentals.",
    demoLink: "https://harshan-a.github.io/javascript-hangman-game",
    repoLink: "https://github.com/harshan-a/javascript-hangman-game",
    category: "frontend",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Typing Practice App",
    image: "/images/projects/typing-practice-app.JPG",
    description:
      "An interactive typing practice application inspired by platforms like 10FastFingers. Users can customize difficulty levels and time limits while receiving real-time performance metrics. This project was built to strengthen practical skills in React, TypeScript, and state management.",
    demoLink: "https://reactjs-typing-practice.onrender.com",
    repoLink: "https://github.com/harshan-a/reactjs-typing-practice",
    category: "frontend",
    techStack: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Memory Card Game",
    image: "/images/projects/memory-card-game.JPG",
    description:
      "An interactive memory card matching game built with React and TypeScript. Players flip cards to find matching pairs, with a move counter to track progress. This project helped me practice state management and event handling in React.",
    demoLink: "https://reactjs-memory-card-game-seba.onrender.com",
    repoLink: "https://github.com/harshan-a/reactjs-memory-card-game",
    category: "frontend",
    techStack: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Snake Game",
    image: "/images/projects/snake-game.JPG",
    description:
      "An interactive Snake game built with React and TypeScript. Players control a snake to eat food and grow longer, avoiding collisions with walls or itself. This project helped me practice state management and event handling in React.",
    demoLink: "https://reactjs-snake-game.onrender.com/",
    repoLink: "https://github.com/harshan-a/reactjs-snake-game",
    category: "frontend",
    techStack: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Chatbot",
    image: "/images/projects/chatbot.JPG",
    description:
      "A lightweight chatbot application that responds to a small set of predefined commands. The bot can perform simple actions like flipping a coin, rolling a dice, and showing the current date. This project was built while learning React to understand input handling and conditional rendering.",
    demoLink: "https://reactjs-chatbot.onrender.com/",
    repoLink: "https://github.com/harshan-a/reactjs-chatbot",
    category: "frontend",
    techStack: ["React", "TypeScript", "CSS"],
  },

  // Backend Projects
  {
    title: "JWT Based Authentication System",
    image: "/images/projects/jwt-authentication.JPG",
    description:
      "A server-side authentication system implementing JWT-based access and refresh tokens. The project focuses on secure session handling without relying on frontend-heavy logic. Built while learning modern authentication and authorization workflows.",
    demoLink: "https://nodejs-jwt-basics-infh.onrender.com/",
    repoLink: "https://github.com/harshan-a/nodejs-jwt-basics",
    category: "backend",
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "Nodejs",
      "Expressjs",
      "Mongodb atlas",
      "Mongoose",
      "JWT",
    ],
  },
  {
    title: "Jobs API Server",
    image: "/images/projects/jobs-api.JPG",
    description:
      "A backend-focused RESTful API for managing job postings with full CRUD functionality. The server uses token-based authentication to protect routes and ensure secure access. This project was built while learning real-world backend workflows and API design.",
    demoLink: "https://nodejs-jobs-api-mj3p.onrender.com/",
    repoLink: "https://github.com/harshan-a/nodejs-jobs-api",
    category: "backend",
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "Nodejs",
      "Expressjs",
      "Mongodb atlas",
      "Mongoose",
      "Swagger UI",
    ],
  },

  // Full-Stack Projects
  {
    title: "Task Manager",
    image: "/images/projects/task-manager.JPG",
    description:
      "A web-based Task Manager that allows users to create, update, and delete tasks in real time. The application persists data using a backend API and reflects task status changes instantly on the UI. This project was built while learning full-stack development and backend integration.",
    demoLink: "https://nodejs-task-manager-7pz2.onrender.com",
    repoLink: "https://github.com/harshan-a/nodejs-task-manager",
    category: "fullstack",
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "Nodejs",
      "Expressjs",
      "Mongodb atlas",
      "Mongoose",
    ],
  },
  {
    title: "E-commerce",
    image: "/images/projects/ecommerce.JPG",
    description:
      "A complete e-commerce platform (USD Pricing) built with a unified frontend–backend architecture. The application handles product browsing, cart management, orders, and order tracking. Built while learning full-stack development and production-ready deployment workflows.",
    demoLink: "https://mern-ecommerce-tqte.onrender.com/",
    repoLink: "https://github.com/harshan-a/mern-ecommerce",
    category: "fullstack",
    techStack: [
      "React",
      "TypeScript",
      "CSS",
      "Nodejs",
      "Expressjs",
      "Mongodb atlas",
      "Mongoose",
    ],
  },
  {
    title: "API Testing",
    image: "/images/projects/api-testing.JPG",
    description:
      "A self-built API testing application inspired by tools like Postman. It allows sending, saving, and organizing HTTP requests while inspecting full API responses. Created to test backend APIs locally without internet dependency.",
    demoLink: "https://mern-endpoint-explorer.onrender.com/",
    repoLink: "https://github.com/harshan-a/mern-api-testing",
    category: "fullstack",
    techStack: [
      "React",
      "TypeScript",
      "CSS",
      "Nodejs",
      "Expressjs",
      "Mongodb atlas",
      "Mongoose",
    ],
  },
]

export default projectsData
