<template>
	<router-view />
</template>

<script>
import axios from 'axios';
export default {
	name: 'App',
	data() {
		return {
		}
	},
	mounted() {
		window.onbeforeunload = e => {      //刷新时弹出提示
			return ''
		};
	},
}
</script>

<style>
* { 
	margin: 0;
	padding: 0;
} 
</style> 
