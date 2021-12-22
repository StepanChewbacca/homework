import {URL} from './const.js'
import {Model} from './model.js'
import {View} from './view.js'
import axios from 'axios';


export class Controller {
    constructor() {
        this.view = new View();
        this.model = new Model();
        const toDoWrapper = document.querySelector(".todo_wrapper");

        toDoWrapper.addEventListener("dblclick", (event) => {
                this.model.onTaskDoubleClick(this.view, event);
        });
        toDoWrapper.addEventListener("click", (event) => {
            this.model.onTaskListClick(this.view, event);
        });

        this.getList(toDoWrapper);
    }

    getList(taskList) {
        return axios.get(URL + "?_limit=7")
            .then(response => this.model.renderList(this.view, taskList, response.data))
            .catch(error => {
                console.log("error", error);
            });
    }
}
