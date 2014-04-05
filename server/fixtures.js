if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'introducing telescope',
		author: 'sacha greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	});

	Posts.insert({
		title: 'Meteor',
		author: 'Tom Coleman', 
		url: 'http://meteor.com'
	});
	Posts.insert({
		title: 'The Meteor Book2', 
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	});
}