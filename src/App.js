import React, { Component } from "react";
import "./App.css";
import StaticMenu from "./components/StaticMenu";

const nodes = [
  {
    id: "22352",
    code: "gen_accion",
    text: "Acción y Aventura",
    active: false
  },
  {
    id: "22314",
    code: "gen_anime",
    text: "Animé y Videojuegos",
    active: false
  },
  {
    id: "22372",
    code: "gen_biograficas",
    text: "Biográficas",
    active: true
  },
  {
    id: "22333",
    code: "gen_scifi",
    text: "Ciencia Ficción",
    active: false
  },
  {
    id: "22353",
    code: "gen_cineoro",
    text: "Cine de Oro",
    active: false
  },
  {
    id: "22373",
    code: "gen_clasicas",
    text: "Clásicas",
    active: false
  },
  {
    id: "22334",
    code: "gen_comedia",
    text: "Comedia",
    active: false
  },
  {
    id: "22335",
    code: "gen_deportes",
    text: "Deportes",
    active: false
  },
  {
    id: "22336",
    code: "gen_docu",
    text: "Documentales",
    active: false
  },
  {
    id: "22374",
    code: "gen_drama",
    text: "Drama",
    active: false
  },
  {
    id: "22392",
    code: "gen_familiares",
    text: "Familiares",
    active: false
  },
  {
    id: "22315",
    code: "gen_historicas",
    text: "Históricas",
    active: false
  },
  {
    id: "22337",
    code: "gen_infantiles",
    text: "Infantiles",
    active: false
  },
  {
    id: "22316",
    code: "gen_latino",
    text: "Latinoamericanas",
    active: false
  },
  {
    id: "22317",
    code: "gen_musica",
    text: "Música",
    active: false
  },
  {
    id: "22318",
    code: "gen_romanticas",
    text: "Románticas",
    active: false
  },
  {
    id: "22375",
    code: "gen_terror",
    text: "Terror y Suspenso",
    active: false
  },
  {
    id: "22376",
    code: "gen_descargables",
    text: "Descargables",
    active: false
  }
];

class App extends Component {
  state = {
    data: nodes
  };

  setActive = (event, id) => {
    event.preventDefault();
    this.setState(current => {
      let newState = current.data.map(item => {
        if (item.id === id) {
          item.active = true;
          return item;
        }
        item.active = false;
        return item;
      });
      return { ...current, data: newState };
    });
  };

  render() {
    return (
      <div className="App">
        <StaticMenu items={this.state.data} onClickHandler={this.setActive} />
      </div>
    );
  }
}

export default App;
