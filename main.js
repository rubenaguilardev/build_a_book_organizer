let books = [
  {
    title: "Don't Make Me Think",
    authorName: 'Steve Krug',
    releaseYear: 2013,
  },
  {
    title: 'The Design of Everyday Things',
    authorName: 'Don Norman',
    releaseYear: 2018,
  },
  {
    title: 'Laws of UX',
    authorName: 'Jon Yablonski',
    releaseYear: 2021,
  }
]

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

let filteredBooks = books.filter(year => year.releaseYear > 2015);
filteredBooks.sort((a, b) => a.releaseYear - b.releaseYear);
