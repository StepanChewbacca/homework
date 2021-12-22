export class View {

    showTask(taskList, html) {
      const newTaskEl = this.createToDoFromTemplate(html);
      taskList.appendChild(newTaskEl);
    }

    createToDoFromTemplate(html) {
      const template = document.createElement("template");
      html = html.trim();
      template.innerHTML = html;
      return template.content.firstChild;
    }

    toggleTaskStatus(el) {
      el.classList.toggle("done");
    }

    deleteItemFromUi(el) {
      el.remove();
    }
  }
