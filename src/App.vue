<template>
	<div id="nav" class="nav-container">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div>
	<router-view />
</template>

<script>
export default {
	name: "App",
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
.nav-container {
	text-align: center;
	padding: 10px;
	background: #c966c0;
	color: white;
}
a {
	color: white;
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
