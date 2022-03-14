import { Component } from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then((users)=>{
      this.setState(()=>{
        return{
          monsters:users
        }
      }, ()=>{
        console.log(this.state)
      })
    })
  }

  onSearchChange=(event)=>{
    const searchField = event.target.value.toLowerCase();
    this.setState({
    searchField
     })
   }
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filtredMonsters=monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField)
    })
  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox className='search-box-monsters'  placeholder="search monsters" onChangeHandler={onSearchChange}/>
      <CardList monsters={filtredMonsters}/>
    </div>
  );
}
}

export default App;
