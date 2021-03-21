import React from "react";

// class SearchBar extends React.Component {
//   //event handler, który wypisuje w konsoli każdą wpisaną literę zachowując wszystkie wcześniej wpisane
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
//   render() {
//     return (
//       <div className="ui segment">
//         <form className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input type="text" onChange={this.onInputChange} />
//             to samo co wyżej
//             <input type="text" onChange={e => console.log(e.target.value)} />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// Każda wartość wprowadzona w oknie textowym(inpucie) jest wyświetlana w oknie textowym (inpucie) i przekształcana na duże litery i widziana w konsoli
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    //
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
