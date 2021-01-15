import React from 'react';

 class Section360 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  
  render() {
    return (
      <div className="home360">
        <div id="container360" className="container360"></div>
        <div>
          <h1>360 Gallery</h1>
          <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
      </div>
    );
  }
}
export default Section360;
