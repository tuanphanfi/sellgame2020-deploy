@echo off
echo copyright by Tuan

rem In case you have the problems with webpack, for example: webpack-dev-server. This file may help to solve it. 

rem How to use this file:
rem for Unix based cmd: ./debugWebpackForWindows.cmd

npm uninstall webpack-dev-server --save

npm install webpack-dev-server --save 

