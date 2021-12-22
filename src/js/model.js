import axios from 'axios';
import {URL} from './const.js'

export class Model {
    constructor() {
        this.taskItemTemplate = document.getElementById("taskItemTemplate").innerHTML;
    }

    renderList(view, taskList, data) {
        data.forEach(element => this.addTask(view, taskList, element));
    }

    addTask(view, taskList, task) {
        const html = this.taskItemTemplate
            .replace("{{title}}", task.title)
            .replace("{{id}}", task.id);
        view.showTask(taskList, html)
    }

    onTaskDoubleClick(view, event) {
        this.deleteTask(view, event.target);
    }

    onTaskListClick(view, event) {
        view.toggleTaskStatus(event.target);
    }

    deleteTask(view, el) {
        axios.delete(URL + '/1' + el.dataset.todoId)
            .then(() => {
                view.deleteItemFromUi(el)
            });
    }
}
