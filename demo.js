const http = require('http');

const express = require('express');

const fs = require('fs');

const app = express();

const messageFile = 'message.txt';



const server = http.createServer(app);



// Middleware to parse URL-encoded form data

app.use(express.urlencoded({ extended: true }));



// Display login form at /login

app.get('/login', (req, res) => {

    res.send(`

        <form action="/submit" method="POST" onsubmit="storeUsername(event)">

            <label for="name">Username:</label>

            <input type="text" id="name" name="name" required>

            <button type="submit">Login</button>

        </form>

        <script>

            function storeUsername(event) {

                event.preventDefault(); // Prevent form from submitting the usual way

                const name = document.getElementById('name').value;

                localStorage.setItem('username', name); 

                document.forms[0].submit(); // Submit the form after storing the username

            }

        </script>

    `);

});



// Handle login submission and redirect to the home page

app.post('/submit', (req, res) => {

    res.redirect('/'); // Redirect to the home page after login
    fs.writeFile(message.txt ,'${req.body.username} : ${req.body.message',(err)=>{
        if(err){
        res.send("no message");
        }
    })

});



// Display the send message form at the home route

app.get('/', (req, res) => {
    fs.readFile(message.txt,(err)=>{
        if(err){
            console.log("error");
        }
    })
    res.send(`

        <form action="/send" method="POST">

            <label for="message">Message:</label>

            <input type="text" id="message" name="message" required>

            <button type="submit">Send</button>

        </form>

    `);

});



// Handle message submission and save to the file




// Start the server

server.listen(3000, () => {

    console.log('Server running on http://localhost:3000');

});

