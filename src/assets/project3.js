export default {
    singleProjectHeader: {
        singleProjectTitle: 'Text Translation from Vernacular Languages',
        singleProjectDate: 'jun 10,2024',
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
        projectDetailsHeading: 'Challenge',
        projectDetails: [

            {
                id: 1,
                details:
                    'The task at hand at top level can be split into three major divisions • Text region detection • Recognition of individual characters • Natural Language Processing for translation/transliteration',


            },
            {
                id: 2,
                details:
                    '1) Text Detection:  Detecting the presence of text within a given image and isolating the region containing the text enclosed in a bounding box',
            },
            {
                id: 3,
                details:
                    '2) Text Classification: a model for classifying text into its language group.',
            },
            {
                id: 4,
                details:
                    '3) Text Recognition: A CNN-RNN encoder decoder model to convert the cropped signboard into text (a sequence of characters)',
            },
            {
                id: 5,
                details:
                    ' 4) Transliteration: A sequence-to-sequence with attention model for transliterating the above sequence of characters to the desired language.',
                architecture: "Yes",
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