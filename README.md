# MusicStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# •	Install Angular command line interface tool which starts new Angular 7 projects. Also need to install Nodejs to install this. Command is npm install -g @angular/cli

#	Cd into the folder and type ng (starts the command line) project name. use code . to use the vs code editor.

# development server using the Angular CLI: ng serve -o

# Front-end incudes 4 component folders - Home page / Lessons / Instruments / Contact Us
# Each page includes html,css,typescript
# use html css to make front end and add pictures and typescript to tie frontend to database

# Back-end code is in Flask framework using python
# In our Models page, we create a class for each section we populate into our database, i.e. class for instruments/lessons/customers
# In our Routes page, we create our API routes for creating/updating/deleting instruments/lessons/customers
# In our App page, we configure our database and reference the link on AWS
# Note that we have our back on hosted on Heroku and the server hosted on AWS

# We use typescript in each method so that our buttons can fire off information to and from our database
# for example, the home page register button will take in a value of name and email and reference the submit method to populate a persons name and email into the database

# Future work will include using stripe to add a payment system to  the instruments

