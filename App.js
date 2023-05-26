
// div
//    div
//       h1

const render = () =>{

const heading = React.createElement("h1",{id:"heading",acd:"xyz"},"I'm an h1 tag");

const div2 = React.createElement("div",{id:'child1'},[heading,React.createElement("h2",{},"I'm an h2 tag")])

const div3 = React.createElement("div",{"id":"child2"},[heading,React.createElement("h2",{},"I'm an h2 tag")])

const div1 = React.createElement('div',{id:"parent"},[div2,div3])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div1);

}


setTimeout(()=>{
    render()
},[5000])
