import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <RenderOtherToo
          other={RenderMe}
          text="hey this is text from the App component!"
        />
      </div>
    );
  }
}
const RenderOther = (props) => {
  const OtherComponent = props.other;
  return (
    <div>
      <h1>I am Render Other!!</h1>
      <OtherComponent
        {...props}
      />
    </div>
  );
}

const RenderOtherToo = ({other: OtherComponent, ...rest}) => {
  return (
    <div>
      <h1>I too am Render Other!!</h1>
      <OtherComponent {...rest} />
    </div>
  );
}

class RenderMeToo extends React.Component {
  render() {
    return (
      <div>
        <h2>Oooh ooh. Me too.</h2>
      </div>
    );
  }
}

const RenderMe = (props) => {
  return (
    <ul>
      <li>hey</li>
      <li>{props.text}</li>
    </ul>
  )
}

export default App;
