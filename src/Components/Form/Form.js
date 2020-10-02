import React, {Component} from 'react'

export default class Form extends Component{
constructor(){
    super();
    this.state = {
        userInputImg :``,
        userInputName: ``,
        userInputPrice: 0

    }

}

imgChange = (val) =>{
this.setState({userInputImg: val})
console.log('img entered')
}

nameChange = (name) =>{
    this.setState({userInputName: name})
    console.log('name works')
}

priceChange = (num) =>{
    this.setState({userInputPrice: num})
    console.log('price working')
}

cancelChange =() =>{
   
    
    console.log('burn them all')
}






    render(){
        return(
            <div>
                <p>Form</p>
                <input className ='imgBox' placeholder = 'any image url' onChange={e => this.imgChange(e.target.value) }/>
                <input className ='nameBox' placeholder = 'Name of Product' onChange={e => this.nameChange(e.target.value) }/>
                <input className ='priceBox' placeholder ='Price of product in USD' onChange={e => this.priceChange(e.target.value) }/>
                <button className ='add'>Add to Inventory</button>
                <button className ='cancel' onClick ={this.cancelChange()}>Cancel</button>
            </div>
        )
    }
}