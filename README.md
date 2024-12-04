## Stock Tracker Web Application
Project Overview
This repository contains the codebase for the Stock Tracker Web Application project. The application offers users features like a dynamic sidebar, stock fair value tracker, 
cryptocurrency data, and personalized dashboards.

    ├── front-end/
    │   ├── public/
    │   │   ├── index.html        # Main HTML file for the front-end
    │   │   ├── favicon.ico       # Favicon for the application
    │   └── src/
    │       ├── assets/           # Images, icons, and other static files
    │       ├── components/       # React components
    │       │   ├── Sidebar.js    # Dynamic sidebar component
    │       │   ├── HomePage.js   # Home page component
    │       │   ├── StockTracker.js # Stock fair value tracker component
    │       │   ├── CryptoPage.js # Crypto page component
    │       │   ├── Dashboard.js  # MyDashboard component
    │       ├── styles/           # CSS or Tailwind files for styling
    │       │   ├── main.css      # Main stylesheet
    │       ├── App.js            # Main React application file
    │       ├── index.js          # React entry point
    │       ├── api/              # API integrations
    │       │   ├── stockAPI.js   # Fetch stock data
    │       │   ├── cryptoAPI.js  # Fetch crypto data
    ├── back-end/
    │   ├── controllers/          # Controllers for business logic
    │   │   ├── userController.js # User authentication logic
    │   │   ├── dataController.js # Stock & crypto data management
    │   ├── models/               # Database models
    │   │   ├── User.js           # User model
    │   ├── routes/               # API routes
    │   │   ├── userRoutes.js     # Routes for user authentication
    │   │   ├── dataRoutes.js     # Routes for stock and crypto data
    │   ├── config/               # Configuration files
    │   │   ├── db.js             # Database connection
    │   │   ├── apiKeys.js        # External API keys
    │   ├── app.js                # Express.js application
    │   ├── server.js             # Node.js server entry point
    ├── tests/                    # Testing files
    │   ├── front-end/            # Front-end test cases
    │   │   ├── Sidebar.test.js   # Test for Sidebar component
    │   │   ├── Dashboard.test.js # Test for Dashboard component
    │   ├── back-end/             # Back-end test cases
    │       ├── userRoutes.test.js # Test for user routes
    │       ├── dataRoutes.test.js # Test for data routes
    ├── README.md                 # Project documentation
    ├── package.json              # Dependency manager for back-end
    ├── frontend-package.json     # Dependency manager for front-end
    └── .gitignore                # Ignored files in Git
