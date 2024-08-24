export const quizzes = [
    {
      id: 1,
      title: 'MongoDB',
      description: 'Test your knowledge of MongoDB, a popular NoSQL database.',
      questions: [
        {
          text: 'What type of database is MongoDB?',
          options: ['Relational', 'NoSQL', 'Graph', 'In-memory'],
          correctAnswer: 'NoSQL'
        },
        {
          text: 'What is a document in MongoDB?',
          options: ['A table row', 'A JSON-like data structure', 'A column', 'A database'],
          correctAnswer: 'A JSON-like data structure'
        },
        {
          text: 'Which of the following is NOT a valid data type in MongoDB?',
          options: ['String', 'Date', 'Boolean', 'Varchar'],
          correctAnswer: 'Varchar'
        },
        {
          text: 'What is the MongoDB equivalent of a table in relational databases?',
          options: ['Document', 'Collection', 'Field', 'Index'],
          correctAnswer: 'Collection'
        },
        {
          text: 'Which command is used to insert a document in MongoDB?',
          options: ['db.insert()', 'db.add()', 'db.insertOne()', 'db.pushOne()'],
          correctAnswer: 'db.insertOne()'
        },
        {
          text: 'What does BSON stand for in MongoDB?',
          options: ['Binary SQL', 'Binary JSON', 'Basic Object Notation', 'Backend Object Notation'],
          correctAnswer: 'Binary JSON'
        }
      ]
    },
    {
      id: 2,
      title: 'Express.js',
      description: 'Challenge yourself with questions about Express.js, a popular Node.js web application framework.',
      questions: [
        {
          text: 'What is Express.js?',
          options: ['Database', 'Frontend framework', 'Backend framework', 'Testing tool'],
          correctAnswer: 'Backend framework'
        },
        {
          text: 'Which method is used to start an Express.js server?',
          options: ['app.start()', 'app.begin()', 'app.listen()', 'app.run()'],
          correctAnswer: 'app.listen()'
        },
        {
          text: 'What does the express.static() middleware do?',
          options: ['Handle dynamic routes', 'Serve static files', 'Parse JSON', 'Manage sessions'],
          correctAnswer: 'Serve static files'
        },
        {
          text: 'Which of the following is NOT an HTTP method supported by Express.js?',
          options: ['GET', 'POST', 'PUT', 'FETCH'],
          correctAnswer: 'FETCH'
        },
        {
          text: 'What is middleware in Express.js?',
          options: ['Database driver', 'Frontend component', 'Function with access to request and response objects', 'Routing mechanism'],
          correctAnswer: 'Function with access to request and response objects'
        },
        {
          text: 'Which package is commonly used for handling file uploads in Express.js?',
          options: ['express-upload', 'multer', 'body-parser', 'formidable'],
          correctAnswer: 'multer'
        }
      ]
    },
    {
      id: 3,
      title: 'React.js',
      description: 'Evaluate your React.js skills with these questions about the popular frontend library.',
      questions: [
        {
          text: 'What is React.js?',
          options: ['Server-side framework', 'Frontend library', 'Database management system', 'Testing framework'],
          correctAnswer: 'Frontend library'
        },
        {
          text: 'What is JSX in React?',
          options: ['A database query language', 'A styling framework', 'A syntax extension for JavaScript', 'A routing library'],
          correctAnswer: 'A syntax extension for JavaScript'
        },
        {
          text: 'What is a state in React?',
          options: ['A permanent storage', 'An immutable object', 'An object that holds some information that may change over time', 'A global variable'],
          correctAnswer: 'An object that holds some information that may change over time'
        },
        {
          text: 'What is the purpose of React hooks?',
          options: ['To connect to databases', 'To handle server-side logic', 'To add state and other React features to functional components', 'To optimize CSS'],
          correctAnswer: 'To add state and other React features to functional components'
        },
        {
          text: 'Which method is used to change state in a React component?',
          options: ['this.changeState()', 'this.setState()', 'this.updateState()', 'this.modifyState()'],
          correctAnswer: 'this.setState()'
        },
        {
          text: 'What is the virtual DOM in React?',
          options: ['A browser plugin', 'A lightweight copy of the actual DOM', 'A database', 'A styling framework'],
          correctAnswer: 'A lightweight copy of the actual DOM'
        }
      ]
    },
    {
      id: 4,
      title: 'Node.js',
      description: 'Test your knowledge of Node.js, the JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      questions: [
        {
          text: 'What is Node.js?',
          options: ['A web browser', 'A programming language', 'A JavaScript runtime environment', 'A database management system'],
          correctAnswer: 'A JavaScript runtime environment'
        },
        {
          text: 'Which of the following is NOT a core module in Node.js?',
          options: ['http', 'fs', 'path', 'react'],
          correctAnswer: 'react'
        },
        {
          text: 'What does the npm command stand for?',
          options: ['Node Package Manager', 'New Project Module', 'Node Process Monitor', 'New Programming Method'],
          correctAnswer: 'Node Package Manager'
        },
        {
          text: 'Which of the following is used to handle asynchronous operations in Node.js?',
          options: ['Callbacks', 'Promises', 'Async/Await', 'All of the above'],
          correctAnswer: 'All of the above'
        },
        {
          text: 'What is the purpose of the "module.exports" object in Node.js?',
          options: ['To import modules', 'To export functionality from a module', 'To create a new module', 'To delete a module'],
          correctAnswer: 'To export functionality from a module'
        },
        {
          text: 'Which of the following is true about Node.js?',
          options: ['It is single-threaded', 'It uses an event-driven, non-blocking I/O model', 'It is well-suited for CPU-intensive tasks', 'Both A and B'],
          correctAnswer: 'Both A and B'
        }
      ]
    }
];