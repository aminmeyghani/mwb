# Folders Structure

Below is a summary of the folder structure:

```
├── bin -> ./node_modules/.bin
├── bower            # Contains app packages. Server path: `/bower`
├── client           # The main folder containing the app.
├── config           # Contains Webpack configurations for the client and the server.
├── docs             # Readme files for the boilerplate. You can either remove it or move it out.
├── node_modules     # Contains the dev dependencies (like webpack) and packages use in the client (like phone-formatter)
├── package.json     #
├── readme.md        #
├── server           # Contains the express server used for development. The express server can be extended for production.
└── build-scripts    # Contains the build scripts. Can be extended or replaced
```

## Important Folders

### Client

```
client
├── index.html        # index.html for development.
├── src               # would contain all the source code including static assets.
├── static            # In rare occasions if you need to access arbitrary static files. Exposed by `/static`
└── test              # Contains unit tests and functional tests for the client.
    ├── functional    # Contains functional or e2e tests.
    ├── protractor.config.js
    ├── testem.json
    └── unit         # Contains unit tests for the client.
├── webpack-bundle   # Automatically generted by webpack containing css/js while in dev mode.
```

### Server

Contains a development server that is NOT configured for prudction.

```
├── dist             # Generated automatically by Webpack in dev mode that cointains the es5 version of the backend.
├── index.js         # Main entry point to the backend.
├── node_modules     # Server dependencies
├── package.json
└── src              # Contains the development server.
    └── server.js
```

### dist: the bundled client

The `dist` folder is automatically generated by `npm run build` which contains only the client app and not any servers. The server would have to be supplied by the consumer. Learn more in the [deploy](./deploy.md) section.
