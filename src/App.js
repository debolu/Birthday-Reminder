import React, { useState } from 'react';
import Data from './data';
import List from './List';
function App() {
const [people, setPeople] = useState(Data)
  return (
    <main>
      <section className="container">
        <h4>{people.length} birthdays today</h4>
        <List people={people} />
        <button onClick={console.log('I was clicked')}>Clear all</button>
      </section>
    </main>
  )
}

export default App;
