@echo off
echo copyright by Tuan

npm install body-parser

rem webpack: The bundler for my client-side code so its not sluggishly gigantic.
npm install --save-dev webpack webpack-dev-server
npm install webpack-cli -D

rem babel: The compiler for all your JS, ES needs.
npm install --save-dev babel-loader babel-core babel-preset-react babel-preset-env babel-preset-stage-1 babel-plugin-transform-runtime
npm install --save babel-runtime

rem react: Your front-end JavaScript
npm install --save react react-dom

rem react-bootstrap: css framework rebuilt by React
npm install --save react-bootstrap

rem multer for uploading files
npm install --save multer

rem bcrypt for harshing password
npm install --save bcrypt

rem js-cookie for taking cookies info
npm install js-cookie --save

rem ESLint: (Optional) A pluggable linter for js/jsx. Install it then configure it.
npm install eslint --save-dev

rem Setting up Express
npm install --save express
npm install --save compression


