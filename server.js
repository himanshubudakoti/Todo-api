var express = require('express');
var app = express();
var PORT = process.env.PORT || 3030;
var todos = [{
    id:1,
    description: 'Meet mom for lunch',
    completed: false
},{
    id:2,
    description: 'Go to gym',
    completed: false
},{
    id:3,
    description: 'Complete your project',
    completed: true
}];

app.get('/', function (req, res) {
    res.send('Todo API Root');
});

//GET all todos  {GET/todos}
app.get('/todos', function (req, res) {
    res.json(todos);
});

//GET todos by id {GET/todos/:id}
app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo;

    todos.forEach(function (todo) {
        if (todoId === todo.id) {
            matchedTodo = todo;
        }
    });

    if (matchedTodo){
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }
});

app.listen(PORT, function() {
    console.log('Express listening on Port ' + PORT + '!');
});