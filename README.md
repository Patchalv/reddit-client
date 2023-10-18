<img width="1595" alt="reddit-client" src="https://github.com/Patchalv/reddit-client/assets/35778404/462aebff-893c-4c93-ba89-506ed2b8f114">

# Reddit Client Project

A simple Reddit client for browsing selected subreddit categories. This project was created as an assignment in Codecademy's Full Stack Engineer Path.

## Table of Contents
- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
  - [Wireframe](#wireframe)
  - [Features](#features)
- [Codebase](#codebase)
  - [Technologies Used](#technologies-used)
  - [Folder structure](#folder-structure)
- [Future Work](#future-work)
- [Installation](#installation)
- [Acknowledgments](#acknowledgments)


## Introduction

Project Requirements:
- Build the application using React and Redux
- Version control your application with Git and host the repository on GitHub
- Use a project management tool (GitHub Projects, Trello, etc.) to plan your work
- Write a README (using Markdown) that documents your project including:
    - Wireframes
    - Technologies used
    - Features
    - Future work
- Write unit tests for your components using Jest and Enzyme
- Write end-to-end tests for your application
- Users can use the application on any device (desktop to mobile)
- Users can use the application on any modern browser
- Users can access your application at a URL
- Users see an initial view of the data when first visiting the app
- Users can search the data using terms
- Users can filter the data based on categories that are predefined
- Users are shown a detailed view (modal or new page/route) when they select an item
- Users are delighted with a cohesive design system
- Users are delighted with animations and transitions
- Users are able to leave an error state
- Get 90+ scores on Lighthouse
- OPTIONAL: Set up a CI/CD workflow to automatically deploy your application when the master branch in the repository changes
- OPTIONAL: Make your application a progressive web app

### Wireframe
![wireframe](https://github.com/Patchalv/reddit-client/assets/35778404/37e253be-f4ae-4ba1-9385-528d9faeef44)

### Features
- Users can use the application on any device (desktop to mobile)
- Users can use the application on any modern browser
- Users can access your application at a URL
- Users see an initial view of the data when first visiting the app
- Users can search the data using terms
- Users can filter the data based on categories that are predefined

## Codebase
### Technologies Used
- JavaScript
- React
- React-Redux
- Redux Toolkit

### Folder Structure
```sh
reddit-client/
├── public          # Public files used on the frontend
└── src             # Frontend SPA
    ├── app         # App.js and store
    └── features    # Individual app components
```

## Future Work
- [x] Build the application using React and Redux.
- [x] Version control your application with Git and host the repository on GitHub.
- [x] Use a project management tool (GitHub Projects, Trello, etc.) to plan your work.
- [x] Write a README (using Markdown) that documents your project including:
    - Wireframes
    - Technologies used
    - Features
    - Future work
- [] Write unit tests for your components using Jest and Enzyme.
- [] Write end-to-end tests for your application.
- [] Users can use the application on any device (desktop to mobile).
- [x] Users can use the application on any modern browser.
- [] Users can access your application at a URL.
- [x] Users see an initial view of the data when first visiting the app.
- [x] Users can search the data using terms.
- [x] Users can filter the data based on categories that are predefined.
- [x] Users are shown a detailed view (modal or new page/route) when they select an item.
- [x] Users are delighted with a cohesive design system.
- [x] Users are able to leave an error state.
- [] Get 90+ scores on Lighthouse.
- [] OPTIONAL: Set up a CI/CD workflow to automatically deploy your application when the master branch in the repository changes.
- [] OPTIONAL: Make your application a progressive web app.

## Installation
- Clone or download the repo.
- To run locally, first install the dependencies by running the `npm install` command.
- Run the command `npm start` to start the development server. This will open the application in your default web browser.

## Acknowledgements
The project is using [Reddit JSON Api](https://github.com/reddit-archive/reddit/wiki/JSON) to get the
data from [Reddit](https://www.reddit.com/).

The project was a task given by [Codecademy](https://www.codecademy.com) being a part of their full-stack engineer course path. The goal of the project was to
showcase all previews skills and technologies learned until this point on the path  (HTML / CSS, JavaScript, React, Redux, Jest, Enzyme, Git and Github Projects, Command line, Wireframes).

