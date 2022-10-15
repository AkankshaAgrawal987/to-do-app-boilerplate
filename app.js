var taskToDo=[];
var input=document.getElementById("input");
var button=document.getElementById("button");
var toDoList=document.getElementById("todolist");
button.onclick=addTasks;
function addTasks(){
    taskToDo.push(input.value);
    input.value="";
    displayList();
}
function displayList(){
    toDoList.innerHTML=" ";
    taskToDo.forEach(function(item,index){
        toDoList.innerHTML+="<li>"+item+"<a onclick='edit("+ index+")'>Edit</a>"+"<a onclick='deleteTask("+ index +")'>&times &nbsp | </a></li>";
    });
}
function deleteTask(index){
    taskToDo.splice(index,1);
    displayList();
}
function edit(index){
    var updateTask=prompt("Kindly input new task");
    taskToDo.splice(index,1,updateTask);
    displayList();
}