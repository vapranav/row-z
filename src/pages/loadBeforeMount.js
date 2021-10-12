import React, { Component } from "react";
// import Layout from "../components/Layout";
// import { ThemeProvider } from "../components/themeContext";
// import Toggle from "../components/themeToggle";
// import "../styles/stylesheet.css";
// const axios = require("axios").default;

// class ShowPlayers extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       player: null,
//       loading: false,
//     };
//   }
//   async componentDidMount() {
//     const url =
//       "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     this.setState({
//       players: data.elements,
//       loading: false,
//       firstPlayer: 1,
//       secondPlayer: 1,
//     });
//   }

//   onChangeOne = (e) => {
//     const ID = parseInt(e.target.value);
//     this.setState({ firstPlayer: ID });
//   };
//   onChangeTwo = (e) => {
//     const ID = parseInt(e.target.value);
//     this.setState({ secondPlayer: ID });
//   };

//   render() {
//     return (
//       <ThemeProvider>
//         <div className='h-screen bg-white dark:bg-dark-gray'>
//           {/* {this.state.loading || !this.state.players ? (
//           <div> Loading </div>
//         ) : (
//           <div>
//             <select onChange={this.onChangeOne}>
//               {this.state.players.map((p) => (
//                 <option value={p.id}>
//                   {p.first_name + " " + p.second_name}
//                 </option>
//               ))}
//             </select>
//             {this.state.players.map((p) =>
//               p.id === this.state.firstPlayer ? (
//                 <div>
//                   <b> Points Per Game: {p.points_per_game}</b>
//                   <img
//                     src={
//                       "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
//                       p.photo.substr(0, p.photo.indexOf(".")) +
//                       ".png"
//                     }
//                   />
//                 </div>
//               ) : null
//             )}
//             <select onChange={this.onChangeTwo}>
//               {this.state.players.map((p) => (
//                 <option value={p.id}>
//                   {p.first_name + " " + p.second_name}
//                 </option>
//               ))}
//             </select>
//             {this.state.players.map((p) =>
//               p.id === this.state.secondPlayer ? (
//                 <div>
//                   <b> Points Per Game: {p.points_per_game}</b>
//                   <img
//                     src={
//                       "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
//                       p.photo.substr(0, p.photo.indexOf(".")) +
//                       ".png"
//                     }
//                   />
//                 </div>
//               ) : null
//             )}
//           </div>
//         )} */}

//           <main>
//             <div className='absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6'>
//               <Toggle />
//             </div>
//           </main>
//         </div>
//       </ThemeProvider>
//     );
//   }
// }

// export default ShowPlayers;

export default function ShowPlayers() {
  return <div>Hello World!</div>;
}
