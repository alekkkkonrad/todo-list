const form = document.getElementById('form');
const tarefas = document.getElementById('tarefas');

form.onsubmit = function (e) {
    e.preventDefault();
    const tarefa = document.getElementById('textarea');
    if(tarefa.value != ''){
        addTask(tarefa.value);
    }
    else{
        alert('Preencha o campo para adicionar uma tarefa!');
    }
    form.reset();
}

function addTask(tarefatexto){
    const taskcontainer = document.createElement('div');
    const newtask = document.createElement('input');
    const tasklabel = document.createElement('label');
    const tasktext = document.createTextNode(tarefatexto);

    newtask.setAttribute('type', 'checkbox');
    newtask.setAttribute('name', tarefatexto);
    newtask.setAttribute('id', tarefatexto);

    tasklabel.setAttribute('for', tarefatexto);
    tasklabel.appendChild(tasktext);

    taskcontainer.classList.add('task-item');
    taskcontainer.appendChild(newtask);
    taskcontainer.appendChild(tasklabel);

    tarefas.appendChild(taskcontainer);
}