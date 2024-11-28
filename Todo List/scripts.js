const todoInput = document.getElementById("input");
const add = document.getElementById("add");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const mode = document.getElementById("mode");
const authError = document.getElementById("authError");
const loginError = document.getElementById("loginError");
const emptyLoginError = document.getElementById("emptyLoginError");
const passwordError = document.getElementById("passwordError");
const emptySignUpError = document.getElementById("emptySignUpError");
const todoError = document.getElementById("todoError");
const accountModal = document.getElementById("accountModal");
const save = document.getElementById("save");
const logIn = document.querySelector("#logIn");
const signUp = document.querySelector("#signUp");
const logOut = document.querySelector("#logOut");
const html = document.querySelector("html");
const body = document.querySelector("body");

let auth = null;
let count = 0;
let todos = [];

//copied
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

auth = getCookie("auth");

if (auth !== null) {
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    if (accounts !== null) {
        auth = accounts.find((item) => item.username === auth);
        if (auth !== undefined){
            todos = auth.todos;
            todos.forEach((todo) => {
                addTodo(todo.value, todo.checked);
            });
            logIn.classList.add("hidden");
            signUp.classList.add("hidden");
            logOut.classList.remove("hidden");
        }
    }
}

theme = JSON.parse(localStorage.getItem("theme"));
if (theme === "light") {
    html.dataset.bsTheme = "light";
    mode.innerText = "Dark";
}else {
    html.dataset.bsTheme = "dark";
    mode.innerText = "Light";
}

function clearTasks(){
    taskList.innerHTML = "";
    count = 0;
    taskCount.innerText = `You have ${count} tasks`;
}

document.querySelector("#clear").onclick = () => {
    todos = [];
    clearTasks();
}
function addTodo(value, checked) {
    let task = document.createElement("div");
    task.classList.add("row");
    task.innerHTML = `<div class="input-group mb-3">
                        <span class="form-control rounded ${checked?"lined":""}">
                            ${value}
                        </span>
                        <button class="btn btn-danger d-none" type="button">Remove todo</button>
                      </div>`;
    task.querySelector("span").onclick = (ev) => {
        if (ev.target.classList.contains("lined"))
            count++;
        else
            count--;
        let todo = todos.find(item => item.value === ev.target.innerText);
        todo.checked = !todo.checked;
        taskCount.innerText = `You have ${count} tasks`;
        ev.target.classList.toggle("lined");
    }
    task.querySelector("button").onclick = () => {
        if (!task.querySelector("span").classList.contains("lined")) {
            count--;
            taskCount.innerText = `You have ${count} tasks`;
        }
        todos = todos.filter(todo => todo.value !== value);
        console.log(todos);
        
        task.remove();
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
    if (!checked)
        count++;
    taskCount.innerText = `You have ${count} tasks`;
}

add.onclick = (e) => {
    if (todoInput.value.trim("") === ""){
        todoError.classList.remove("hidden");
        return;
    }
    addTodo(todoInput.value);
    todos.push({
        value: todoInput.value,
        checked: false,
    });
    todoInput.value = "";
}

todoInput.onkeyup = (e) => {
    todoError.classList.add("hidden");
    if (todoInput.value.trim("") === ""){
        todoError.classList.remove("hidden");
        return;
    }
    if (e.key === 'Enter' || e.keyCode === 13) {
        addTodo(todoInput.value);
        todos.push({
            value: todoInput.value,
            checked: false,
        });
        e.target.value = "";
    }
};

mode.onclick = (e) => {
    if (html.dataset.bsTheme === "light") {
        html.dataset.bsTheme = "dark";
        e.target.innerText = "Light";
        localStorage.setItem("theme", JSON.stringify("dark"))
    }else {
        html.dataset.bsTheme = "light";
        e.target.innerText = "Dark";
        localStorage.setItem("theme", JSON.stringify("light"))
    }
}

let passInputs = document.querySelectorAll("#accountModal .modal-body .input-group");
passInputs.forEach(element => {
    let passInput = element.querySelector("input");
    element.querySelector("button").onclick = (ev) => {
        if (passInput.type === "password") {
            ev.target.innerText = "👁️"
            passInput.type = "text";
        }
        else {
            ev.target.innerText = "➖"
            passInput.type = "password";
        }
    }
});

function registerNewAccount(account) {
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    if (!accounts) {
        accounts = [];
    }
    if (accounts.some((item) => item.username === account.username)) {
        return false;
    }
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    return true;
}

function logIntoAccount(credentials) {
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    if (!accounts) {
        accounts = [];
        return undefined;
    }
    account = accounts.find((item) => item.username === credentials.username && item.password === credentials.password);
    return account;
}

signUp.querySelector(".modal-footer>button").onclick = () => {
    signUp.querySelectorAll(".modal-body>.error-message").forEach((item) => { item.classList.add("hidden")});
    passwords = [...signUp.querySelectorAll(".modal-body>.input-group>input")];

    if (passwords.some((item) => item.value.trim("") === "") || signUp.querySelector(".modal-body>input").value.trim("") === ""){
        emptySignUpError.classList.remove("hidden");
        return;
    }

    if (passwords[0].value !== passwords[1].value){
        passwordError.classList.remove("hidden");
        return;
    }
    
    let account = {
        username: signUp.querySelector(".modal-body>input").value,
        password: signUp.querySelector(".modal-body>.input-group>input").value,
        todos: [],
    }

    if(registerNewAccount(account)) {
        auth = account;
        todos = auth.todos;
        todos.forEach((todo) => {
            addTodo(todo.value, todo.checked);
        });
        logIn.classList.add("hidden");
        signUp.classList.add("hidden");
        logOut.classList.remove("hidden");
        document.cookie = `auth=${auth.username}`;
    }
    else
        loginError.classList.remove("hidden");
}

logIn.querySelector(".modal-footer>button").onclick = () => {
    logIn.querySelectorAll(".modal-body>.error-message").forEach((item) => { item.classList.add("hidden")});
    let credentials = {
        username: logIn.querySelector(".modal-body>input").value,
        password: logIn.querySelector(".modal-body>.input-group>input").value,
    }
    let res = logIntoAccount(credentials);
    if (res === undefined)
        authError.classList.remove("hidden");
    else{
        auth = res;
        document.cookie = `auth=${auth.username}`;
        todos = auth.todos;
        todos.forEach((todo) => {
            addTodo(todo.value, todo.checked);
        });
        logIn.classList.add("hidden");
        signUp.classList.add("hidden");
        logOut.classList.remove("hidden");
    }
}

save.onclick = () => {
    if (auth === null) {
        alert("Authorise first");
        return;
    }
    accounts = JSON.parse(localStorage.getItem("accounts"));
    
    console.log(accounts.find(item => item.username === auth.username).todos);
    accounts.find(item => item.username === auth.username).todos = todos;
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

logOut.querySelector(".modal-footer>button").onclick = () => {
    auth = null;
    todos = [];
    clearTasks();
    logIn.classList.remove("hidden");
    signUp.classList.remove("hidden");
    logOut.classList.add("hidden");
    
    // copied
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
}