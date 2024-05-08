'use strict';

(function () {
    const form = document.querySelector('#todoForm')
    const todoItemsContainer = document.querySelector('[data-todo-items]')

    const createTodoItemTemplate = (config) => {
        const wrapper = document.createElement('div')
        wrapper.className = 'col-4'

        wrapper.innerHTML = `<div class="taskWrapper">
                            <div class="taskHeading">${config.title}</div>
                            <div class="taskDescription">${config.description}</div>
                        </div>`

        return wrapper
    }
    const appendTodoItem = (element) => {
        todoItemsContainer.append(element)
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const inputs = e.target.querySelectorAll('input, textarea')
        const data = {}

        for (const input of inputs) {
            if (!input.value.trim()) return alert('Lack of data!')
            data[input.name] = input.value
        }

        const todoItem = createTodoItemTemplate(data)
        appendTodoItem(todoItem)
        e.target.reset()
    })
})()
