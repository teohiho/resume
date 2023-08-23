<template>
	<div>
		<LoadingScreen v-if="isLoading"></LoadingScreen>
		<div class="page" v-else>
			<div class="page__inner" >
				<Header></Header>

				<router-view />
				<!-- <Resume></Resume> -->
				<Footer></Footer>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Header from './components/Header.vue';
	import Resume from './pages/Resume.vue';
	import Footer from './components/Footer.vue';
	import LoadingScreen from "./components/LoadingScreen";
</script>

<script>
	export default {
		data(){
			return {
				isLoading: true
      		}
		},

		mounted() {
			setTimeout(() => {
				this.isLoading = false;
			}, 3500);
		}
	}
</script>