<template>
	<div>
		<form
			@submit.prevent="
				$emit('add-todo', {
					title: this.title,
					completed: false,
				});
				this.title = '';
			"
		>
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
export default {
	name: "AddTodoComp",
	data() {
		return {
			title: "",
		};
	},

	method: {},
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
