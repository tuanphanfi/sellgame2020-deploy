#!/bin/bash
sudo npm install body-parser

#webpack: The bundler for my client-side code so its not sluggishly gigantic.
sudo npm install --save-dev webpack webpack-dev-server
sudo npm install webpack-cli -D

#babel: The compiler for all your JS, ES needs.
sudo npm install --save-dev babel-loader babel-core babel-preset-react babel-preset-env babel-preset-stage-1 babel-plugin-transform-runtime
sudo npm install --save babel-runtime

#react: Your front-end JavaScript
sudo npm install --save react react-dom

#react-bootstrap: css framework rebuilt by React
sudo npm install --save react-bootstrap

# multer for uploading files
sudo npm install --save multer

#ESLint: (Optional) A pluggable linter for js/jsx. Install it then configure it.
sudo npm install eslint --save-dev

#Setting up Express
sudo npm install --save express
sudo npm install --save compression


#Easepolyout (SportPage)
sudo npm install --save d3-ease

#Install react-bootstrap
sudo npm install react-bootstrap bootstrap

#Install body-parser (AdminPage)
sudo npm install body-parser --save

#Install multer (AdminPage)
sudo npm install multer --save


#Install bcrypt (Harsh password Admin Schema)
sudo npm install --save bcrypt

#Install js-cookie for taking cookies information
sudo npm install js-cookie --save