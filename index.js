const express = require('express');
const app = express();
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./databases");

// using the express json in  routes.
app.use(express.json());

// create a todo..
app.post('/todo', async (req, res) => {

    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            error: " You have send wrong request",
        })
        return;
    }
    
    // ? Here we are uploading the request..... 
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

     res.json({
        message: "Todo created successfully"
     })


});




// get the todo..

app.get('/todos', async (req, res) => {
    const todos = await todo.find();
    res.json(todos);

});



// mark todo completed 
app.post('/complete', async(req, res) => {


    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            error: " You have send wrong request",
        })
        return;
    }

    await todo.update({ _id: updatePayload.id }, {   completed: true  });

    res.json({
        message: "todo marked completed successfully",   
    });
});
