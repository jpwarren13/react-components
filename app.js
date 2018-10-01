var App = () => (
	<div>
	<h2> My Todo List</h2>
	<TodoList />
	</div>

);

class GroceryListItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			done: false
		};
	}
	onListItemClick(){
		this.setState({
			done: !this.state.done
		});
	}
	render(){
		var style = {
			'font-weight': this.state.done ? 'bold' : 'normal'
				};
		return(
	<li style = {style} onMouseEnter={this.onListItemClick.bind(this)} onMouseLeave={this.onListItemClick.bind(this)}>{this.props.item}</li>);
	}
}


var GroceryList = (props) => (
	<ul>
	{props.items.map((item) => (<GroceryListItem item={item} />))}
	</ul>
);



ReactDOM.render(<GroceryList items={['kale', 'cucumber']} />,  document.getElementById('app'));

