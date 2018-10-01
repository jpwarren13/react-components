var App = () => (
	<div>
	<h2> My Todo List</h2>
	<TodoList />
	</div>

);

var GroceryListItem = (props) => (
	<li>{props.item}</li>
)

var GroceryList = (props) => (
	<ul>
	{props.items.map((item) => (<GroceryListItem item={item} />))}
	</ul>
);



ReactDOM.render(<GroceryList items={['kale', 'cucumber']} />,  document.getElementById('app'));

