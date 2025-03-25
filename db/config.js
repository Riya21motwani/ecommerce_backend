const mongoose = require('mongoose');

// Connecting to MongoDB database
mongoose.connect("mongodb+srv://abc12345:KF258yPDHV6K2nAV@ecommercebackend.mnykz.mongodb.net//e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB database"); // Log to confirm connection
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error); // Log error if connection fails
});