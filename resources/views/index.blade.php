<!-- filepath: c:\xampp\htdocs\TodoList-laravel\resources\views\index.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
<div class="container">
    <div class="todo-app">
        <h2>To-Do List </h2>
        <div class="row">
            <input type="text" id="input-box" placeholder="Add Text">
            <button onclick="addTask()">Add</button>
        </div>
        <ul id="list-container">

        </ul>

        <button id="showAllBtn" class="show-btn">Show all</button>
    </div>
</div>
<script src="{{ asset('js/script.js') }}"></script>  
</body>
</html>