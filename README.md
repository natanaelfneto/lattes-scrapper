## Lattes Social Network Visualization

Version: **0.0.1**

Scrapper server to make a data vizualization for lattes users network and aldo transform the platform users profiles into JSON oriented objects thought an API.

#### Dependencies:

Actual version:
```JSON
{
    "dependencies": {
        "axios": "^0.18.0",
        "babel-loader": "^7.1.5",
        "cors": "^2.8.5",
        "express": "^4.16.4",
        "marked": "^0.5.1",
        "puppeteer": "^1.10.0",
        "vue": "^2.5.11",
        "vue-router": "^3.0.1",
        "vuex": "^3.0.1",
    },
    "devDependencies": {
        "babel-core": "^6.26.0",
        "babel-cli": "^6.11.4",
        "babel-preset-env": "^1.6.0",
        "babel-preset-es2015": "^6.9.0",
        "babel-preset-stage-2": "^6.11.0",
        "babel-preset-stage-3": "^6.24.1",
        "babel-register": "^6.11.6",
        "nodemon": "^1.10.0",
        "cross-env": "^5.0.5",
        "css-loader": "^0.28.7",
        "file-loader": "^1.1.4",
        "vue-loader": "^13.0.5",
        "vue-template-compiler": "^2.4.4",
        "webpack": "^3.6.0",
        "webpack-dev-server": "^2.9.1"
    }
}
```

Future implementations:
```JSON
{
    "@vue/component-compiler-util": "^2.0.0",
    "parcel-bundler": "^1.9.2",
    "parcel-plugin-vue": "^1.5.0"
}
```

Future deprecations:
```JSON
{
    "nodemon": "^1.10.0",
    "webpack": "^3.6.0",
    "webpack-dev-server": "^2.9.1"
}
```
*(...and maybe some more)*

#### Live Example:
*Not available yet*

#### Simple Local Run:
```Shell
npm install
npm run start
```
Access browser at: "http://localhost:5000/"\
Backend ExpressJS API-URL: "http://api/getUser/{lattesID}"

| Field       |Url                              | Obrigatory    | Description                       | Response Type
| ---         | ---                             | ---           | ---                               | ---
| lattesID    | http://api/getUser/{lattesID}   | sim           | URL ID number for lattes profiles | JSON

#### TODO:
- A basic fontend for data input and data visualization; [OK]
- A basic backend server for running the scrapping lattes platform module; [OK]
- Module to use lattes url ids to retrieve users data; [OK]
- Data filter function for object oriented user data (JSON formatted); [OK]
- **Backend function to get inputed user name and return user id to getUser module**;
- **Divide getUser module into specific modules, ex: GetUserName, GetUSerAcademics, etc**;
- **New modules to return the user papers and other publications**;
- **Backend function to use returned user data to determine user network usernames and their ids**;
- **Create with the returned user network a graphical view of network relations**.