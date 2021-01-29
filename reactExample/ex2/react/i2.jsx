class IncrementCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    counter() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (<div>
        Count :{this.state.count}
        < button type='button' onClick={this.counter.bind(this)} > Increment </button>
        </div>);
    }
}
ReactDOM.render(
    <IncrementCount />,
    document.getElementById('container')
)