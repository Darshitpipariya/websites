class FilteredList extends React.Component {
    constructor(props){
        super(props);
        var allItems = ['Hourse', 'Bear', 'Cat', 'Dog', 'Elephent']
        this.state={Defaulelist: allItems,CurrentItem:allItems}
    }

    filterList(input){
        var updateList=this.state.Defaulelist;

        updateList=updateList.filter(function(item){
            return item.search(input.target.value)!== -1;
        })

        this.setState({CurrentItem:updateList});
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Search' onChange={this.filterList.bind(this)}/>
                <ListItem item={this.state.CurrentItem}/>
            </div>
        )
    }
}
class ListItem extends React.Component{
    render(){
        return(
            <ul>{
                    this.props.item.map(function(item){
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        );
    }
}

ReactDOM.render(<FilteredList />,document.getElementById('container'));