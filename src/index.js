import askQuestion from "./askQuestion.js"
import { Library } from "./library.js"

const library = new Library()
console.log(`Welcome to our library`)
let exit=false
do {
  printMenu()
  const choice = await askQuestion('Make your choice and press enter')
  switch (choice) {
    case 's':
      const searchTerm = await askQuestion('What are you looking for?')
      console.log(library.search(searchTerm))
      break
    case 'q':
      exit = true
      console.log('Exiting...')
      break
    default:
      console.log('Unknown choice')
  }
} while(!exit)

process.exit()

function printMenu() {
  console.log('What is your business?')
  console.log('Press s to Search for a book')
}