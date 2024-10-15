<template>
    <div class="pipeline-page">
        <header>
            <div class="space-y-4">
                <h1>PCA Algorithm Pipeline</h1>
                <p>This pipeline illustrates the steps involved in the Principal Component Analysis (PCA) algorithm,
                    from data preprocessing to dimensionality reduction and visualization of principal components.</p>
            </div>
        </header>

        <section class="dataset-section">
            <h2>Datasets</h2>
            <div class="dataset-cards">
                <div v-for="(dataset, index) in datasets" :key="index" class="dataset-card">
                    <h3>{{ dataset.title }}</h3>
                    <p>{{ dataset.description }}</p>
                </div>
            </div>
        </section>

        <section class="model-diagram-section">
            <h2>Model Diagrams</h2>
            <div class="diagram-container">
                <div v-for="(step, index) in steps" :key="index" class="pipeline-step"
                    :style="{ left: step.x + 'px', top: step.y + 'px', background: boxColors[index] }"
                    @mousedown="startDrag($event, index)">
                    <div class="step-content">
                        <h3>{{ step.title }}</h3>
                        <p v-if="!step.link">{{ step.description }}</p>
                        <a v-else :href="step.link" target="_blank" rel="noopener noreferrer">{{ step.description }}</a>
                    </div>
                </div>
                <svg class="pipeline-links">
                    <path v-for="(link, index) in links" :key="index" :d="link.path" class="link-path" />
                </svg>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            steps: [
                { title: "Data Preprocessing", description: "Standardize the dataset to center the mean at 0 and scale the variance." },
                { title: "Covariance Matrix", description: "Compute the covariance matrix to understand feature relationships." },
                { title: "Eigen Decomposition", description: "Perform eigen decomposition to get eigenvalues and eigenvectors." },
                { title: "Selecting Principal Components", description: "Choose the top k eigenvectors based on eigenvalues to form the principal components." },
                { title: "Project Data", description: "Project the data onto the selected principal components for dimensionality reduction." }
            ],
            datasets: [
                { title: "PCA Dataset", description: "A dataset consisting of multivariate data for PCA analysis." },
                { title: "Standardized Dataset", description: "A version of the original dataset that is standardized (mean = 0, variance = 1)." }
            ],
            boxColors: ['#2c235a', '#265c9e', '#3791b0', '#43c6a1', '#8df580'],  // Color palette
            boxWidth: 200,
            boxHeight: 120,
            dragging: null
        };
    },
    computed: {
        links() {
            return this.steps.slice(0, -1).map((step, index) => {
                const startX = step.x + this.boxWidth / 2;
                const startY = step.y + this.boxHeight;
                const endX = this.steps[index + 1].x + this.boxWidth / 2;
                const endY = this.steps[index + 1].y;
                return {
                    path: `M${startX},${startY} C${(startX + 50)},${startY} ${(endX - 50)},${endY} ${endX},${endY}`
                };
            });
        }
    },
    mounted() {
        this.calculatePositions();
    },
    methods: {
        calculatePositions() {
            const totalSteps = this.steps.length;
            const containerHeight = 900;
            const totalHeight = totalSteps * (this.boxHeight + 50);
            const startY = (containerHeight - totalHeight) / 2;

            this.steps.forEach((step, index) => {
                step.y = startY + index * (this.boxHeight + 90);
                step.x = 50;
            });
        },
        startDrag(event, index) {
            this.dragging = { index, startX: event.clientX, startY: event.clientY };
            document.addEventListener('mousemove', this.onDrag);
            document.addEventListener('mouseup', this.stopDrag);
        },
        onDrag(event) {
            if (this.dragging) {
                const dx = event.clientX - this.dragging.startX;
                const dy = event.clientY - this.dragging.startY;
                this.steps[this.dragging.index].x += dx;
                this.steps[this.dragging.index].y += dy;
                this.dragging.startX = event.clientX;
                this.dragging.startY = event.clientY;
            }
        },
        stopDrag() {
            this.dragging = null;
            document.removeEventListener('mousemove', this.onDrag);
            document.removeEventListener('mouseup', this.stopDrag);
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.pipeline-page {
    font-family: 'GeneralSans-Regular', sans-serif;
    padding: 20px;
    background-color: #f7f9fc;
}

header {
    text-align: center;
    margin-bottom: 40px;
}

header h1 {
    font-size: 2.5rem;
    color: #000000;
}

header p {
    font-size: 1.2rem;
    color: #000000;
}

.dataset-section {
    margin-bottom: 50px;
}

.dataset-section h2 {
    font-size: 2rem;
    color: #000000;
    text-align: center;
    margin-bottom: 20px;
}

.dataset-cards {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.dataset-card {
    background-color: #ecf0f1;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 220px;
    text-align: center;
    overflow: hidden;
}

.dataset-card h3 {
    font-size: 1.4rem;
    color: #27ae60;
    margin-bottom: 10px;
}

.dataset-card p {
    font-size: 0.9rem;
    color: #34495e;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.model-diagram-section h2 {
    font-size: 2rem;
    color: #000000;
    text-align: center;
    margin-bottom: 20px;
}

.diagram-container {
    position: relative;
    height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.pipeline-step {
    border: none;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    width: 200px;
    height: auto;
    color: white;
    text-align: center;
    cursor: move;
    overflow: hidden;
}

.step-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-bottom: 20px;
}

.pipeline-step h3 {
    font-size: 1.1rem;
    margin: 0;
}

.pipeline-step p {
    font-size: 0.9rem;
    margin: 0;
}

.pipeline-step:hover {
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

.pipeline-links {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.link-path {
    fill: none;
    stroke: #4a90e2;
    stroke-width: 3;
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
}
</style>
