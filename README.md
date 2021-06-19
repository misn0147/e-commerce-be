# e-commerce-be 

## e-commerce-be is a the back end for an e-commerce site that stores data including information about products and product tags. 
The application uses Sequelize to interact with a MySQL database to implement CRUD methods. 

Demo/ walkthrough video of using Insomnia to test routes: https://drive.google.com/file/d/1entMEssnfSXTK7Nng_VzK1SpdpGnv9Qg/view


![image](https://user-images.githubusercontent.com/79875711/122644178-8c952f80-d0d9-11eb-838a-a6988dd4668f.png)

![image](https://user-images.githubusercontent.com/79875711/122644191-a0d92c80-d0d9-11eb-88c1-3ee66ab03b32.png)



## User Story
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
