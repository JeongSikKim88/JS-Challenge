// import "./styles.css";

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoListPending = document.querySelector(".js-pending"),
    toDoListFinished = document.querySelector(".js-finished");

const TODOS_PENDING_LS = "PENDING";
const TODOS_FINISHED_LS = "FINISHED";

let originList = {
    PENDING: [],
    FINISHED: []
};

function deleteToDo(TODOS_LIST_LS, TODOS_LIST) {
    const btn = event.target;
    const li = btn.parentNode;
    TODOS_LIST.removeChild(li);
    originList[TODOS_LIST_LS] = originList[TODOS_LIST_LS].filter(function (toDo) {
        return toDo.id !== Number(li.id);
    });

    saveToDoList(TODOS_LIST_LS, originList[TODOS_LIST_LS]);
}

function saveToDoList(TODOS_LIST_LS, TODOS_ARRAY) {
    localStorage.setItem(TODOS_LIST_LS, JSON.stringify(TODOS_ARRAY));
}

function paintFinished(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const undoBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = originList[TODOS_FINISHED_LS].length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", () => {
        deleteToDo(TODOS_FINISHED_LS, toDoListFinished);
    });
    undoBtn.innerText = "⏪";
    undoBtn.addEventListener("click", () => {
        paintPending(text);
        deleteToDo(TODOS_FINISHED_LS, toDoListFinished);
    });

    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(undoBtn);
    li.id = newId;

    toDoListFinished.appendChild(li);

    const toDoObj = {
        id: newId,
        text
    };
    originList[TODOS_FINISHED_LS].push(toDoObj);
    saveToDoList(TODOS_FINISHED_LS, originList[TODOS_FINISHED_LS]);
}

function paintPending(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const finBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = originList[TODOS_PENDING_LS].length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", () => {
        deleteToDo(TODOS_PENDING_LS, toDoListPending);
    });

    finBtn.innerText = "✅";
    finBtn.addEventListener("click", () => {
        paintFinished(text);
        deleteToDo(TODOS_PENDING_LS, toDoListPending);
    });

    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finBtn);
    li.id = newId;

    toDoListPending.appendChild(li);

    const toDoObj = {
        id: newId,
        text
    };
    originList[TODOS_PENDING_LS].push(toDoObj);
    saveToDoList(TODOS_PENDING_LS, originList[TODOS_PENDING_LS]);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintPending(currentValue);
    toDoInput.value = "";
}

function loadAllToDoList() {
    const loadedToDoPending = localStorage.getItem(TODOS_PENDING_LS);
    const loadedToDoFinished = localStorage.getItem(TODOS_FINISHED_LS);

    if (loadedToDoPending !== null) {
        const parsedToDosPending = JSON.parse(loadedToDoPending);
        parsedToDosPending.forEach(function (toDo) {
            paintPending(toDo.text);
        });
    }

    if (loadedToDoFinished !== null) {
        const parsedToDosFinished = JSON.parse(loadedToDoFinished);
        parsedToDosFinished.forEach(function (toDo) {
            paintFinished(toDo.text);
        });
    }
}

function init() {
    loadAllToDoList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();