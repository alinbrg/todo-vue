<template>
	<HeaderLayout />
	<router-view />
</template>

<script>
import HeaderLayout from "./components/layout/HeaderLayout";
export default {
	name: "App",
	components: {
		HeaderLayout,
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
	margin: 30px auto 0;
	padding: 0 15px;
}
.nav-container {
	text-align: center;

	color: white;
}
a {
	color: white;
	text-decoration: none;
	border-bottom: 1px solid transparent;
	transition: all 0.3s;
	text-align: center;
}
a:first-child {
	margin-right: 20px;
}
a:hover {
	border-bottom: 1px solid white;
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
