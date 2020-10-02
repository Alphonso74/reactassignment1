import React, {Component} from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';



// function App() {
//   return (
//     <div className="App">
//       <UserInput/>
//       <UserOutput>Holy Cow Watch it GO! - Two Way Binding! </UserOutput>
//
//     </div>
//   );
// }
//
//
//
// export default App;


class App extends Component {
  state = {
    persons: [
      { username: 'Alphonso74'},
    ]

  }


  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
        <div className="App">
          {/*<h1>Hi, I'm a React App</h1>*/}
          {/*<p>This is really working!</p>*/}
          {/*<button*/}
          {/*    style={style}*/}
          {/*    onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>*/}
          {/*<Person*/}
          {/*    name={this.state.persons[0].name}*/}
          {/*    age={this.state.persons[0].age} />*/}
          {/*<Person*/}
          {/*    name={this.state.persons[1].name}*/}
          {/*    age={this.state.persons[1].age}*/}
          {/*    click={this.switchNameHandler.bind(this, 'Max!')}*/}
          {/*    changed={this.nameChangedHandler} >My Hobbies: Racing</Person>*/}
          {/*<Person*/}
          {/*    name={this.state.persons[2].name}*/}
          {/*    age={this.state.persons[2].age} />*/}

          <UserInput/>
          <UserOutput>Holy Cow Watch it GO! - Two Way Binding! </UserOutput>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
