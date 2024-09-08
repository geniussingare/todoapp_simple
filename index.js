const express = require('express');
const app = express();

// ---------------------------------------------------------------------------------------------
// using the express json in  routes.
app.use(express.json());
// ---------------------------------------------------------------------------------------------

// create a todo..
app.post('/todo', (req, res) => {
// required body 
/*
    {
     title: 'todo title',
     description: 'todo description',
    }
*/
// res.send('todo created');
});




// get the todo..

app.get('/todos', (req, res) => {


});



// mark todo completed 
app.post('/complete', (req, res) => {


});
