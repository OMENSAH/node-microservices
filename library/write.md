create a project with three service: books, customers and orders.

--working on books service
Create a book.js file and install all the dependencies for that services: 
* mongoose -- database connection 
* body-parser -- middleware to save data from forms
* express 
Test the book.js app by writing some express code.
Another tool to use in development is nodemon. Install it globally to use it everywhere.

## Connecting with mlab
It is a cloud service for mongodb.
To connect our application to mlab, we will use mongoose.

## Defining book model 
Our book service will have four services. A functionality to create, delete, update and read a book.
So do other services. But we will need define the collection of structure of our data to mongodb.

## manipulating data with mongoose model
import the model and use it.

Learn To Build Microservices Driven Apps
Section 1:Microservices Using Nodejs	
1		Setup the project		
2		Connecting to mlab		
Section 2:Building the Model	
3		Defining the book model		
4		Making post request to book service		
5		Saving books to database		
6		Listing books		
7		Deleting books		
8		Customers service		
Section 3:Service Interaction	
9		Defining order model		
10		Creating and listing orders		
11		Talking with other services