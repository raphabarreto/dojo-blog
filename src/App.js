import React from 'react';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name: 'Yoshi', age: 30 };

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <p>
          Person: {person.name} - {person.age}
        </p>
      </div>
    </div>
  );
}

export default App;
