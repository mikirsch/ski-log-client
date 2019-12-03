import React, { Component } from 'react';
import VertCalcSection from '../VertCalcSection/VertCalcSection';

export class Vert extends Component {
  constructor(props) {
    super(props);
    this.state = { vertSections: 1, vertBySection: [0] };
  }
  updateSectionVert = (index, newTotal) => {
    let vertBySection = [...this.state.vertBySection];
    vertBySection[index] = newTotal;
    this.setState({ vertBySection }, this.updateTotalVert);
  };
  updateTotalVert = () => {
    let total = this.state.vertBySection.reduce((acc, cur) => acc + cur, 0);
    this.props.genericChange('totalVert', total);
  };
  render() {
    return (
      <fieldset>
        <legend>Vert</legend>
        {Array.from(Array(this.state.vertSections)).map((a, index) => (
          <VertCalcSection
            key={index}
            index={index}
            total={this.state.vertBySection[index]}
            update={this.updateSectionVert}
          />
        ))}
        <button
          type="button"
          onClick={e => {
            const vertSections = this.state.vertSections + 1;
            const vertBySection = [...this.state.vertBySection];
            vertBySection.push(0);
            this.setState({ vertSections, vertBySection });
          }}
        >
          Add another run
        </button>
        <p>
          Total vert gained:{' '}
          {this.state.vertBySection.reduce((acc, cur) => acc + cur, 0)} ft
        </p>
      </fieldset>
    );
  }
}

export default Vert;
