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

    const generateId = generateId();
    const todoObject = generateTodoObject(generateId, textTodo, timeStamp, false);
    todos.push(todoObject);

    // Custom event ini akan kita terapkan untuk me-render data yang telah disimpan pada array todos
    document.dispatchEvent(new Event(RENDER_EVENT));
}