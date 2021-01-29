class LikeButton extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            liked: false
        };
    }

    toggle() {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        var name = this.props.name;
        var txt = this.state.liked ? 'like' : 'disliked';
        var mycolor=this.state.liked? 'green':'red';
        var icon = this.state.liked ? "fa fa-thumbs-o-down" :"fa fa-thumbs-o-up";
        var weight=this.state.liked ? 'bold':'normal';
        var size=this.state.liked? 20:10;
        return (
            <p>
                I &nbsp;
                {txt} &nbsp;
            <span style={{ color: mycolor, fontWeight: weight ,fontSize:size}}>
                    {name} &nbsp;
            </span>
                
                <button onClick={this.toggle.bind(this)} >
                    <i className={icon} aria-hidden="true"></i>
                </button>
            </p>
            
        );
    }
}

ReactDOM.render(
    <div>
        <LikeButton name='java' />
        <LikeButton name='javascript' />
    </div>
    ,
    document.getElementById('container')
)