export default {
    singleProjectHeader: {
        singleProjectTitle: 'Face recognition using PCA',
        singleProjectDate: 'sep 10,2020',
        singleProjectTag: 'Pytorch / OpenCV',
    },
    projectImages: [
        {
            id: 1,
            title: 'PCA',
            img: require('@/assets/images/haar_cascade_micheobama.png'),
        },
        {
            id: 2,
            title: 'PCA',
            img: require('@/assets/images/obamakeypoints.jpg'),
        },
        {
            id: 3,
            title: 'PCA',
            img: require('@/assets/images/landmarks_numbered.jpg'),
        },
    ],
    projectInfo: {
        clientHeading: 'Project Flow',
        companyInfos: [
            {
                id: 1,
                title: 'Data Collection and Preprocessing',
                details: 'Kaggle',
            },
            {
                id: 2,
                title: 'Model Design',
                details: ' Pytorch',
            },
            {
                id: 3,
                title: 'Training and Optimization',
                details: ' HyperParameter Tuning',
            },
            {
                id: 4,
                title: 'Evaluation and Results',
                details: ' OpenCV',
            },
        ],
        objectivesHeading: ' Objective',
        objectivesDetails:
            '',
        technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Pandas',
                    'NumPy',
                    'Pytorch',
                    'OpenCV',
                ],
            },
        ],
        projectDetailsHeading: 'Details',
        projectDetails: [

            {
                id: 1,
                details: 'The project aims to detect key facial points such as the eyes, nose, and mouth in images using deep learning methods. ',
            },

            {
                id: 2,
                details: 'The primary objective of the project is to accurately predict 68 facial keypoints on human faces. The applications of this project include face alignment to improve recognition accuracy, facial expression analysis, and augmented reality such as face filters.',
            },

            {
                id: 3,
                details: 'The dataset used for training the model is sourced from Kaggle’s Facial Keypoints Detection dataset. The dataset contains grayscale images of human faces, each annotated with 15 keypoints marking features such as the corners of the eyes, nose tip, and edges of the mouth.',
            },

            {
                id: 4,
                details: 'The model used in this project is a Convolutional Neural Network (CNN). The CNN is designed to detect local patterns in images, leveraging layers such as convolutional layers, ReLU activations, and max-pooling layers. The final layer is a dense layer that outputs the (x, y) coordinates of the keypoints.',
            },

            {
                id: 5,
                details: 'The model is trained using the Mean Squared Error (MSE) loss function, which measures the difference between the predicted and true keypoints. The Adam optimizer is employed for its fast convergence properties. The dataset is split into training and validation sets for proper model evaluation.',
            },

            {
                id: 6,
                details: 'The performance of the model is measured based on its ability to predict the 68 key points on the human face. Results include accurate prediction of features such as the eyes, nose, mouth, and jawline. Visualizations of the results are provided by overlaying the predicted keypoints on the original face images.',
            },

            {
                id: 7,
                details: 'Challenges faced in the project include variations in lighting conditions, different facial expressions, and partial face occlusions, such as faces with sunglasses or masks. Improvements that could be made include data augmentation to introduce variability and fine-tuning the model using transfer learning from pre-trained models.',
            },

            {
                id: 8,
                details: 'In conclusion, the project successfully demonstrates the capability of CNNs to accurately detect facial keypoints. This has practical implications for areas like facial recognition, augmented reality, and security systems. Future work could expand on detecting additional landmarks and integrating the model for real-time applications on mobile or web platforms.',
            },
        ]
        ,
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