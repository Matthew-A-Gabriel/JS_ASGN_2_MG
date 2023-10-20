// Variables
const add_button = document.getElementById("add_task");
const list_input = document.getElementById("lst_inpt");
const task_area = document.getElementById("window_list");
const x_out = document.getElementById("x_out");
const destroyer = document.getElementById("destroyer");

// Main Function where all the magic happens
function create_task (){
    // tasking_input text variable
    var task_text = list_input.value;

    // making the new elements for the tasking
    const container = document.createElement("div")
    const item = document.createElement("p");
    const cross = document.createElement("button");
    const finished = document.createElement("button");

    // assigning classes to the elemtns
    container.classList.add("div_task");
    item.classList.add("listed_p");
    cross.classList.add("cross_out");
    finished.classList.add("remover");

    // putting the text in the elements
    item.innerText = task_text;
    cross.innerText = "—";
    finished.innerText = "X";

    // contained in a contianer then that container in the task_area
    task_area.appendChild(container);
    container.appendChild(item);
    container.appendChild(cross);
    container.appendChild(finished);

    // Assign strike through class when cross button pushed
    function strike_through (){
        item.classList.add("strike_through");
    }
    
    // event Listener for the Cross out
    cross.addEventListener("click", strike_through);

    // Remove the task from the list when finish button is pushed
    function x_out_task (){
        container.remove();
    }

    // event Listener for the remover
    finished.addEventListener("click", x_out_task);
}

// event listener for adding an tasking when add button is pushed
add_button.addEventListener("click", create_task);