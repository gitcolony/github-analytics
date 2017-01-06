import React from 'react';

export default class Search extends React.Component {
  state = {
    filter: '',
    count: 0,
  }

  onChange = (event) => {
    const filter = event.target.value;
    this.setState({ filter });
    fetch(`/issues?filter=${filter}`).then(res => {
      res.json().then(data => {
        this.setState({
          count: data.total_count,
        });
      })
    })
  }

  render() {
    return (
      <div>
        <div>search label <input type="text" value={this.state.filter} onChange={this.onChange} /></div>
        <div>issues {this.state.count}</div>
      </div>
    );
  }
}
