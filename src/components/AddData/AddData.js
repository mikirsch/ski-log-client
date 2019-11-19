import React, { Component } from 'react';
import AddBasics from '../AddBasics/AddBasics';

export class AddActivity extends Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Add Data</h1>
        </header>
        <section class="add-day">
          <h2>Add a Ski Day</h2>
          <form id="add-ski">
            <AddBasics />
          </form>
        </section>
      </>
    );
  }
}

export default AddActivity;
