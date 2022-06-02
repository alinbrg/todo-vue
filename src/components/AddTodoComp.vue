<template>
	<div>
		<form @submit.prevent="addTodo">
			<input
				type="text"
				v-model="title"
				name="title"
				placehodler="add todo ..."
			/>
			<input value="Submit" type="submit" class="btn" />
		</form>
	</div>
</template>

<script>
import uuid from "../../node_modules/uuid";
export default {
	name: "AddTodoComp",
	data() {
		return {
			title: "",
		};
	},

	method: {
		addTodo() {
			console.log("prevent");
			const newTodo = {
				id: uuid.v4(),
				title: this.title,
				completed: false,
			};

			this.$emit("add-todo", newTodo);

			this.title = "";
		},
	},
	emits: ["add-todo"],
};
</script>

<style scoped>
form {
	display: flex;
}
input[type="text"] {
	flex: 10;
	padding: 5px;
}
input[type="submit"] {
	flex: 2;
}
</style>
