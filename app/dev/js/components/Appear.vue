<template>
    <transition appear :css="false" @before-enter="beforeEnter" @enter="enter">
        <slot />
    </transition>
</template>

<script>
	export default {
        name: "Appear",
        props: {
            duration : {
                type: Number,
                default: 500
            },
            delay: {
                type: Number,
                default: 100
            },
            transition: Array
        },

		data: () => {
            return {}
		},

        mounted() {
            console.log("Appear")
        },

		methods: {
			beforeEnter(e) {
                console.log("beforeEnter");
				e.style.opacity = 0;
                console.log(this.transition);
                if(this.transition)
                    e.style.transition = 'translate(' + this.transition.join(',') + ')';

                console.log(this.transition.join(','));
			},
            

			enter(e) {
                console.log(this.delay);
                console.log(this.duration);
                let transitions = 'opacity ' + this.duration + 'ms ease-in-out ' + this.delay + "ms";

                if(this.transition)
                    transitions += ', transform ' + this.duration + 'ms ease-in-out ' + this.delay + "ms";

                e.style.transition = transitions;

				getComputedStyle(e);
				
				setTimeout(() => {
					e.style.opacity = 1;

                    //if(this.transition)
                       // e.style.transition = 'initial';
				});
				
			}
		}
	}
	
</script>
