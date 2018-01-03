# Introduction

in this folder, we have our basic server setup together with our react project files ready(at least enough for us to see some react at work) to render three dots(which am told it a good way to start our project and maybe test thing).

### Server option ..... more options .... options everywhere(ps using that Buzz Lightyear meme)
With [Express](http://expressjs.com/) there are a million ways to render your content(HTML) in our project I commented out a way to render with pug a very popular render engine(which solves various DOM render, etc. problems and in away corrects our bad habits of writing poor HTML ). for some reason I opted to serve our page statically(because I can... unless given a good reason not to start there). all in all, there are more view engines servers and such to help you work better with react, so I advise you to explore your options, eg. [Create React App](https://github.com/facebookincubator/create-react-app)

### Webpack and Wabel
We use [webpack](https://webpack.js.org/) to bundle our react.js into a single file using [webpack.config.js](https://webpack.js.org/configuration/) file among other things you should learn from the links. As for [babel](https://babeljs.io/) see what it does in the documentation.

# Take your time. I will mine
Make a point of reading the [REACT](https://reactjs.org/) documentation and try to understand at least some concepts about react before taking on tasks. Its always helpful to know what react is and maybe you might find it's not the library for you (rarely, the possibilities are limitless especially when combined with React Native). In my opinion, react gives you a broader platform to learn new javascript features as much as any other platform.

### How to set up ...
It might be of great value to read more on setting up a react development environment from the react dev tools in your favorite browser to learning the difference between the development and production environments, error handling among other things. You will also find other resources that come in handy in a development environment like your text editor of choice when it comes to your preference( i prefer vscode and atom they give me the joy of wringing code). Before I forget its good to lear how to setup tools like [eslint](https://eslint.org/) or their alternatives(they not only help you write great code but also help to become a better coder over time). It's good to avoid small errors by using a linter of choice. It also helps when you have a linter that helps write code that is standard based on rules from the various choices available using the following command.


```
//I used .gitignore to commit my files so that you can configure your linters as desired
eslint --init

```

# Recommendations and Reference books
## (my go to books some have some complex examples that need you to get 'your hands very dirty')
There are great choices of books out there to choose from as guides when learning any new technology. My books of choice for this program are as follows and will be updated on the main [README]() file with the addition of every new chapter available and the topic of choice.
### For now consider looking into the following titles
##### 1 [Express.js Blueprints](https://www.packtpub.com/web-development/expressjs-blueprints)
Book Description:
>APIs are at the core of every serious web application. Express.js is the most popular framework for building on top of Node.js, an exciting tool that is easy to use and allows you to build APIs and develop your backend in JavaScript. Express.js Blueprints consists of many well-crafted tutorials that will teach you how to build robust APIs using Express.js.The book covers various types of applications, each with a diverse set of challenges. You will start with the basics such as hosting static content and user authentication and work your way up to creating real-time, multiplayer online games using a combination of HTTP and Socket.IO. Next, you'll learn the principles of SOA in Node.js and see them used to build a pairing as a service. If that's not enough, we'll build a CRUD backend to post links and upvote with Koa.js!

##### 2. Mastering Node.js - Second Edition
Book Description:
>This book covers the features of Node that are especially helpful to developers creating highly parallel real-time applications. It takes you on a tour of Node's innovative event non-blocking design, showing you how to build professional applications. This edition has been updated to cover the latest features of Node 9 and ES6. All code examples and demo applications have been completely rewritten using the latest techniques, introducing Promises, functional programming, async/await, and other cutting-edge patterns for writing JavaScript code. Learn how to use microservices to simplify the design and composition of distributed systems. From building serverless cloud functions to native C++ plugins, from chatbots to massively scalable SMS-driven applications, you'll be prepared for building the next generation of distributed software.

##### 3.Web Development with Node.js, MongoDB and Express
Book Description:
>Node.js is the JavaScript runtime in the console. Now you can use JavaScript outside the browser. As a developer, you need to know just one language to build an application for the World Wide Web.In this course we teach you how to use Node.js; you will learn why Node.js is very easy to work with. Node.js is also built for asynchronous programming. With async functions now part of the JavaScript specification your code will look much better than before. We will assist you with writing this kind of code.One of the most used web frameworks in Node.js, Express.js will have no secret anymore for you. We touch on all the basics to build a modern web application with Node.js by using Express.js.With this course, you will learn to develop your web application in Node.js. At the end of the course, you will store, search, and manage data in MongoDB.

##### 4. Node.js, MongoDB and Angular Web Development, 2nd Edition
Book Description:
>Node.js is a leading server-side programming environment, MongoDB is the most popular NoSQL database, and Angular is the leading framework for MVC-based front-end development. Together, they provide an easy-to-implement, fully integrated web development stack that allows web programmers to create high-performance sites and applications built completely in JavaScript, from the server to client.Updated for Angular 2, Angular 4, and subsequent versions, this new edition of Node.js, MongoDB and Angular Web Development shows you how to integrate these three technologies into complete working solutions. It begins with concise, crystal-clear tutorials on each technology and then quickly moves on to building common web applications.You’ll learn how to use Node.js and MongoDB to build more scalable, high-performance sites, how to leverage Angular’s innovative MVC approach to structure more effective pages and applications, and how to use all three together to deliver outstanding next-generation Web solutions.

##### 5. React 16 Essentials - Second Edition
Book Description:
>React 16 Essentials, Second Edition, fully updated for React 16, takes you on a fast-paced journey through building your own maintainable React 16 applications. React experts Artemij Fedosejev, and Adam Boduch give you all the essentials you need to know and start working with React 16, in this new edition of the best-selling React.js Essentials title. You'll find the latest React 16 code updates, assessment of React Fiber, new coverage of Redux, and how to work as a modern React developer.The authors offer you their current assessment of React Fiber, and you'll soon be exploring React 16 hands-on, creating your own single and multiple user interface elements with React 16. You'll then see how to create stateless and stateful components and make them reactive. You'll also learn to interact with your components and lifecycle methods, and gauge how to integrate your user interface components with other JavaScript libraries effectively. Delve deep into the core elements of the Redux architecture and learn how to manage your application and data persistence. Then go the extra mile with the Jest test framework, and run multiple tests on your applications and find solutions to scale without complexity.Today React is used by Facebook, Instagram, Khan Academy, and Imperial College London, to name a few. Many new users recognize the benefits of React and adapt it in their projects, forming a fast-growing community. The speed at which React has evolved promises a bright future for anyone who invests in learning it today. Let Artemij and Adam bring you a brand new look at React 16 and React Fiber, and move your web development into the future.

##### 6. Progressive Web Apps with React
Book Description:
> For years, the speed and power of web apps have lagged behind native applications. Progressive Web Apps (PWAs) aim to solve this by bridging the gap between the web apps and native apps, delivering a host of exciting features. Simultaneously, React is fast becoming the go-to solution for building modern web UIs, combining ease of development with performance and capability. Using React alongside PWA technology will make it easy for you to build a fast, beautiful, and functional web app.After an introduction and brief overview of the goals of PWAs, the book moves on to set up the application structure. From there, it covers the Webpack build process and the process of creating React components. You'll learn how to set up the backend database and authentication solution to communicate with Firebase and how to work with React Router. Next, you will create and configure your web app manifest, making your PWA installable on mobile devices. Then you'll get introduced to service workers and see how they work as we configure the app to send push notifications using Firebase Cloud Messaging. We'll also explore the App Shell pattern, a key concept in PWAs and look at its advantages regarding efficient performance. Finally, you'll learn how to add offline capabilities to the app with caching and confirm your progress by auditing your PWA with Lighthouse. Also, you'll discover helper libraries and shortcuts that will help you save time and understand the future of PWA development.

##### 7. Practical React Projects
Book Description:
>This book is a collection of in-depth tutorials, selected from SitePoint's React Hub, that will guide you through some fun and practical projects. Along the way, you'll pick up lots of useful development tips.

>It contains:

>How to Create a Reddit Clone Using React and Firebase by Nirmalya Ghosh
>Build a CRUD App Using React, Redux, and FeathersJS by Michael Wanyoike
>How to Build a Todo App Using React, Redux, and Immutable.js by Dan Prince
>Building a Game with Three.js, React and WebGL by Andrew Ray
>Procedurally Generated Game Terrain with React, PHP, and WebSockets by Christopher Pitt

##### 8. React: Building Modern Web Applications
Book Description:
>ReactJS has helped to transform the web as we know it. Designed by Facebook to help developers build rapid, responsive UI that can deal with data-intensive usage, it’s an essential component in any web developer’s skillset. This ReactJS course, in five connected modules, provides you with a fast, engaging and practical route into ReactJS—so you can build powerful, elegant, and modern web applications.Beginning with the Reactive Programming with JavaScript module, you will learn how to take advantage of a reactive and functional programming paradigm to rethink how you approach your JavaScript code. It’s built to help you understand the concepts, relevant and applicable for any frontend developer. You’ll then dive a little deeper into ReactJS. The second module gives you a rapid look through the fundamentals of ReactJS, showing you how to build a basic application and demonstrating how to implement the Flux architecture. In the third module you will get to grips with ES6—this will make you a more fluent JavaScript developer, giving you control over ReactJS. You can put your old JavaScript hacks aside and instead explore how to create ES6 custom iterators. In the final two modules you’ll learn how to fully master ReactJS, exploring its wider ecosystem of tools that have helped to make it one of the most important tools in web development today. Ending with insights and guidance on React Native, the tool built for today’s demand for native, intuitive user experiences and interfaces, with this course you can be confident in building dynamic and modern apps with React.

##### 9. Learning Web Development with React and Bootstrap
Book Description:
>Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the Bootstrap framework and show you how to build impressive web apps. In this book, you will get an overview of the features of Bootstrap and ReactJS, along with the integration of React-Bootstrap components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples. By the end of this book, you will be equipped to create responsive web applications using Bootstrap style and React-Bootstrap components with ReactJS, and will have an insight into the best practices.
##### 10. React Quickly: Painless web apps with React, JSX, Redux, and GraphQL
Book Description:
>Successful user interfaces need to be visually interesting, fast, and owing. The React.js JavaScript library supercharges view-heavy web applications by improving data ow between UI components. React sites update visual elements ef ciently and smoothly, mini- mizing page reloads. React is developer friendly, with a strong eco- system to support the dev process along the full application stack. And because it's all JavaScript, React is instantly familiar


with a few of these books, google and the documentation for the projects you will be ready to start shipping quality code and writing react apps in no time(atleast six months of daily learning)
