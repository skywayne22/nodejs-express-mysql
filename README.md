### Setup
1. Clone repo
`https://github.com/skywayne22/nodejs-express-mysql.git`

2. Install packages
`npm i`

3. Install MySQL on your machine, save your username and password as you 
will have to update the config/db.js


If unable to connect to mysql 
run `ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';`
where 'root' is your user and password is your 'password'
sample:
ALTER USER 'admin' IDENTIFIED WITH mysql_native_password BY 'mypassword123';

4. After setting up, go to config/db.js and update user and password based on you MySQL user

5. Go back to our project and run `node app.js` this will initialize our connection, create db and table.
Output:
Listening on port: 4000
Connected!
Database created
TABLE created!

(Optional)
If you want to check the database and table
Goto mySQL cmd
`SHOW DATABASES;` this will display all the db under your acc
Sample Output:
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mydb               |
| mydb1              |
| mysql              |
| performance_schema |
| sys                |
| testdb             |
+--------------------+
`USE TESTDB;` this will connect you to our db created in this repo
Sample Output:
Database changed
`SHOW TABLES` this will display all the tables under TESTDB
SAMPLE OUTPUT: 
mysql> SHOW TABLES;
+------------------+
| Tables_in_testdb |
+------------------+
| movies           |
| testtable        |
| users            |
+------------------+
Now that you've checked the db and table, you can now proceed on testing the API endpoints.
You may use Postman for testing.


## Testing the API endpoints
>Retrieve user using username as filter
METHOD: GET
URL: http://localhost:4000/users/username?username=user104

>Retrieve all users
METHOD: GET
URL: http://localhost:4000/users

>Create user
METHOD: POST
URL: http://localhost:4000/users/
You may use postman to test
body > x-www-form-urlencoded
key                 value
username            user1
password            pass1
firstname           name1
lastname            lastname1
email               email1
contactnumber       123
postcode            12345
address             address1

> Delete user
METHOD: DELETE 
URL: http://localhost:4000/users/delete?username=1user123
You may use postman to test

>Update user
METHOD: PUT
URL: http://localhost:4000/users/delete?username=1user123
You may use postman to test
body > x-www-form-urlencoded
key                 value
username            user1
password            pass1
firstname           name1
lastname            lastname1
email               email1
contactnumber       123
postcode            12345
address             address1