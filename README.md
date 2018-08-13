## Installation

clone the repo and run 
```
$ npm install
```
The app depeneds on the __json-server__ and __db.json__ provided

Note: If you're using you own db.json make sure to fix the syntax for *experience* attribute

The __json-server__ is proxied in *package.json* on port __3001__.

To run the __json-server__

```
$ json-server -p 3001 db.json
```
Now run the project
```
$ npm start
```

## Project Summary

![desktop](public/md-screenshot.png) ![mobile](public/sm-screenshot.png)

The app is a simple prototype for a form that allows to add *skills* with *experience* level provided for each or multiple.
The form allows for adding multiple skills at once separated by __commas__
ex: Node.js,Express.js,MatLab
By doing so you're sharing the same experience level for all.
Skills added are pushed to a container where they are indexed and displayed after they're posted to the DB.
You can delete skills by clicking the delete icon in the shared container.

## Notes

The project took almost 4/5 hours. I would've liked to implement a real test suite if I had the time, unfortunately I had to prioritize some aspects to have a somewhat presentable app.
