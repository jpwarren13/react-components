var App = () => (
	<div>
	<h2> My Todo List</h2>
	<TodoList />
	</div>

);

class GroceryListItem extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
	<li>{this.props.item}</li>);
	}
}


var GroceryList = (props) => (
	<ul>
	{props.items.map((item) => (<GroceryListItem item={item} />))}
	</ul>
);



ReactDOM.render(<GroceryList items={['kale', 'cucumber']} />,  document.getElementById('app'));

