## CollegeFun
# FEST-APP contains frontend code
to run it -> 
1. cd fest-app
2. npm start run
installed and used packages along with version:
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.9.0",
    "react-scripts": "^5.0.1",
    "web-vitals": "^2.1.4"

# Backend contain APIs
to run it ->
1. cd Backend
2. nodemon index.js || node index.js
installed and used packages along with version:
    "bcryptjs": "^2.4.3",
    "config": "3.3.1",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-validator": "^6.14.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.8.0",
    "mongoos": "^0.0.1-security",
    "mongoose": "^6.8.0"
    "nodemon": "^3.1.4"

for mongoDB atlas connection 
1. create project on mongoDB altas and copy the connect link in Backend/db.js line number 4.
like : const mongoURI = 'your mongoDB connect link'

* Note: to create collection of college in mongoDB project add /College inside the link.

Example:
'mongodb+srv://user:user@cluster0.7micxfn.mongodb.net/College?retryWrites=true&w=majority&appName=Cluster0'