<template>
	<div class="body">
		<!-- <p>Selected Language: {{ selectedLanguage }}</p> -->
		<div class="body__container">
				<div class="info">
					<div class="info__name">
						
						<Appear :delay="200" :transition="['100px', 0]" >
							<!-- <b>H o &nbsp; T h i &nbsp; T h u &nbsp; H i e n</b>
							 -->
							 <b> {{ addSpace(en.name) }} </b>
						</Appear>
					</div>
					<div class="info__job">
						
						<!-- <b>{{ en.job }}</b> -->
							<!-- <transition appear :css="false" @before-enter="beforeEnter" @enter="enter">
								<div>Transitions Test</div>
							</transition> -->
							<!-- :transition="['100px', 0]" -->
							<!-- :duration="500" :delay="0" -->
						
					</div>
					<div class="info__contacts text-sm">
						<!-- <div class="info__contacts--phone"></div> -->
						<a class="info__contacts--item info__contacts--mail" href="mailto:thuhienho11@gmail.com">
							<i class="fa-solid fa-envelope"></i>
							{{ en.contacts.text }}
						</a>
						<a class="info__contacts--item info__contacts--github" href="https://github.com/teohiho">
							<i class="fa-brands fa-github"></i>
							{{ en.contacts.link }}
						</a>
					</div>
					<div class="info__description pt-10">
						{{ en.description }}
					</div>
				</div>
				<div class="cv">
					<div class="cv__col cv__right">
						<div class="cv__item cv__experience">
							<div class="cv__title">
								<Appear :delay="200" :transition="['100px', 0]" >
									<span>W O R K  &nbsp; E X P E R I E N C E</span>
								</Appear>
							</div>
							<div class="cv__content">
								<div class="experience">
									<div class="experience__position">{{ en.experience.position }}</div>
									<div class="experience__company">{{ en.experience.company }}</div>
									<div class="experience__detail">
										<div class="experience__detail-item ">
											<div class="experience__detail-item__time text-sm">
												<i class="fa-solid fa-calendar-days"></i>
												{{ en.experience.date }}
											</div>
											<div class="experience__detail-item__location text-sm">
												<i class="fa-solid fa-location-dot"></i>
												{{ en.experience.location }}
											</div>
											<div style="clear:both;"></div>
											<div class="experience__detail-item__work">
												<!-- <p class="pt-10">This is a company specializing in providing technology solutions to solve user problems with web app products. At the same time, the company also creates its own products.</p>
												<p>We create web app products, winforms applications that provide tools to meet customer needs such as in the logistics industry, order management, invoices...</p>
												<ul>
													<li>Maintenance and adding new features to the available web app are requested from customers</li>
													<li>I was responsible for designing the user interface using Adobe XD, and collaborating with experienced people to ensure clear and effective design,developing new pages, ensuring perfect pixel accuracy.</li>
													<li>I also developed a web app for the project using Vuejs.</li>
													<li>Maintenance and adding new features to the Windows Forms project</li>
												</ul> -->
												<span v-html="en.experience.content"></span>
												<div class="technology pt-10">
													<span class="fw-b">Technology:</span> {{ en.experience.technology }}
													<br>
													<span class="fw-b">Prototyping tool:</span> Adobe XD, Figma
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="cv__col cv__center"></div>
					<div class="cv__col cv__left">
						<div class="cv__item cv__skills">
							<div class="cv__title">
								<Appear :delay="200" :transition="['100px', 0]" >
									<span>S K I L L S</span>
								</Appear>
							</div>
							<div class="cv__content">
								{{ en.skills }}
							</div>
						</div>
						<div class="cv__item cv__education">
							<div class="cv__title">
								<Appear :delay="200" :transition="['100px', 0]" >
									<span>E d u c a t i o n</span>
								</Appear>
							</div>
							<div class="cv__content">
								<ul class="">
									<li>
										<span class="fw-b">Education</span>
										<ul class="inside">
											<li>{{ en.educations.educations[0].date }}: {{ en.educations.educations[0].text }}</li>
										</ul>
									</li>
									<li class="pt-10">
										<span class="fw-b">Certificate</span>
										<ul class="inside">
											<li>{{ en.educations.certificates[0].date }}: {{ en.educations.certificates[0].text }}</li>
										</ul>
									</li>
								</ul>
								
							</div>
						</div>
					</div>
				</div>
		</div>
		
	</div>
	
</template>

<script setup>
	import Appear from '../components/Appear.vue';
	
</script>

<script>
	import { mapGetters } from 'vuex';
	export default {
		props: ['language'],

		computed: {
			...mapGetters(['getSelectedLanguage'])
		},

		data(){
			return {
				
				selectedLanguage: this.getSelectedLanguage || "en",
				en: this.$store.state.data.en,
      		}
		},

		mounted() {
		},

		methods: {
			beforeEnter(e) {
				e.style.opacity = 0;
			},
			enter(e) {
				e.style.transition = 'opacity 500ms ease-in-out';
				
				getComputedStyle(e);
				
				setTimeout(() => {
					e.style.opacity = 1;
				});
				
			},
			addSpace(str) {
				let temp = str.replaceAll("", "\xa0")
				return temp.split(' ').join(' ');
			}
		},

		watch: {
			getSelectedLanguage(newLang) {
				this.selectedLanguage = newLang;

				// 言語値が変更されたときに他の機能を実行します
				switch(this.selectedLanguage){
					case "en":
						this.en = this.$store.state.data.en;
						break;
					case "ja":
						this.en = this.$store.state.data.ja;
						break
				}
				
			}
		}
	}
	
</script>


