import {describe, it, expect, beforeEach} from 'vitest'
import { Library } from './src/library.js'

describe('library', () => {
  let library
  beforeEach(()=> {
    library = new Library()
  })
  describe('when newly created', () => {
    it('has 3 books', () => {
      expect(library.books).toHaveLength(3)
    })
    it('has titles for all books', () => {
      expect(library.books.map((b) => b.title))
        .toEqual(['Harry Potter and Chamber of Secrets',
          "Famous BTH Teachers and other myths",
          "Best recipes for grilled frog."
        ])
    })
  })
  describe('when add a book', () => {
    it('has 4 books', () => {
      library.addBook({})
      expect(library.books).toHaveLength(4)
    })
  })
  describe('when searching for a title', () => {
    it('finds existing titles', () => {
      expect(library.search('Potter'))
        .not.toHaveLength(0)
    })
  })
})