<template>
	<div v-for="todo in todos" :key="todo.id">
		<TodoItemComp
			:todo="todo"
			:checked="todo.completed"
			@del-todo="$emit('del-todo', todo.id)"
			@check-change="toggleCheck"
		/>
	</div>
</template>

<script>
import TodoItemComp from "./TodoItemComp";
export default {
	name: "TodosComp",
	props: {
		todos: Array,
	},
	components: {
		TodoItemComp,
	},
	emits: ["del-todo"],
	methods: {
		toggleCheck(todo) {
			todo.completed = !todo.completed;
		},
	},
};
</script>
<style scoped></style>
