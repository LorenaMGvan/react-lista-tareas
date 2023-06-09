import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

// reto : deberas traer del endpoint postsUrl y mostrarlos en un listado de
// 10 componentes a la vez con paginacion del lado del cliente y para hacerlo
// deberas usar la libreria de axios para agregar y borrar vease los enpdoints
// en https://jsonplaceholder.typicode.com/
// tambien se deber´á maquetar el listado, el boton de borrado y el formulario
// de agregar.

// Specs, el elemento del listado debera ser un component por separado
// declarado en la siguiente variable

const post = null

const App = React.createClass({
  getInitialState() {
    return {
      titulo: '[Click para mostrar elementos]',
      // posts: []
       posts: [{"usuario":"user","password":"123456"}]
      
    }
  },
  bringPosts(){
    // aqui es donde traeras los elementos
    fetch(postsUrl)
     .then((response) => {
        return response.json()
    })
    .then((recurso) => {
        console.log(recurso)
    })
  },
  borraPost(postID){
    // aqui es donde deberas mandar el borrado de elementos
  },
  agregarPost(titulo, cuerpo){
    // aqui es donde deberas mandar el agregado del nuevo elemento
  },
  render() {
    return (
      <div>
        <h1>Le Posts List</h1>
        {this.state.posts.length === 0 ?
        <div className="name">{this.state.titulo}</div>
        : 
        <div className="listdado">test1</div>
        }
        <hr />
        <button onClick={this.bringPosts}>
          Traer Elementos!
        </button>
      </div>
    )
  }
})


ReactDOM.render(
  <App/>,
  document.getElementById('app'),
)