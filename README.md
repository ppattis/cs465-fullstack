# cs465-fullstack
## Architecture

### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

In the course of this project we used Express HTML, Javascript and Node.js, and Angular for a Single Page Application (SPA).  The Express HTML was mostly static HTML code, with the exception that Express adds some ability for loops and code re-use.  Javascript and Node.js 

### Why did the backend use a NoSQL MongoDB database?

MongoDB was used due to the flexibility that comes from a document store as apposed to a normal SQL database.  With MongoDB the structure of the document is stored in the document along with the data, instead of being tied to columns in the tables.

## Functionality

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON, which stands for Java Script Object Notation, is a file format allowing complex objects to be described, and easily parsed in.  Javascript is a computer programming language based on Java.  Javascript is one of the main heavy hitters in web application development.

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

The project started as completely static HTML web pages.  The first refactoring was transfering the static HTML into Express HTML, and pulled data out of the HTML pages into JSON files.  Express has the mechanisms to be able to read in the JSON files and use the data in the rendering of the HTML.  The next refactoring occured when the data was taken from the JSON files, and added into MongoDB.  A Javascript API utilizing Mongoose was implemented to be able to query the data out of MongoDB, and utilized with the Express HTML pages.  The final refactoring was implementing the Angular Single Page Application that accessed the Javascript API and was able to easily Add data to the DB and edit data already in the DB.

## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Endpoints in a full stack application are the various URL paths that are used for access to the various parts of the application.  For example with this project some of the endpoints were 'api/trips', 'api/login', and 'api/register'.  Methods in a full stack application are the ways to get and send data and requests to and from the user.  The various methods utilized in full stack development are 'PUSH', 'PUT', and 'GET'.  Security is the Authentication and Authorization utilized within the application.  Authentication is the method used to verify the identity of the user.  Authorization is the method used to determine that the user is allowed to access a portion of the application.  Due to the fact that full stack applicaitons, by their nature, are primarily web based, it is paramount to keep security front and center during the development of the application.

## Reflection

### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

In my current employment, I am on the team that maintains a full stack application in Oracle Apex.  Even though this course isn't using that framework, this course has furthered my current understanding and knowledge in full stack development.  In particular, this course has allowed me to gain experience and knowledge in the Typescript language.