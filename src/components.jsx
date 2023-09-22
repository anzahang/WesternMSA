
//Functional
function Introduction(props){
  return <h1>Hello,{props.name}</h1>
}

//Class-Based
class Introduction2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

//Prop
function App(){
  return <Introduction name="Andrew"/>;
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
