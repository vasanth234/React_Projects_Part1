const express = require('express');
const mongoose = require('mongoose');
const Email = require('./model');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://Teluguskillhub:Teluguskillhub@cluster0.gcva6xe.mongodb.net/your-database-name?retryWrites=true&w=majority').then(() => {
    console.log('DB connect and go ahead');
}).catch(err => console.log('error occurred:', err));

app.get('/', (req, res) => {
    return res.json('hello karna');
});

app.post('/emails', async (req, res) => {
    try {
        // Create a new email document using the data from the request body
        const newEmail = new Email(req.body);

        // Save the new email document to the database
        const savedEmail = await newEmail.save();

        // Respond with the saved email document
        res.status(201).json(savedEmail);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.delete('/delete/:id', async (req, res) => {
    try {
        const det = await Email.findByIdAndDelete(req.params.id);
        if (!det) {
            return res.status(404).json({ message: 'Email not found' });
        }
        return res.json(await Email.find());
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting email' });
    }
});

app.get('/getprod', async (req, res) => {
    try {
        const dwe = await Email.find();
        return res.json(dwe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching emails' });
    }
});

const PORT = 3003; // Change to a different port number if needed
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
