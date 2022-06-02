<template>
	<div class="todo-item" :class="todo.completed ? 'is-complete' : ''">
		<input
			type="checkbox"
			@click="$emit('check-change', todo)"
			:checked="checked"
		/>

		<p>{{ todo.title }}</p>

		<button class="del" @click="$emit('del-todo', todo.id)">X</button>
	</div>
</template>

<script>
export default {
	name: "TodoItemComp",
	props: {
		todo: Object,
		checked: Boolean,
	},
	emits: ["check-change"],
};
</script>
<style scoped>
.todo-item {
	background: #f4f4f4;
	padding: 10px;
	border-bottom: 1px #ccc dotted;
	display: flex;
	align-items: center;
}
.is-complete p {
	text-decoration: line-through;
}
.del {
	background: #f00;
	color: #fff;
	border: none;
	padding: 5px 9px;
	border-radius: 50%;
	cursor: pointer;
	margin-left: auto;
}
input {
	margin-right: 10px;
}
</style>
