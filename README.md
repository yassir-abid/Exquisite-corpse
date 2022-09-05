# Exquisite Corpse

This project is inspired by the game Exquisite corpse, a game in which each participant takes turns writing on a sheet of paper, folding it to conceal his or her contribution, and then passing it to the next player for a further contribution.

It's based on:
- API using NodeJS, Express, JEST and Supertest for testing
- data in JSON
- basic front in html, css and JavaScript. All files are grouped in the `public` folder.

This application allows to generate random sentences, and to propose new parts of sentences.

## [See app website](https://exquisite-corpse-lovat.vercel.app/)

## App launch

1- After cloning the project and from the project directory, run: `npm install`

2- Create `.env` file

3- Run the following script to test server, controller and cadex services which manipulates source data (in json): `npm test`

4- Run the following script to launch app: `npm start`

## Focus on API

### Technical stack

- Node JS
- EXPRESS
- [JEST](https://jestjs.io/)
- [JOI](https://joi.dev/)

### Architecture

- Router
- Controller
- Cadex services to manipulate source data in json
- Testing with [JEST](https://jestjs.io/) and Supertest. All test files are grouped in the `tests` folder
- Data validator using [JOI](https://joi.dev/)

## Focus on Front side

All files are grouped in the `public` folder.

### Technical stack

- HTML
- CSS
- JavaScript

### Architecture

- Webpage structure with html
- Webpage style using basic CSS
- Webpage interaction with Javascript
