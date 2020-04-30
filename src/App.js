import React from 'react';

import './App.css';

import { CardList } from './components/Card-List/card-list.component';
import { SearchBox } from './components/Search-Box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    
    return (
      <div className='App'> 
        <SearchBox 
          placeholder='Search here'
          handleChange={(e) => this.setState({searchField: e.target.value}) }
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
