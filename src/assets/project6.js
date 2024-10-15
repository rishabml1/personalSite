export default {
    singleProjectHeader: {
        singleProjectTitle: 'Hough Transform for Line Detection',
        singleProjectDate: 'feb 26, 2020',
        singleProjectTag: 'Python / OpenCV',
    },
    projectImages: [
        {
            id: 1,
            title: 'Edge Detection using Canny',
            img: require('@/assets/images/HT1.png'),
        },
        {
            id: 2,
            title: 'Hough Transform Line Detection',
            img: require('@/assets/images/HT2.png'),
        },
        {
            id: 3,
            title: 'Result of Line Detection',
            img: require('@/assets/images/HT3.png'),
        },
    ],
    projectInfo: {
        clientHeading: 'Project Flow',
        companyInfos: [
            {
                id: 1,
                title: 'Image Preprocessing',
                details: 'OpenCV',
            },
            {
                id: 2,
                title: 'Edge Detection',
                details: 'NumPy/OpenCV',
            },
            {
                id: 3,
                title: 'Hough Line Transform',
                details: 'Matlab',
            },
            {
                id: 4,
                title: 'Visualization of Detected Lines',
                details: 'Matplotlib',
            },
        ],
        objectivesHeading: 'Objective',
        objectivesDetails: 'The main objective of this project is to use the Hough Transform technique to detect straight lines in images, particularly focusing on identifying edges and representing them as lines in a more abstract space.',
        technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Python',
                    'NumPy',
                    'Matplotlib',
                    'OpenCV',
                ],
            },
        ],
        projectDetailsHeading: 'Details',
        projectDetails: [
            {
                id: 1,
                details: 'The Hough Transform is a feature extraction technique used in image processing to detect shapes such as lines and circles. This project focuses on using the Hough Line Transform to detect lines in images.',
            },
            {
                id: 2,
                details: 'The project begins with image preprocessing using Gaussian Blur and Canny edge detection. These steps are crucial to highlight the relevant edges in the image that the Hough Transform will later use for line detection.',
            },
            {
                id: 3,
                details: 'Once the edges are detected, the Hough Line Transform is applied. This algorithm maps points in the image space to lines in parameter space (using polar coordinates) to identify potential lines in the image.',
            },
            {
                id: 4,
                details: 'Detected lines are drawn on the original image for visualization. The detected lines represent the geometric shapes and structures in the image in a more abstract way, which is useful for tasks like lane detection in autonomous driving or identifying shapes in architectural images.',
            },
            {
                id: 5,
                details: 'Challenges in this project include dealing with noise and irrelevant edges, which can lead to false positives in line detection. Tuning the parameters of the Canny edge detector and the Hough Transform can improve the accuracy.',
            },
            {
                id: 6,
                details: 'The project is implemented using Python with OpenCV for image processing, NumPy for numerical operations, and Matplotlib for visualizing the results.',
            },
            {
                id: 7,
                details: 'The project successfully demonstrates the application of the Hough Transform in line detection. Further improvements can be made by applying the probabilistic Hough Transform to detect lines more efficiently in larger images or videos.',
            },
            {
                id: 8,
                details: 'In conclusion, this project highlights the practical use of the Hough Transform for line detection in various image processing applications, such as object detection, pattern recognition, and autonomous systems.',
            },
        ],
        socialSharingsHeading: 'Share This',
        socialSharings: [
            {
                id: 1,
                name: 'Twitter',
                icon: 'twitter',
                url: 'https://twitter.com/',
            },
            {
                id: 2,
                name: 'Instagram',
                icon: 'instagram',
                url: 'https://instagram.com/',
            },
            {
                id: 3,
                name: 'Facebook',
                icon: 'facebook',
                url: 'https://facebook.com/',
            },
            {
                id: 4,
                name: 'LinkedIn',
                icon: 'linkedin',
                url: 'https://linkedin.com/',
            },
            {
                id: 5,
                name: 'Youtube',
                icon: 'youtube',
                url: 'https://www.youtube.com/c/',
            },
        ],
    },
    relatedProject: {
        relatedProjectsHeading: 'Related Projects',
        relatedProjects: [
            {
                id: 1,
                title: 'Lane Detection with Hough Transform',
                img: require('@/assets/images/rtaxi.jpg'),
            },
            {
                id: 2,
                title: 'Circle Detection with Hough Transform',
                img: require('@/assets/images/rtaxi.jpg'),
            },
            {
                id: 3,
                title: 'Edge Detection Techniques',
                img: require('@/assets/images/rtaxi.jpg'),
            },
            {
                id: 4,
                title: 'Shape Detection using OpenCV',
                img: require('@/assets/images/rtaxi.jpg'),
            },
        ],
    },
};
