var todo = document.querySelector('#todos').value;

getTodos()

function getTodos() {
    fetch('http://localhost:3000/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response)
            loopTodos(response)
        })
}


// Make another function called loopTodos(todos) that your fetch will pass its response to. In that function, loop over the todos array, and for each one, run showTodo(todo).

function loopTodos(todos) {
    console.log(todos)
    todos.forEach(function(todo){
        showTodo(todo)
    })
}


// Make another function called showTodo(todo) that makes a todo template using a single LI tag with a class list-group-item and the ${todo.todo} text inside it. This function should then append the template to the #todos element.

function showTodo(todo) {
    console.log(todo)
        var todoList = `<li class="list-group-item">${todo.todo}</li>`;

        document.querySelector('#todos').innerHTML += todoList;
}

            