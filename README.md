# influencer

> test project for Influencer Index

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

**please run all steps ordinary.**

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/influencer
    npm install
   // or yarn
    ```
3. configure database string (`mysql` key) from `path/to/influencer/config/default.json`

4. Start your app for first time (this is required for building sql schemas before migration or seeding)

    ```
    npm run dev
   // or yarn dev
    ```   
5. run database migrations
   ```
    npm run sequelize db:migrate
   // or yarn sequelize db:migrate
   ```
   migration revert is possible anytime:
   ```
    npm run sequelize db:migrate:undo
   // or yarn sequelize db:migrate:undo
   ```

6. Stop app and run seeder to seed database

    ```
    npm run seed
   // or yarn seed
    ```
   then run production environment with
    ```
    npm run start
   // or yarn start
    ```
7. open [localhost:3030](http://localhost:3030/) to see api home page.
8. open [/docs](http://localhost:3030/docs) to work with swagger play ground.

## cron job
required cron job is scheduled to `0 7 * * MON` 
but it is possible to [run it manually](http://localhost:3030/crons/notionPageCron) just for test case

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
