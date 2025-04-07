import { Component } from "react";

class ClassBasedComponent extends Component {
    //state
    state={
        showText:false,
        changeColor:false,
    };

    constructor(props){
        super(props)
        this.state={
        showText:false,
    };

    }
    handleClick = () =>{
        console.log("Button clicked")
        // this.state.showText ! = this.state.showText
        const {showText, changeColor} = this.state
        this.setState(
            {
                showText:!showText,
                changeColor:!changeColor,
            }
        )

    };
    
    render()
    {
        console.log(this.state);
        const {showText, changeColor} = this.state
        return(
            <div>
                  <button onClick={this.handleClick}> Toggle text</button>
                {
                    showText? <h3 style={{color : changeColor ? "red": "black"}}> Class based Components </h3>:null
                }
                
          
        </div>
        );
        
    }

}

export default ClassBasedComponent