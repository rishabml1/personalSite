<template>
    <div class="pipeline-page">
        <header>
            <div class="space-y-4">

                <h1>Image Captioning Pipeline</h1>
                <p>an Encoder-Decoder model used for generating captions for image based on context</p>
            </div>
        </header>

        <section class="dataset-section">
            <h2>Datasets</h2>
            <div class="dataset-cards">
                <div v-for="(dataset, index) in datasets" :key="index" class="dataset-card">
                    <h3>{{ dataset.title }}</h3>
                    <p v-if="!dataset.link">{{ dataset.description }}</p>
                    <a v-else :href="dataset.link" target="_blank" rel="noopener noreferrer">{{ dataset.description
                        }}</a>
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
                { title: "EncoderCNN", description: "Extracts features from input images using a CNN" },
                { title: "DecoderRNN", description: "Generates text captions from image features using an RNN" },
                { title: "Sampling", description: "Selects the most probable words for the final caption" },
            ],

            datasets: [
                { title: "MS COCO Dataset", description: "Contains annotated text images for Tamil, Malayalam, and Hindi", link: "https://cocodataset.org/" },
            ],
            boxColors: [
                '#2c235a', '#265c9e', '#3791b0', '#43c6a1', '#8df580'  // Color palette
            ],
            boxWidth: 200,
            boxHeight: 120,
            dragging: null
        };
    },
    computed: {
        links() {
            return this.steps.slice(0, -1).map((step, index) => {
                const startX = step.x + this.boxWidth / 2; // Start at the middle of the box
                const startY = step.y + this.boxHeight; // Start at the bottom of the box
                const endX = this.steps[index + 1].x + this.boxWidth / 2; // End at the middle of the next box
                const endY = this.steps[index + 1].y; // Connect to the top of the next box
                return {
                    path: `M${startX},${startY} C${(startX + 50)},${startY} ${(endX - 50)},${endY} ${endX},${endY}`
                };
            });
        }
    },
    mounted() {
        // Calculate and set the positions dynamically
        this.calculatePositions();
    },
    methods: {
        calculatePositions() {
            const totalSteps = this.steps.length;
            const containerHeight = 900; // Adjust this if needed
            const totalHeight = totalSteps * (this.boxHeight + 50); // Increased spacing to 50
            const startY = (containerHeight - totalHeight) / 2; // Center the boxes vertically

            this.steps.forEach((step, index) => {
                step.y = startY + index * (this.boxHeight + 50); // Increased spacing between boxes to 50
                step.x = 50; // Keep x coordinate fixed for centering
            });
        }
        ,

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
    padding: 10px;
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
    margin-bottom: 70px;
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
    height: 700px;
    /* Adjust as necessary */
    display: flex;
    flex-direction: column;
    /* Stack items vertically */
    justify-content: center;
    /* Center items vertically */
    align-items: center;
    /* Center items horizontally (left and right) */
}


.pipeline-step {
    border: none;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    width: 200px;
    height: auto;
    /* Allow height to be dynamic based on content */
    color: white;
    text-align: center;
    cursor: move;
    overflow: hidden;
    /* Prevent overflow */
}


.step-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
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