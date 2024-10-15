<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hi, I`m Rishabh Gangwar, a data scientist, computer vison researcher and a web developer. I have been working as a data scientist and software developer for the past 2 years.',
				},
				{
					id: 2,
					bio:
						'I feel comfortable working with technologies like Python , Vue, Flask, Pytorch, SQL, Powerbi and some other technologies in the data and web ecosystem.',
				},
				{
					id: 3,
					bio:
						'I love Programming, AI, Statistics, Machine Learning and Open-Source, and that`s what I`m passionate about. Aside from work, I`m a big fan of sports and travelling.',
				},
				{
					id: 4,
					bio:
						'Currently, I`m working as a data scientist for Q3 technologies building recommender system and machine learning applications. In addition, I`m learning RL and trying to keep up with CV field.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img src="@/assets/images/profile.svg" class="rounded-xl w-96" alt="" />
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p v-for="bio in bios" :key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
