import { Component } from "react";

class ClassBasedComponent extends Component {
    //state
    state={
        showText:false,
        changeColor:false,
        changeCountStyle:false,
        count:0,
    };

    constructor(props){
        super(props)
        this.state={
        showText:false,
        count:0
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
    handleCount=()=>
    {
        console.log("Count Increased ")
        this.setState({
                ...this.state,
                count:this.state.count +1,

        })
    };
    //componentDidMount
    //componentDidUpdate

    componentDidMount(){
        console.log("this is firat time page load ")
        this.setState({
            showText:!this.state.showText,
            changeColor: !this.state.changeColor,
        })
    };

    componentDidUpdate(prevProps,prevState)
    {
        // console.log(prevState,this.state) 
        if (prevState &&
            prevState.count !== this.state.count 
            && 
            this.state.count === 10)
            {
            this.setState({
                ...this.state,
                changeCountStyle:true,

            })
        }
    };
    componentWillUnmount(){
        console.log("Component is unmounted");
    }
    render()
    {
        // console.log(this.state);
        const {showText, changeColor,count, changeCountStyle} = this.state
        // console.log(changeCountStyle);
        console.log(count);
        return(
            <div>
                  <button onClick={this.handleClick}> Toggle text</button>
                {
                    showText? <h3 style={{color : changeColor ? "red": "black"}}> Class based Components </h3>:null
                }
                <button onClick={this.handleCount}>Increase Count Value</button>          
                <h3 style={{color: changeCountStyle?"blue" :"black", fontSize:changeCountStyle?"30px":"20px"}}> Count is {count} </h3>     
          
        </div>
        );
        
    }

}

export default ClassBasedComponent