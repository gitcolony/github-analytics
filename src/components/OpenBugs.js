import React, { Component } from 'react';

class App extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    fetch('/issues').then(res => {
      res.json().then(data => {
        this.setState({
          bugs: data.total_count,
          loading: false,
        })
      })
    })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;

    }
    return (
      <div>
        There are {this.state.bugs} open bug for this repo
      </div>
    );
  }
}

export default App;
