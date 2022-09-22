# Code 401 Lab - 03

## Basic API Server

A basic API server built using NodeJS, Express, and PostgreSQL. Tests performed using Jest and SuperTest.

### Author: Robert Shepley

<!-- Replace URL's and add more necessary links -->
- [Tests Report](https://github.com/ShepleySound/basic-api-server/actions/runs/3102959535/jobs/5025773847)
- [Assignment Pull Request](https://github.com/ShepleySound/basic-api-server/pull/1)
- [Heroku Prod Deployment](https://shepley-basic-api-server.herokuapp.com/)

### Setup

#### Running the application locally

- Ensure PostgreSQL is setup on your machine, and that you have an existing user with createdb permissions.

- Clone the repository to your local machine, then run the following commands in your terminal -

  ```bash
    npm install
    npm run db:create
    touch .env
  ```

- Add the following lines to the newly created `.env` file.

  ```text
  PORT=<port number>
  DATABASE_URL = 'postgres://localhost:5432/app-api'
  ```

- In the `config/config.json` file, set your username and password under the 'development' entry. Keep in mind, these both must be wrapped in double quotes.

- Run the following command -

  ```bash
    npm start
  ```

- Congratulations! You should now be able to access the application in your browser by navigating to https://localhost:PORT, with PORT being the port number that you specified in the .env.

#### Endpoints

The following endpoints interact with a Postgres database using Sequelize. Sequelize validates the entries on creation using the specified required properties.

- Endpoint: `/`
  - Response: `The server works!`

- Endpoint: `/people`
  - Methods: GET

- Endpoint: `/people/id`
  - Methods: GET, POST, PUT
  - Required properties:
    - name (string)
  - Optional properties:
    - age (integer)

- Endpoint: `/books`
  - Methods: GET

- Endpoint: `/books/id`
  - Methods: GET, POST, PUT
  - Required properties: 
    - title (string)
    - author (string)
    - pages (integer)

### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`


### To-Do

- Increase test coverage.
- Add endpoint options for querying books by min/max page size.
- Add endpoint options for querying people by age.
- Add more properties to the data models.

### UML

(Created with [diagrams.net](https://app.diagrams.net/))

![UML Image](basic-express-server.png)