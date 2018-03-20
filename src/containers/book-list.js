import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//removed 'export default' statement because we no longer want to export
// a react component, but a 'container' instead (see below 'connect' function)
class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//this is the function that retrieves a piece of the state and maps it to
//the 'props' of a component (as the name suggests)
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed
    //to all or our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//this is where the connection between a react component and the redux state happens
export default connect(mapStateToProps, mapDispatchToProps)(BookList);