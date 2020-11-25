import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import TableData from './components/TableOfData';
import Search from './components/Search';
import Pagination from './components/Pagination';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      pageNumber: 1
    };

    this.changePage = this.changePage.bind(this);
    this.getPeopleData = this.getPeopleData.bind(this);
  }

  componentDidMount() {
    this.getPeopleData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNumber !== this.state.pageNumber) {
      this.getPeopleData();
    }
  }

  async getPeopleData() {
    try {
      const peopleData = await axios.get(
        'https://swapi.dev/api/people/?page=' + this.state.pageNumber
      );
      peopleData.data.results.map(async (characterData) => {
        const characterHomeWorld = await axios.get(characterData.homeworld);
        const characterSpecies = await axios.get(characterData.species);
        let isHuman = !characterSpecies.data.name
          ? (characterData.species = 'Human')
          : (characterData.species = characterSpecies.data.name);
        const peopleState = this.state.people;
        peopleState.push({
          people: characterData,
          homeworld: characterHomeWorld.data.name,
          species: isHuman
        });
        this.setState({
          people: peopleState
        });
      });
    } catch (err) {
      console.log(err, 'not successful');
    }

    console.log(this.state);
  }

  changePage(number) {
    console.log('I done clicked mmmm hm.');
    this.setState({
      pageNumber: number
    });
  }

  render() {
    return (
      <div className='App'>
        <Search />
        <TableData passingData={this.state.people} />
        <Pagination changePage={this.changePage} />
      </div>
    );
  }
}

export default App;
