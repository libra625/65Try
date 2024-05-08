const Model = {
    key: 'data',

    get todos () {
        const data = JSON.parse(localStorage.getItem(this.key))
        return data || []
    },

    set todos (todoItemArray) {
        localStorage.setItem(this.key, JSON.stringify(todoItemArray))
    },

    saveTdoItem (data) {
        const savedData = structuredClone(this.todos)
        const dataToSave = structuredClone(data)
        dataToSave.id = savedData.length ? savedData.at(-1).id + 1 : 1
        // console.log(dataToSave)

        savedData.push(dataToSave)
        this.todos = savedData
        return this.todos.at(-1)
    },

    removeTodoItem (id) {
        if (!id) throw new Error('Invalid ID')
        this.todos = this.todos.filter((item) => Number(item.id) !== Number(id))
    }
}
