<template>
    <div>
        <button class="btn-print" v-on:click="printPage">
            <i class="fa-solid fa-print"></i>
        </button>
    </div>
</template>

<script>
    export default {
        data(){
			return {
				
      		}
		},

        mounted() {
		},

		methods: {
            printPage() {
			    window.print();
			}
        }
    }
</script>