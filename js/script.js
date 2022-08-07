const todos = [];
const RENDER_EVENT = 'render-todo';

document.addEventListener("DOMContentLoaded", function(){
    const submitForm = document.getElementById("form");
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo();
    });
});

function addTodo() {
    const textTodo = document.getElementById("title").value;
    const timeStamp = document.getElementById("date").value;

    const generateID = generateId();
    const todoObject = generateTodoObject(generateID, textTodo, timeStamp, false);
    todos.push(todoObject);

    // Custom event ini akan kita terapkan untuk me-render data yang telah disimpan pada array todos
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function generateId(){
    return +new Date();
}

function generateTodoObject(id, task, timeStamp, isCompleted){
    return{
        id,
        task,
        timeStamp,
        isCompleted
    }
}

function makeTodo(todoObject){
    const textTitle = document.createElement("h2");
    textTitle.innerText = todoObject.task;

    const textTimestamp = document.createElement("p");
    textTimestamp.innerText = todoObject.timeStamp;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement("div");
    container.classList.add("item", "shadow");
    container.append(textContainer);
    container.setAttribute("id", `todo-${todoObject.id}`);

    return container;

}

document.addEventListener(RENDER_EVENT, function(){
    // console.log(todos)
    const uncompletedTODOList = document.getElementById("todos");
    uncompletedTODOList.innerHTML= "";

    for (const todoItem of todos) {
        const todoElement = makeTodo(todoItem);
        uncompletedTODOList.append(todoElement);
    }
})

