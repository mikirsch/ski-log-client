import React, { Component } from 'react';

export class VertCalcSection extends Component {
  constructor(props) {
    super(props);
    this.state = { runs: 0, vert: 0, type: 'lift' };
  }
  update = () => {
    const totalVert = this.state.runs * this.state.vert;
    this.props.update(this.props.index, totalVert);
  };
  render() {
    const index = this.props.index;
    return (
      <fieldset>
        <legend>Run {index + 1}</legend>
        {/* Todo: start saving lifts */}
        {/* <select id={`type${index}`}>
          <option value="lift">Lift</option>
          <option value="other">Other (estimated)</option>
        </select> */}
        {/* <input type="text" id={`liftName${index}`} /> */}
        <input
          type="number"
          min="0"
          step="1"
          id={`liftVert${index}`}
          value={this.state.name}
          onChange={event => {
            this.setState({ vert: event.target.value }, this.update);
          }}
        />
        <input
          type="number"
          min="0"
          step="1"
          id={`reps${index}`}
          value={this.state.runs}
          onChange={event => {
            this.setState({ runs: event.target.value }, this.update);
          }}
        />
        <p>Total vert gained on this run: {this.props.total} ft</p>
      </fieldset>
    );
  }
}

export default VertCalcSection;
