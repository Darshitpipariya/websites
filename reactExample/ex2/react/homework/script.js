// import Modal from './model.js';

class FontChooser extends React.Component{
    constructor(props){
        super(props);
        this.state={Show:false,textWeight:'normal',textSize: 10 };
    }

    openModel(e){
        if(this.state.Show){
            this.setState({ Show:false });
        }else{
            this.setState({ Show: true });
        }
    }

    changeWeight(){
        // if($('#boldCheckbox').prop("checked"))
        if (this.state.textWeight!=='bold')
        {
            this.setState({textWeight:'bold'});
        }else{
            this.setState({textWeight:'normal'});
        }
    }

    incrementSize(){
        this.setState({textSize:this.state.textSize+1});
    }
    decrementSize(){
        this.setState({ textSize: this.state.textSize - 1 });
    }
    render(){
        var textSize=this.state.textSize;
        var textWeight=this.state.textWeight;
        return(
            <div>
                <h1 onClick={this.openModel.bind(this)} style={{fontWeight:textWeight,fontSize:textSize}}>Hello react</h1>
                <input type="checkbox" id="boldCheckbox" hidden={!this.state.Show} onChange={this.changeWeight.bind(this)} />
                &nbsp;
                <button id="decreaseButton" hidden={!this.state.Show} onClick={this.decrementSize.bind(this)} style={{ fontWeight: textWeight, fontSize: textSize }}>-</button>
                <span id="fontSizeSpan" hidden={!this.state.Show} style={{ fontWeight: textWeight, fontSize: textSize }}>{textSize}</span>
                <button id="increaseButton" hidden={!this.state.Show} onClick={this.incrementSize.bind(this)} style={{ fontWeight: textWeight, fontSize: textSize }}>+</button>
                {/* Model */}
                {/* <div id='myModel' className='modal'> */}
                    {/* Model content */}
                    {/* <div  className='model-content'> */}
                {/* </div> */}
                {/* </div> */}
                <div hidden={!this.state.Show}>
                    <h1>Hello world</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <FontChooser />,
    document.getElementById('main')
)