1. What problem does the context API help solve?

    It solves the problem of passing down props from parent to component by providing a provider and consumer situation that can pass the props to each other.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are subroutines that tell the reducer how to update the state of the application. These actions are created by the action creators. The store is the single source of truth because it is the management center for state with the help of the reducers.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the overall application data and the component state refers to the data that a particular component uses directly.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is middleware that allows you to write action creators that return a function instead of on action. The thunk can be used to delay the dispatch of an action or to dispatch only if certain conditions are met.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is because of the simplicity of how it manages state from the single source of truth. The store handles the state globally.
