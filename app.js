const heading = React.createElement('h1',{id:"heading", xys:"abc" },'Hello world from react done' );
console.log(heading) //return object 

const parent = React.createElement("div", {id:"parent"},
[
    React.createElement("div", {id:"child"}, [ React.createElement("h1", {},"i am h1 element"),React.createElement("h1", {},"i am h1 element")]),
    React.createElement("div", {id:"child"}, [ React.createElement("h1", {},"i am h1 element"),React.createElement("h1", {},"i am h1 element")])
]

)


console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)