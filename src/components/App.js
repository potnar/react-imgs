import React from "react";
//dwóch kropek używa się przy przejściu pomiędzy folderami
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  //dodanie async ze zmianą axios na const response = await axios... daje ten sam efekt co dodanie tego co jest w klamrach po .then
  // async onSearchSubmit(term) {
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
    //sprawdzenie data.results po wprowadzeniu async ze zmianą axios na const response = await axios...
    //console.log(response.data.results);

    //this.state.images.map;
    // .then(response => {
    //   //dokładna ścieżka do /data/results z consol loga
    //   console.log(response.data.results);
    // });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        {/* sprawdzenie długości tabelki state.images i pokazanie, że to nie jest z tego kontekstu
        Found: {this.state.images.length} images */}
      </div>
    );
  }
}
export default App;
