<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link :to="`/projects/single-project/${project.id}`"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div>
			<img :src="project.img" :alt="project.title" class="rounded-t-xl border-none fixed-size-img" />
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.title }}
			</p>
			<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ project.category
				}}</span>
		</div>
	</router-link>
</template>

<style lang="scss" scoped>
.fixed-size-img {
	width: 250px;
	/* Your desired width */
	height: 332px;
	margin-left: auto;
	/* Center horizontally */
	margin-right: auto;
	/* Your desired height */
	object-fit: contain;
	/* Resize the image while maintaining its aspect ratio, without cropping */
	background-color: #ffffff;
}
</style>
