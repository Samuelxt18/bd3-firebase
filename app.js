/* renderização de dados*/
const listBook = document.querySelector('#libri-collection')

function renderList(doc) {
    let li = document.createElement('li')
    let autor = document.createElement('span')
    let titulo = document.createElement('span')

    autor.textContent = doc.autor;
    titulo.textContent = doc.autor;

    li.appendChild(titulo)
    li.appendChild(titulo)

    listBook.appendChild(li)
}
/**/
db.collection('libri-collection')   
    .get()
    .then((snapshot )=> {
        // console.log(snapshot.docs)
        snapshot.docs.forEach(
            doc=>{
                console.log(doc.data)
                renderList(doc.data())
            }
        )
    })

    /*inserção de dados*/

    const form = document.querySelector('#add-book-form');

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        alert('Formulario funcionanduuu')
    });