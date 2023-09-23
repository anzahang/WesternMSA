
//Functional
function Introduction(props) {
  return <h1>Hello,{props.name}</h1>
}

//Class-Based
class Introduction2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

//Prop
function App() {
  return <Introduction name="Andrew" />;
}

//Counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    );
  }
}

//Hierarchy
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return <header>Header Content</header>;
}

function MainContent() {
  return <main>Main Content</main>;
}

function Footer() {
  return <footer>Footer Content</footer>;
}


//JSX
import React from 'react';

function App() {
  const name = 'John';
  const greeting = <h1>Hello, {name}!</h1>;

  return (
    <div>
      {greeting}
      <p>This is a JSX example.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export default App;

//Conditional Rendering
class ConditionalRendering extends React.Component {
  render() {
    const isUserLoggedIn = true;

    if (isUserLoggedIn) {
      return <p>Welcome, User!</p>;
    } else {
      return <p>Please log in.</p>;
    }
  }
}

//Ternary Operator
// (condition ? trueResult : falseResult)
class ConditionalRendering extends React.Component {
  render() {
    const isUserLoggedIn = true;

    return (
      <div>
        {isUserLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
      </div>
    );
  }
}

//Logical operators
class ConditionalRendering extends React.Component {
  render() {
    const isUserLoggedIn = true;

    return (
      <div>
        {isUserLoggedIn && <p>Welcome, User!</p>}
      </div>
    );
  }
}

//Conditional Rendering with functions
class ConditionalRendering extends React.Component {
  isLoggedIn() {
    const isUserLoggedIn = true;
    return isUserLoggedIn ? <p>Welcome, User!</p> : <p>Please sign in.</p>;
  }

  render() {
    return (
      <div>
        {this.isLoggedIn()}
      </div>
    );
  }
}

//Lists & Keys

import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Buy groceries' },
        { id: 2, text: 'Walk the dog' },
        { id: 3, text: 'Read a book' },
      ],
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
