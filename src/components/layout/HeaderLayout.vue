<template>
	<header class="header">
		<h1>TodoList</h1>
		<nav id="nav" class="nav-container">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	name: "HeaderLayout",
};
</script>

<style scoped>
header {
	background: #333;
	color: #fff;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.header a {
	color: #fff;
}
</style>
