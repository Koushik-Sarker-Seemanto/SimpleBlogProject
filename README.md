# SimpleBlogProject

Simple Blog application using nodejs as backend and HTML,CSS & Vanilla JS (Javascript DOM) for frontend .
Setup:

    Server : ExpressJS (Node)

    Database: MongoDB

To install all required packages

    go to project root folder
    run npm install

To run this project

    root folder and run nodemon npm start

This is based on MongoDB so user must have to run mongod server in his pc.

For installing MongoDb.

windows: 
    
    follow the link: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
    
Linux:
    
Step 1 — Installing MongoDB

Ubuntu’s official package repositories include an up-to-date version of MongoDB, which means we can install the necessary packages using apt.

First, update the packages list to have the most recent version of the repository listings:

    sudo apt update

Now install the MongoDB package itself:

    sudo apt install -y mongodb

This command installs several packages containing the latest stable version of MongoDB, along with helpful management tools for the MongoDB server. The database server is automatically started after installation. 

Step 2 — Checking the Service and Database

The installation process started MongoDB automatically, but let’s verify that the service is started and that the database is working.

First, check the service’s status:

    sudo systemctl status mongodb

You’ll see this output:

Output
● mongodb.service - An object/document-oriented database
   Loaded: loaded (/lib/systemd/system/mongodb.service; enabled; vendor preset: enabled)
   Active: active (running) since Sat 2018-05-26 07:48:04 UTC; 2min 17s ago
     Docs: man:mongod(1)
 Main PID: 2312 (mongod)
    Tasks: 23 (limit: 1153)
   CGroup: /system.slice/mongodb.service
           └─2312 /usr/bin/mongod --unixSocketPrefix=/run/mongodb --config /etc/mongodb.conf

