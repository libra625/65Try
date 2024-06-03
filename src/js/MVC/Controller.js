const Controller = {
    form: document.querySelector('#todoForm'),
    todoItemsContainer: document.querySelector('[data-todo-items]'),

    formHandler (e) {
        e.preventDefault()
        const inputs = e.target.querySelectorAll('input, textarea')
        const data = {}

        for (const input of inputs) {
            if (!input.value.trim()) {
                input.classList.add('is-invalid')
                return //alert('Lack of data!')
            }

            data[input.name] = input.value
            input.classList.remove('is-invalid')
            input.classList.add('is-valid')
            setTimeout(() => input.classList.remove('is-valid'), 750)
        }

        const savedItem = Model.saveTodoItem(data)

        View.addTodoItemToList(savedItem)

        // const todoItem = createTodoItemTemplate(data)
        // appendTodoItem(todoItem)
        View.resetForm()
        console.log(typeof View)
    },

    loadedHandler () {
        Model.todos.forEach(item => View.addTodoItemToList(item))
    },

    handleDeleteItem (e) {
        e.stopPropagation()
        console.log(e.target)
        if (!e.target.hasAttribute('data-remove-btn')) return
        const todoItemId = e.target.closest('[data-todo-id]').getAttribute('data-todo-id')
        console.log(todoItemId)
        try {
            Model.removeTodoItem(todoItemId)
            View.removeTodoItem(todoItemId)
        } catch (err) {
            alert(JSON.stringify(err))
        }
    },

    init () {
        this.form.addEventListener('submit', this.formHandler.bind(this))
        document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this))
        this.todoItemsContainer.addEventListener('click', this.handleDeleteItem.bind(this))
    }
}
