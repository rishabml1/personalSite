<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
    name: 'Project',
    components: {
        ProjectHeader,
        ProjectGallery,
        ProjectInfo,
        ProjectRelatedProjects,
    },
    props: ['id'], // Get the project ID from the route
    data() {
        return {
            projectData: null,
        };
    },
    async created() {
        try {
            // Dynamically import the project data based on the route parameter
            const projectModule = await import(`@/assets/project${this.id}.js`);
            this.projectData = projectModule.default;
        } catch (error) {
            console.error('Error loading project data:', error);
        }
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
};
</script>

<template>
    <div v-if="projectData" class="container mx-auto mt-10 sm:mt-20">
        <!-- Project header -->
        <ProjectHeader :singleProjectHeader="projectData.singleProjectHeader" />

        <!-- Project gallery -->
        <ProjectGallery :projectImages="projectData.projectImages" />

        <!-- Project information -->
        <ProjectInfo :projectInfo="projectData.projectInfo" />

        <!-- Project related projects -->
        <ProjectRelatedProjects :relatedProject="projectData.relatedProject" />
    </div>
</template>

<style scoped></style>
