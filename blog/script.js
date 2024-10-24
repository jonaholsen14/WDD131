const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
]

// For each article in our list:
// Create a new article element. If you have any classes on your hard coded articles in your index.html, add those to your new element in Javascript.
// Create a template literal string and store it in a variable. The contents of this string should be a copy/paste of the contents of one of your current articles from the HTML file.
// Everywhere in the copy/pasted HTML where there is information specific to this post we should replace it with the data from the current article. (${item.date})
// Set the innerHTML of the new article to the template literal string we just built.
// Append the new article to the output element so it will show on the page.

const articleHTML = (article) => {
	return `
		<div class="left">
			<h1 class="leftelements">${article.date}</h1>
			<h2 class="leftelements">${article.ages}</h2>
			<h3 class="leftelements">${article.genre}</h3>
			<h3 class="leftelements">${article.stars}</h3>
		</div>
		<div class="right">
			<h2 class="booktitle">${article.title}</h2>
			<img class="bookcover" src="${article.imgSrc}" alt="${article.imgAlt}">
			<p class="bookdescription">${article.description}</p>
		</div>
		<div class="filterform">
			<p>Filter form will go here</p>
		</div>
	`
}

const output = document.querySelector('body')

function addNewArticle(article) {
	const newArticle = document.createElement('article')
	newArticle.innerHTML = articleHTML(article)
	output.appendChild(newArticle)
}

articles.forEach((article) => {
	addNewArticle(article)
})




