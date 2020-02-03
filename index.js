const w = document.querySelector('.big')
const y = document.querySelector('.btn')
const z = document.querySelector('.form')

y.addEventListener('click', (e) => {
    let s = (z.value)

    var btnComplete = document.createElement('button')
    btnComplete.innerHTML = "Complete"
    btnComplete.classList.add('combtn')
    btnComplete.classList.add('combtnp')

    var btnDelete = document.createElement('button')
    btnDelete.innerHTML = "Delete"
    btnDelete.classList.add('combtn')
    btnDelete.classList.add('delbtn')

    var text = document.createElement('h3')
    const input = document.querySelector('.form')
    let inputValue = input.value
    text.classList.add('items')
    text.innerHTML = inputValue

    var di = document.createElement('div')

    di.append(btnComplete);
    di.append(btnDelete);
    di.append(s);
    w.append(di);

    btnDelete.addEventListener("click", function() {
        di.remove()
    })
    btnComplete.addEventListener("click", function() {
        btnComplete.innerHTML = "Undo"
        di.style.textDecoration = "line-through"
    })




});