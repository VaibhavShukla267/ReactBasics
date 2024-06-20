function CustomRender(reactElement,mainContainer){
   /*instead of this we use the loop based code 
   const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElement)
    instead of the above code we can write it as
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop==='children')continue;
        // phle ham attribute ek ek krke set kr rahe tha but ab hamne loop lgva dia...ham prop se kya kahenge ki react element ke andar jaake uske key ki value accesss kre using props[prop] now we don't need to repeat our code..
        domElement.setAttribute(prop,reactElement.props[prop])
}
mainContainer.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'CLick Me To Visit Google'
}

// Kya ham reactElement ko .render jo ki main.jsx me hota usme <reactElement /> krke likh sakte hai ? kyuki atlast jo function MyApp() hota hai vo bhi key pairs ke form me convert hojata hai

const mainContainer= document.querySelector('#root')
CustomRender(reactElement,mainContainer)