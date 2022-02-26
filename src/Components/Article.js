// import React, { useState } from "react";
//
// function Article (props) {
//     const [favorite, setFavorite] = useState([]);
//
//     const addToFavorite = id => {
//         if (!favorite.includes(id)) setFavorite(favorite.concat(id));
//         console.log(id);
//     };
//
//     const removeFavorite = id => {
//         let index = favorite.indexOf(id);
//         console.log(index);
//         let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
//         setFavorite(temp);
//     };
//
//
//     return (
//         <div className="main">
//             <div className="">
//                 <div className="">
//                     <h2>all recipes</h2>
//                     <article key={props.id} className="">
//                         <img src={ff}/>
//                         <button onClick={() => addToFavorite(props.id)}>
//                             add to favorite
//                         </button>
//                     </article>
//                 </div>
//
//
//                 <div className="">
//                     <h2>favorite recipes</h2>
//                     <article key={props.id} className="">
//                         <a href={"https://reddit.com" + props.artcile.permalink} target="_blank">
//                             <h3>{props.artcile.title}</h3>
//                         </a>
//                         <button onClick={() => removeFavorite(props.id)}>
//                             remove favorite
//                         </button>
//                     </article>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Article;

