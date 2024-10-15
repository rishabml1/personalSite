// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'RecSys for taxi booking ',
		category: 'Recommendation System',
		img: require('@/assets/images/rtaxi.png'),
	},
	{
		id: 2,
		title: 'Image captioning',
		category: 'Encoder Decoder model\n\n',
		img: require('@/assets/images/imgcap.png'),
	},
	{
		id: 3,
		title: 'Img2text for images in Indian languages',
		category: 'Transliteration model',
		img: require('@/assets/images/transliteration.jpg'),
	},
	{
		id: 4,
		title: 'Face recognition',
		category: 'Eigenface algorithm',
		img: require('@/assets/images/pca.png'),
	},
	{
		id: 5,
		title: 'Facial keypoints detection',
		category: 'CNN model',
		img: require('@/assets/images/face.png'),
	},
	{
		id: 6,
		title: 'Fetal head detection',
		category: 'Hough transform based model',
		img: require('@/assets/images/fetalhead.png'),
	},
];

export default projects;
