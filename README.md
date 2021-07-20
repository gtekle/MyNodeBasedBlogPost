# My NodeJS Based Blog Post

# Install NodeJS

https://nodejs.org/en/
$ sudo apt install nodejs

# Install Express

https://expressjs.com/
$ npm install express --sav

# Install EJS Templating Engine

https://ejs.co/
$ npm install ejs

# Install MongoDB

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

1. Import the public key used by the package management system
   $ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

2. Create a list file for MongoDB.
   $ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

3. Reload local package database.
   $ sudo apt-get update

4. Install the MongoDB packages.
   $ sudo apt-get install -y mongodb-org

5. Running MongoDB - Start MongoDB.
   $ sudo systemctl start mongod
6. Running MongoDB - Verify that MongoDB has started successfully
   $ sudo systemctl status mongod
7. Running MongoDB - Stop MongoDB
   $ sudo systemctl stop mongod
8. Running MongoDB - Restart MongoDB
   $ sudo systemctl restart mongod
9. Running MongoDB - Begin using MongoDB
   $ mongo

# Install MongoDB Compass

https://docs.mongodb.com/compass/current/install/

1. Download MongoDB Compass
   $ wget https://downloads.mongodb.com/compass/mongodb-compass_1.26.1_amd64.deb
2. Install MongoDB Compass
   $ sudo dpkg -i mongodb-compass_1.26.1_amd64.deb
3. Start MongoDB Compass
   $ mongodb-compass

# Install Mongoose

https://mongoosejs.com/docs/
$ npm install mongoose --save

# Install Body Parser Middleware (body-parser)

body-parser is now deprecated and is included in express itself. So, the following lines of code can be used instead.

- app.use(express.json({ extended: true }))
- app.use(express.urlencoded({ extended: true }))
