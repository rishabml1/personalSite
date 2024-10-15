export default {
    singleProjectHeader: {
        singleProjectTitle: 'Face recognition using PCA',
        singleProjectDate: 'sep 10,2020',
        singleProjectTag: 'PCA / OpenCV',
    },
    projectImages: [
        {
            id: 1,
            title: 'PCA',
            img: require('@/assets/images/PCA1.png'),
        },
        {
            id: 2,
            title: 'PCA',
            img: require('@/assets/images/pca2.png'),
        },
        {
            id: 3,
            title: 'PCA',
            img: require('@/assets/images/Pca3.png'),
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
                title: 'Building Training Set',
                details: 'Pandas',
            },
            {
                id: 3,
                title: 'Covariance Matrix',
                details: 'Linalg',
            },
            {
                id: 4,
                title: 'Eigenface Extraction',
                details: 'NumPy',
            },
            {
                id: 5,
                title: 'Projection onto the Eigenface Space',
                details: 'Matplotlib',
            },
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
            '',
        technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Pandas',
                    'NumPy',
                    'Linalg',
                    'OpenCV',
                ],
            },
        ],
        projectDetailsHeading: 'Details',
        projectDetails: [

            {
                id: 0,
                details:
                    'The Eigenface approach using PCA effectively reduces the dimensionality of face images, allowing for efficient and accurate face recognition. It extracts important features while discarding redundant information, leading to faster and more reliable face matching.',


            },
            {
                id: 1,
                details:
                    'The dataset consists of several known faces used for training. The images are preprocessed, normalized, and projected into the eigenface space Convert images to grayscale.Resize each image to a fixed dimension (195x231 pixels).Flatten the images to create a 1D vector for each image.A set of known faces is used for training.Training images are stored as flattened vectors in a matrix.',


            },
            {
                id: 2,
                details:
                    'The mean face is calculated by averaging all training images.',
            },
            {
                id: 3,
                details:
                    'Each training face is normalized by subtracting the mean face, removing common features across all faces.',
            },
            {
                id: 4,
                details:
                    'Eigenfaces are computed from the covariance matrix of the training data. These represent the principal components used to reconstruct faces.',
            },
            {
                id: 5,
                details:
                    ' An unknown face is compared against the training set by projecting it into the eigenface space and calculating the Euclidean distance. The closest match is selected.',
                flow: "Yes",
            },
        ],
        socialSharingsHeading: 'Share This',
        socialSharings: [
            {
                id: 1,
                name: 'Twitter',
                icon: 'twitter',
                url: 'https: //twitter.com/',
            },
            {
                id: 2,
                name: 'Instagram',
                icon: 'instagram',
                url: 'https: //instagram.com/',
            },
            {
                id: 3,
                name: 'Facebook',
                icon: 'facebook',
                url: 'https: //facebook.com/',
            },
            {
                id: 4,
                name: 'LinkedIn',
                icon: 'linkedin',
                url: 'https: //linkedin.com/',
            },
            {
                id: 5,
                name: 'Youtube',
                icon: 'youtube',
                url: 'https: //www.youtube.com/c/',
            },
        ],
    },
    relatedProject: {
        relatedProjectsHeading: 'Related Projects',
        relatedProjects: [
            {
                id: 1,
                title: 'Mobile UI',
                img: require('@/assets/images/mobile-project-1.jpg'),
            },
            {
                id: 2,
                title: 'Web Application',
                img: require('@/assets/images/web-project-1.jpg'),
            },
            {
                id: 3,
                title: 'UI Design',
                img: require('@/assets/images/ui-project-2.jpg'),
            },
            {
                id: 4,
                title: 'Kabul Mobile App UI',
                img: require('@/assets/images/mobile-project-2.jpg'),
            },
        ],
    },
};