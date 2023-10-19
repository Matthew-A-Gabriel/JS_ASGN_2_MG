let adding_listener = document.getElementById("add_task")
adding_listener.addEventListener("click",create_tasks)
let to_do_list = document.getElementById("window_list")
var listing = document.getElementById("lst_inpt")

function create_tasks(){
    const item = document.createElement("p")
    item.innerText = document.getElementById(listing).value
    itemclassList.add("listed_p")
    to_do_list.appendChild("item")
}