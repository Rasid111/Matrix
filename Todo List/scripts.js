const input = document.querySelector("#input");
const add = document.querySelector("#add");
const taskList = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");
let count = 0;

document.querySelector("#clear").onclick = () => {
    taskList.innerHTML = "";
    count = 0;
    taskCount.innerText = `You have ${count} tasks`;
}
add.onclick = () => {
    if (input.value.trim("") === "")
        return;
    let task = document.createElement("div");
    task.classList.add("row");
    task.innerHTML = `<div class="input-group mb-3">
                        <span class="form-control rounded">
                            ${input.value}
                        </span>
                        <button class="btn btn-danger d-none" type="button">Remove todo</button>
                      </div>`;
    input.value = "";
    task.querySelector("span").onclick = (ev) => {
        console.log(ev.target.classList.toggle("lined"));
    }
    task.querySelector("button").onclick = () => {
        task.remove();
        count--;
        taskCount.innerText = `You have ${count} tasks`;
    }
    task.onmouseover = () => {
        task.querySelector("span").classList.remove("rounded");
        task.querySelector("button").classList.remove("d-none");
    }
    task.onmouseout = () => {
        task.querySelector("span").classList.add("rounded");
        task.querySelector("button").classList.add("d-none");
    }
    taskList.appendChild(task);
    count++;
    taskCount.innerText = `You have ${count} tasks`;
}