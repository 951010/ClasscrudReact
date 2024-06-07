import React,{Component} from "react";

export default class Classdemo extends Component {
    constructor(){
        super();
        this.state = {
            number:0,
            name: ""
        }
    }

    // componentDidMount(){
    //     setInterval (() =>{
    //         this.setState({
    //             number: 100
    //         })
    //     },2000)
    //     console.log("mount==>");
    // }

    // componentDidUpdate(){
    //     console.log("updated====>")
    // }

    handleIncrement = () => {
        this.setState ({
            number:  this.state.number + 1
        })
    }

    
    handleDecrement = () => {
        this.setState ({
            number:  this.state.number - 1
        })
    }

    handleChange = (event) => {
        console.log(event.target.value,"value===>")
        this.setState({
            name: event.target.value
        })
    }

  render() {
    return (
      <div>
        <button type='button' onClick={() => this.handleIncrement()}>+</button>
         <h1>{this.state.number}</h1>
        <button type='button' onClick={ () => this.handleDecrement()}>-</button> <br />
        <input type="text" value={this.state.name} onChange={(event => this.handleChange(event))} name="name" />
      </div>
    )
  }
}
