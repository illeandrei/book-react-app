export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property (the action my also contain a payload [optional])

    console.warn('selected book', book);
    
    return {
        type: 'SELECTED-BOOK',
        payload: book
    }
}