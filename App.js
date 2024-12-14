/** 
*
* <div id="parent">
*   <div id="child">
*       <h1></h1>
*   </div>
* </div>
*
*/

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag"),
      ]),
]);


// const heading = React.createElement("h1",
//     {id:"heading",xyz:"abc"},
//     "Hello world from React"  // children 
// );  // this an object and boject is a react element

// const root = ReactDOM.createRoot(document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
// root.render(heading);  // this dom into h1 tag & render into put it