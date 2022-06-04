<template>
	<div class="container">
		<AddTodoComp @add-todo="addNewTodo" />
		<TodosComp :todos="todos" @del-todo="deleteTodo" />
	</div>
	<router-link to="/about">About</router-link>
</template>

<script>
import TodosComp from "../components/TodosComp";
import AddTodoComp from "../components/AddTodoComp";
// import { v4 as uuidv4 } from ".../node_modules/uuid";
export default {
	name: "HomeView",
	components: {
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
