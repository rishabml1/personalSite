export default {
    singleProjectHeader: {
        singleProjectTitle: 'ENCODER-DECODER ARCHITECTURE FOR IMAGE CAPTIONING',
        singleProjectDate: 'dec 21, 2021',
        singleProjectTag: 'Computer Vision / NLP / Optimization',
    },
    projectImages: [
        {
            id: 1,
            title: 'Vriety in indian languages',
            img: require('@/assets/images/Cvall.png'),
        },
        {
            id: 2,
            title: 'Architecture',
            img: require('@/assets/images/Cvmain.png'),
        },
        {
            id: 3,
            title: 'RCNN-bilstm model',
            img: require('@/assets/images/Cvarch.png'),
        },
    ],
    projectInfo: {
        clientHeading: 'Project Flow',
        companyInfos: [
            {
                id: 1,
                title: 'Datasets',
                details: 'Roboflow,IIIT-ILST',
            },
            {
                id: 2,
                title: 'Object Detection',
                details: 'Yolo v8',
            },
            {
                id: 3,
                title: 'Text classification',
                details: 'Resnet-50',
            },
            {
                id: 4,
                title: 'Text to Image',
                details: 'CNN-Bilstm',
            },
            {
                id: 5,
                title: 'Transliteration',
                details: 'Text2Text lstm',
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
                    'Pytorch',
                    'Ultralytics',
                    'Roboflow',
                    'OpenCV',
                ],
            },
        ],
        projectDetailsHeading: 'Description',
        projectDetails: [

            {
                id: 1,
                details:
                    'This projet was built using an Encoder-Decoder architecture commonly used for image captioning tasks. The architecture is divided into three main components:',


            },
            {
                id: 2,
                details:
                    '1. EncoderCNN',
            },
            {
                id: 3,
                details:
                    '2. DecoderCNN',
            },
            {
                id: 4,
                details:
                    '3. Sampling',
            },
            {
                id: 5,
                details:
                    ' The EncoderCNN is responsible for processing the input image and extracting relevant features. It begins with the input image itself, which is then passed through a ResNet-50 backbone for feature extraction. These extracted features are then transformed by a linear layer to achieve a specific embed size. The output of the EncoderCNN is a set of feature vectors that represent the image in a format suitable for the decoder. ',
            },
            {
                id: 6,
                details:
                    ' The DecoderRNN takes these encoded image features and generates captions. It starts with an embedding layer that creates word embeddings for the input text. These embeddings are then concatenated with the image feature vectors from the encoder. This combined information is processed by an LSTM layer, which generates sequential information. The output of the LSTM is transformed by another linear layer to match the vocabulary size. The final output of the DecoderRNN is a set of word predictions, representing probabilities for each word in the vocabulary.',
            },
            {
                id: 7,
                details:
                    'After the Decoder generates word predictions, the Sampling component comes into play. It uses a greedy search algorithm to select the most probable words and generate the final caption. This step is crucial in converting the probabilistic output of the decoder into a coherent and relevant caption for the input image.',
                archi: "Yes",
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