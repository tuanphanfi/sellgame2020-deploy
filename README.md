# ![Pic](https://github.com/tuanphanfi/realLifeITProject/blob/master/src/client/img/SELLGAMES_logo.png?raw=true)

Website for the student sport event “SELL Games 2020” which will be hosted in Lahti in 2020 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need NodeJS, npm, mongodb, dart-sass for development/ docker and docker-compose for production and development if you wish.

### Installing

Setting up the enviroment

```
npm install
```

### Debugging
If there are problems with Webpack, run the file below, choose .sh (for Unix-based machines) or .cmd (for Windows machines)
```
debugWebpackForWindows.cmd
debugWebpack.sh
```

## Starting

Start your mongodb and run those commands in your terminal
```
npm start
```
and then run webpack-dev-server in other terminal
```
npm run dev
```

### Development

go to client folder (src/client)

```
npx sass --watch scss:css
```

## Deployment

TBD...

At this point just change branch to container, i recommend to build it
```
npm run build
```

and run 
```
docker-compose up --build
```

## Built With

* [Node](https://nodejs.org) - back end
* [React](https://reactjs.org/) - front end
* [Express](https://expressjs.com/) - middleware
* [Mongo](https://www.mongodb.com/) - nosql database


## Authors

n/a

## License

n/a

# sellgame2020-deploy
