<template>
	<div class="container">
		<HeaderView />
		<AddTodoComp @add-todo="addNewTodo" />
		<TodosComp :todos="todos" @del-todo="deleteTodo" />
	</div>
</template>

<script>
import HeaderView from "./components/layout/HeaderView";
import TodosComp from "./components/TodosComp";
import AddTodoComp from "./components/AddTodoComp";
// import { v4 as uuidv4 } from "../node_modules/uuid";
export default {
	name: "app",
	components: {
		HeaderView,
		AddTodoComp,
		TodosComp,
	},
	data() {
		return {
			todos: [],
		};
	},

	methods: {
		deleteTodo(id) {
			// this.todos = this.todos.filter((todo) => {
			// 	return todo.id !== id;
			// });
			fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then(() => {
					this.todos = this.todos.filter((todo) => {
						return todo.id !== id;
					});
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		},
		addNewTodo(addTodoObj) {
			const newTodo = addTodoObj;
			// newTodo.id = uuidv4();
			fetch("https://jsonplaceholder.typicode.com/todos", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newTodo),
			})
				.then((res) => res.json())
				.then((newAddedTodo) => {
					// console.log(newAddedTodo);

					this.todos = [...this.todos, newAddedTodo];
				})
				.catch((error) => {
					console.error("Error:", error);
				});

			// this.todos = [...this.todos, newTodo];
		},
	},
	created() {
		fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then((res) => res.json())
			.then((todoList) => {
				// console.log(todoList);
				this.todos = todoList;
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	font-family: Arial, Helvetica, sans-serif;
	line-height: 1.4;
}
.container {
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	padding: 0 15px;
}
.btn {
	display: inline-block;
	border: none;
	background: #555;
	color: #fff;
	padding: 7px 20px;
	cursor: pointer;
}
.btn:hover {
	background: #666;
}
</style>
