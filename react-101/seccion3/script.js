const Human = props => {
    return React.createElement('div', {} ,[
        React.createElement('h1',{key: 1},props.name),
        React.createElement('h2',{key: 2},props.age),
        React.createElement('h3',{key: 3},props.eyesColor)
    ])
}

const childrens = [
    React.createElement('h1', {}, 'React is awesome'),
    React.createElement('h2', {} ,'It really easy')
];

const App = () => {
  return React.createElement(
      'div', // component
      {}, // props
      //   React.createElement('h1', {}, 'React is awesome') //chidlren
      // childrens 
      // React.createElement(Human, {name:'David',age: 23, eyesColor:'BLUE'})     
   
      [
        React.createElement(Human, {name:'David',age: 23, eyesColor:'BLUE', key:'uno'}),
        React.createElement(Human, {name:'David',age: 23, eyesColor:'BLUE', key:'dos'}),     
        React.createElement(Human, {name:'David',age: 23, eyesColor:'BLUE', key:'tres'})     
      ]
    )
}



ReactDOM.render(React.createElement(App) , document.getElementById('root'));