1. What problem does the context API help solve?

    The contex API allows us to centralize the state in its own store, away from the user interface portfions of the application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - Actions: Specified by the developer and made by the user. They are dispatched to various areas of the application.

    - Reducers: Take actions and return responses.

    - Store: This contains the state and reducers and helps centralize the application's dynamic behavior. The store is known as the "beacon of truth" because it contains all behavior put into the program in one place.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state, otherwise known as the global state, dictates total app behavior. Likewise, component state is limited to a specific component. So you will need to decide if the state needs to be availble throughout the application or just that one component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk serves as middleware expanding redux's ability to perform asynchronous actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Redux, it simplifies UI development while also providing additional complexity that is useful when developing applications.
