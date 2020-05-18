import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida
class App extends Component {

  state={
    filt: '',
  }

  filtro = (e) =>{
    this.setState({
      filt: e.target.value,
    })
  }
  


  render() {
    let filterPost = posts.filter((post) => {
      return post.title.toLowerCase().indexOf(this.state.filt.toLowerCase()) !== -1;
    });
    return (
      <div>
        <div className="filter">
          <input 
            type="text" 
            placeholder="Ingresa el término de búsqueda" 
            onChange={this.filtro}
          />
        </div>
        <ul>
          {filterPost.map((e, ind) =>
            <li key={ind}>
            <a href={e.url}><img src={e.image } /></a>
            <p>{ e.title }</p>
          </li>
          )}
          
        </ul>
      </div>
    )
  }
}


export default App


