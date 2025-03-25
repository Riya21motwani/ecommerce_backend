const mongoose = require('mongoose');

// Connecting to MongoDB database
mongoose.connect("mongodb+srv://aayush2705gupta:1XCLiohbyRiwPwGm@cluster0.fqqki.mongodb.net/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB database"); // Log to confirm connection
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error); // Log error if connection fails
});