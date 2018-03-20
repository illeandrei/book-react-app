### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### About React/Redux

[Redux](https://www.udemy.com/react-redux/)?

ReactRedux
    - React and Redux are 2 seperate libraries, so it is only through this 3-rd
      library called ReactRedux that we can meld the two together and get
      a component that is actually aware of the state

Container
    - a class based component that is promoted to a container level component
    - is a react component that has a direct connection to the application state (managed by redux)
    - only a container type component is able to take in data from redux and display
      it through a react view/component
    - containers are also called 'smart components' (redux docs)

mapStateToProps()
    - this is the function that retrieves a piece of the state and maps it to
      the 'props' of a component (as the name suggests)

connect
    - this is where the connection between a react component and the redux state happens

Action Creator
    - is a function that is called by an event (user event in most cases; like 'onChange', 'onClick')
    - returns an action

Action
    - is an object
    - with 2 keys: an action 'type' and the 'payload' (the new piece of state)
    - actions are then sent automatically to all reducers through the 'bindActionCreators' (redux function)

mapDispatchToProps
    - ???
    - binds the Action Creator function to the props of the component
    - and makes sure to call bindActionCreators

bindActionCreators
    - makes sure that an action is sent to all reducers
    - it is like a funnel that makes sure to send the action to all reducers the moment
    that action is called

Reducer
    - each reducer cares about only a particular action or actions
    - it then takes the 'payload' of the action and updates the corresponding piece of state
    - is a function that returns a piece of the application state

State
    - the application state is an object, formed by reducer functions
    - once the state is updated by any reducer, the container which cares
    about that particular piece of state, re-renders and displays the new value