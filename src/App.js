import React from 'react'
import Cards from './components/Cards'
import friends from "./friends.json"
import Header from './components/Header'

// const contain = {
//   display: 'flex',
//   flexDirection: "row",
//   margin: '10px',
//   cursor: 'pointer'
// }

const center = {
  alignItems:'center',
  margin:'0 auto'
}
let array = []
class App extends React.Component {

  state = {
    friends,
    array,
    counter: 0,
    maxScore: 0
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  clicked = (id) => {
    array = this.state.array;
    if (array.indexOf(id) === -1) {
      array.push(id)

      this.shuffle(friends)
      this.setState({ array: array, friends, counter: this.state.counter + 1 })
    }
    else {
      array = []
      let maxScore = this.state.counter
      if (maxScore > this.state.maxScore) {
        this.setState({ array, maxScore: this.state.counter, counter: this.state.counter = 0 })
      }
      else {
        this.setState({ array, counter: this.state.counter = 0 })
      }

    }
  }

  render() {
    return (
      <div>
        <Header counter={this.state.counter} maxScore={this.state.maxScore} />
        <div>
          <div  className='container'>
            <div className='row' style={center}>


              {friends.map(friend => (

                <Cards image={friend.img} id={friend.id} clicked={this.clicked} />


              ))}

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
