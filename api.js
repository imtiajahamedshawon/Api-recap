// var api = "https://jsonplaceholder.typicode.com/comments"

const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => showData(data))
}



function showData(comments) {
    const section = document.getElementById('secition')

    comments.forEach(comment => {

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <p>${comment.id} . ${comment.body.slice(0, 50)}</p>
            <p>Name: ${comment.name.slice(0, 10)}</p>
            <p>Email: ${comment.email}</p>
            <p>id: ${comment.id}</p>
            <button onclick='showDetails(${comment.id})' class="btn btn-primary">Details</button>
        </div>
         </div>`

        section.appendChild(div)
    })
}


function showDetails(id) {
    // var dynamicApi = `https://jsonplaceholder.typicode.com/comments/${id}`
    
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => showCommentDetail(data))

}



function showCommentDetail(id) {

    console.log(id);
    const details = document.getElementById('show-detail')
    // console.log(details);
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card m-2" style="width: 18rem;">
    <div class="card-body">
        <p>Post Id: ${id.postId}</p>
        <p>${id.id} . ${id.body}</p>
        <p>Name: ${id.name}</p>
        <p>Email: ${id.email}</p>
    </div>
     </div>`
    details.innerHTML = ''
    details.appendChild(div)
    // console.log(div);
}