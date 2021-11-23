const input = document.querySelector('#input');
const button = document.querySelector('.add');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const remove = document.querySelector('.remove_option');
let toDos  = [];

button.addEventListener('click', ()  => {
    toDos.push(input.value)
    updateUiList(toDos)
    saveToDosToLocalStorage(toDos)
});

remove.addEventListener('click', markAsDone);
result.addEventListener('dblclick', removeFromList);
result.addEventListener('dblclick', markAsDone);
result.addEventListener('input', ifInput);
clear.addEventListener('click', clearStorage);


function updateUiList(toDos) {
    result.innerHTML = ""
    for (let i =0; i<toDos.length; i++) {
        result.innerHTML += `<li contenteditable="true">${toDos[i]}</li>`;
    }
    return  result.innerHTML
}

function getToDosFromLocalStorage() {
    return  JSON.parse(localStorage.getItem('toDos'))
}

function saveToDosToLocalStorage (toDos) {
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

function clearStorage () {
    localStorage.removeItem('toDos');
    updateUiList(toDos)
}

function ifInput () {
    saveToDosToLocalStorage();
}

function markAsDone (e) {
    if (e.target.id !== 'Done') {
        e.target.setAttribute('id', 'Done');
        e.target.style = 'text-decoration: line-through';
        saveToDosToLocalStorage();
        return
    }
    if (e.target.id === 'Done') {
        e.target.setAttribute('id', 'Not_Done');
        e.target.style = '';
        saveToDosToLocalStorage();
        return
    }
}

function removeFromList (e) {
    if (remove.id !== 'Done') {
        const arrayIndex  =  toDos.findIndex(elem => elem === e.target.innerText)
        toDos.splice(arrayIndex-1,1)
        updateUiList(toDos)
        saveToDosToLocalStorage(toDos)
    }
}



if (localStorage.getItem('toDos')) {
    toDos = getToDosFromLocalStorage()
    updateUiList(toDos)
}