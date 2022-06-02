<template>
	<div class="container">
		<HeaderView />
		<AddTodoComp @add-todo="addTodo" />
		<TodosComp :todos="todos" @del-todo="deleteTodo" />
	</div>
</template>

<script>
import HeaderView from "./components/layout/HeaderView";
import TodosComp from "./components/TodosComp";
import AddTodoComp from "./components/AddTodoComp";

export default {
	name: "app",
	components: {
		HeaderView,
		AddTodoComp,
		TodosComp,
	},
	data() {
		return {
			todos: [
				{
					id: 1,
					title: "todo one",
					completed: true,
				},
				{
					id: 2,
					title: "todo two",
					completed: true,
				},
				{
					id: 3,
					title: "todo three",
					completed: false,
				},
			],
		};
	},
	methods: {
		deleteTodo(id) {
			this.todos = this.todos.filter((todo) => {
				return todo.id !== id;
			});
		},
		addTodo(newTodo) {
			console.log(newTodo);
			// this.todos = [...this.todos, newTodo];
		},
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
