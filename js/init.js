// document.querySelector('.btn-add').addEventListener("click", enterListValue)
// document.querySelector('.btn-remove').addEventListener("click", deleteListValue)
// document.querySelector('.btn-add-arr').addEventListener("click", enterListValueAll)
// document.querySelector('.btn-remove-all').addEventListener("click", deleteAllList)
// document.querySelector('.btn-remove-last').addEventListener("click", deleteLastItem)
// document.querySelector('.btn-search-by-index').addEventListener("click", searchByIndex)
// document.querySelector('.btn-search-by-value').addEventListener("click", searchByValue)
// const input = document.querySelector('#input-value')
// const inputAll = document.querySelector('#input-array')
// const myList = document.querySelector('.my-list')
// const inputSearch = document.querySelector('#input-index-value')
// const search = document.querySelector('.search')

let Employee = {
    company: 'xyz'
}

let emp1 = Object.create(Employee)
delete emp1.company
console.log(emp1.company)