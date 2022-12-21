![Preview of Komje!](/client/src/Image/app.GIF)

# Class 38-GROUP01 final project : Komje

This is the final project for the HackYourFuture curriculum we did as a class using the MERN stack by following the agile methodology with our team and a group of mentors. A quick guide to what we built:

Komje

We know how important and valuable every minute of your dream day.
So, why do not you save yourself the stress while getting ready for
your wedding? Komje is here for you.

Ask all your questions about the guests, easily share the invitation online and see the answers with a chart.

Our online invitations will continue to do more than just save paper. Together we can invite a greener future.

[Click here for the Demo version](https://c38-group1.herokuapp.com/)

# Built with

<p dir="auto">
  <a target="_blank" rel="noopener noreferrer" href=""><img alt="html5" src="https://camo.githubusercontent.com/0c3a16a22ae058cfe38a06dc9ea16404cf006409262f547c9ccfa3ec8b30f71e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c352d4533344632363f7374796c653d666c61742d737175617265266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&amp;logo=html5&amp;logoColor=white" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" ><img alt="CSS" src="https://camo.githubusercontent.com/af676aa114d3e054bb2d7b823f8b1dbf1814214d2c6f49e6a6cb70ab1837bd59/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4353532d3066363166613f7374796c653d666c61742d737175617265266c6f676f3d43535333266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/-CSS-0f61fa?style=flat-square&amp;logo=CSS3&amp;logoColor=white" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer"><img alt="JS" src="https://camo.githubusercontent.com/1c4e4cd646ae3703d4a774f42acf2ef62f44f811b28d9a1170e09e65ebad2315/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d6666626130383f7374796c653d666c61742d737175617265266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/-JavaScript-ffba08?style=flat-square&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" ><img alt="React" src="https://camo.githubusercontent.com/d8971eb578649b5861b3b3694bc2684ff4bf5bb346042b20f8f6e26010dce374/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f7374796c653d666c6174266c6f676f3d7265616374266c6f676f436f6c6f723d7768697465" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer"><img alt="Nodejs" src="https://camo.githubusercontent.com/cc96d7d28a6ca21ddbb1f2521d751d375230ed840271e6a4c8694cf87cc60c14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732532302d2532333433383533442e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/-JavaScript-ffba08?style=flat-square&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer"><img alt="Nodejs" src="https://camo.githubusercontent.com/a13091c112f3caf333125d48188cda0292a5d64467f19703aee213d85c11362e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d657870726573732d3030303030303f6c6f676f3d65787072657373266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765" data-canonical-src="https://img.shields.io/badge/-JavaScript-ffba08?style=flat-square&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer"><img alt="MongoDB" src="https://camo.githubusercontent.com/80e402d218879161eb056a6f1f6fe5b74c198898b09b0e8b8ae668ae2b6eb335/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d6666663f7374796c653d736f6369616c266c6f676f3d6d6f6e676f6462" data-canonical-src="https://img.shields.io/badge/-JavaScript-ffba08?style=flat-square&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%;"></a>

 </p>

## 1. Setup

First, to setup all the directories run the following in the main directory:

`npm install`

`npm run setup`

The first command will install `cypress` and some small libraries needed for running the rest of the commands. The second will go into the `client` and `server` directories and set those up to be ran.

In the `client` and `server` directory there are two `.env.example` files. Create a copy and rename that to `.env`. Then follow the instructions in those files to fill in the right values.

To run the app in dev mode you can run the following command in the main directory:

`npm run dev`

## 2. Code structure

```
client
├── public
└── src
|   └── __tests__
|   └── __testUtils__
|   └── components
|   └── hooks
|   └── pages
|       └── __tests__
|       └── components
|   └── util
|   index.jsx
cypress
|   └── fixtures
|   └── integration
|   └── plugins
|   └── support
server
└── src
    └── __tests__
    └── __testUtils__
    └── controllers
    └── db
    └── models
    └── routes
    └── util
    index.js
```

### 2.1 Client structure

- `public` || public facing client code
- `__tests__` || any `jest` tests for specific components will be in a `__tests__` folder on the same level
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `components` || all of our shared components that are used over multiple pages
- `hooks` || all of our custom hooks
- `pages` || the page components of our app, any routing will go between these components
- `pages/components` || components used specifically on those pages
- `util` || any utility functions that can be used anywhere on the client side
- `index.jsx` || the start point of the client

### 2.2 Cypress structure

- `fixtures` || any data/files that `cypress` needs can be placed here
- `integration` || all of our tests are in here, separated in folders based on the pages in our app
- `plugins` || any plugins for our `cypress` configuration can be placed here
- `support` || custom commands and other support files for `cypress` can be placed here

### 2.3 Server structure

- `__tests__` || any `jest` tests for the api endpoints as that is our testing strategy for the backend
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `controllers` || all of our controller functions that interact with the database
- `db` || all of our configuration for the database
- `models` || all of our `mongoose` models will be placed here
- `routes` || code to match up the API with our controllers
- `util` || any utility functions that can be used anywhere on the server side
- `index.js` || the start point of the server

## 3. Stack / external libraries

The base stack of the app is a MERN stack (Mongoose, Express, React, Node). Next to that we make use of the following extras:

### 3.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `webpack` / `html-webpack-plugin` || To bundle our React app and create a static app to host. See [docs](https://webpack.js.org/)
- `husky` || To run our tests and linter before committing. See [docs](https://typicode.github.io/husky/#/)
- `eslint` || To check our code. We have different configurations for frontend and backend. You can check out the configuration in the `.eslintrc.(c)js` files in the respective `client` and `server` folders. See [docs](https://eslint.org/)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

For more information on how these work together including the automatic deployment to heroku, have a look at our detailed [DEV](./DEV.md) file.

### 3.2 Client-side libraries

- `@testing-library/*` || We use React Testing Library to write all of our tests. See [docs](https://testing-library.com/docs/react-testing-library/intro/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `jest-fetch-mock` || To mock out the backend for our testing purposes. See [docs](https://github.com/jefflau/jest-fetch-mock#readme)
- `prop-types` || To type-check our components. See [docs](https://github.com/facebook/prop-types)
- `react-toastify` || React-Toastify allows you to add notifications to your app with ease. See [docs](https://www.npmjs.com/package/react-toastify)
- `react-social-icons` || A set of beautiful svg social icons. [docs](https://www.npmjs.com/package/react-social-icons)
- `react-router-dom` ||
  It is enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. [docs](https://v5.reactrouter.com/web/guides/quick-start)
- `react-icons` || Include popular icons in React projects easily use with react-icons. [docs](https://react-icons.github.io/react-icons/).
- `chart.js` || The most popular charting library.See [docs](https://www.chartjs.org/)
- `bootstrap` ||For syntax for template designs. See [docs](https://getbootstrap.com/)
- `@fortawesome/react-fontawesome`|For icons and design. See [docs](https://fontawesome.com/v5/docs/web/use-with/react)

### 3.3 Server-side libraries

- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `supertest` || To more easily test our endpoints. See [docs](https://github.com/visionmedia/supertest#readme)
- `mongodb-memory-server` || To mock out our database in our backend tests. See [docs](https://github.com/nodkz/mongodb-memory-server)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)
- `yamljs` || Parser and encorder. See [docs](https://www.npmjs.com/package/yamljs/v/0.2.10)
- `swagger-ui-express` || It allow to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file. See [docs](https://www.npmjs.com/package/swagger-ui-express)
- `nodemailer` || It allows to easy as cake email sending. See [docs](https://nodemailer.com/about/)
- `passport` || It is Express-compatible authentication middleware for Node.js.. See [docs](https://www.npmjs.com/package/passport)
- `passport-jwt` || authenticating with a JSON Web Token. See [docs](http://www.passportjs.org/packages/passport-jwt/)
- `nanoid` || URL-friendly, unique string ID generator. See [docs](https://github.com/ai/nanoid)
- `ejs` ||? EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. See [docs](https://ejs.co/)
