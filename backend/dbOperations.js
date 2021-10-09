const JSONdb = require('simple-json-db');


const authorsDb = new JSONdb('./authorsDb.json', {asyncWrite: false,syncOnWrite: true,jsonSpaces:4});
const booksDb = new JSONdb('./booksDb.json', {asyncWrite: false,syncOnWrite: true,jsonSpaces:4});

 const initDbs = () => {
  // booksDb.set('1',{
  //   bookName: 'Swimming for beginners',
  //   isbn: '192-555-823',
  //   authorId: '1'
  //
  // })
  //  booksDb.set('2',{
  //    bookName: 'Swimming for pros',
  //    isbn: '777-777-823',
  //    authorId: '1'
  //
  //  })
  //  booksDb.set('3',{
  //    bookName: 'The lost symbol',
  //    isbn: '543-222-334',
  //    authorId: '2'
  // })

}
const addBook = (requestBody) => {
   console.log(requestBody)
  if (!(requestBody.bookName && requestBody.isbn && requestBody.authorId)) {
    return false;
  }

  if (!(authorsDb.has(requestBody.authorId))) {
    return false;
  }

   let newId =  Math.floor(Math.random() * (999))
  while (booksDb.has(newId + '')) {
    newId =  Math.floor(Math.random() * (999))
  }
   booksDb.set(
      newId + '',
     {
       bookName: requestBody.bookName,
       isbn: requestBody.isbn,
       authorId: requestBody.authorId,
     }
  )
  return true;
}

const addAuthor = (requestBody) => {
   // console.log(requestBody)
   if (!(requestBody.firstName && requestBody.lastName)) {
     return false;
   }


  let newId =  Math.floor(Math.random() * (999))
  while (authorsDb.has(newId + '')) {
    newId =  Math.floor(Math.random() * (999))
  }
  authorsDb.set(
    newId + '',
    {
      firstName: requestBody.firstName,
      lastName: requestBody.lastName,
    }
  )
  return true;
}
const getAllBooks = () => {
   return [booksDb.JSON()]
}

const getAllBooksOfAuthor = (authorId) => {
   const allBooks = booksDb.JSON();
   let result = []
  for (const key of Object.keys(allBooks)) {
    if (allBooks[key].authorId === authorId) {
      result.push({key: key, data: allBooks[key]})
    }
  }
  return result
}

const getAllAuthors = () => {
   return authorsDb.JSON()
}

const getBook = (bookId) => {


   return booksDb.get(bookId)
}

const getAuthor = (authorId) => {
  return authorsDb.get(authorId)


}

//todo: check if isbn is unique

module.exports = { initDbs , addBook, getAllBooks, getAllBooksOfAuthor, getAllAuthors, addAuthor, getBook,getAuthor}
