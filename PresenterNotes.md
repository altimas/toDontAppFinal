## Slide 1

Just a Place Holder while people filter in.

## Slide 2

#### Who Am I?

Going on 4 years now, professional quarantiner and introvert.

Worked in HC for 12 Years
Self Taught Developer
Worked as a Full Time Remote Developer for the last 4 years

Primarily FrontEnd Developer with React

Currently working for a startup in the Healthcare industry

    We work with nutritionists and my primary purpose seems to be to see what I can get away with eating on screen before they make a comment about my unhealthy eating habits.

Portfolio and information at www.beardedsquid.com

    Obligatory self-promotion.

## Slide 3

#### What is Context?

The thing that helps you understand “inside” jokes.

A part of React that lets you Create, Provide, and Consume a Global State.

Basically just a way to get data from one place to another.

Helps avoid “prop-drilling”

Great for small applications

## Slide 4

#### Cons of Context

It can make components harder to reuse.

    " A component that relies on the context imposes hidden dependency on respective Provider in component hierarchy. It is loosely coupled to it yet it may malfunction if there's no expected provided value; if there's no Provider, Consumer is still rendered with undefined value, this behaviour cannot be changed without manual value validation."

For bigger applications where Context is being consumed in a lot of places, it can cause a lot of unnecessary re-renders.

    Anytime the context is updated it will generally re-render every component that consumes that value.

## Slide 5

#### Biggest Con of Context

(Picture of Nicholas Cage looking Majestic AF in Con-Air)

    It is in no way... related to Nicholas Cage's greatest action thriller ever, ConAir.

    Really missed a great marketing opprotunity there in my humble opinion.

    Way to go Zuckerburg..

## Slide 6

#### React vs Redux

(Graphic)

    Talk about great controversy of using one or the other
    Latest version of Redux actually uses

## Slide 7

#### Redux

Can use MiddleWare to help resolve some side effects, like doing requests asynchronously and waiting for a Promise resolve to update global state.

    "Any meaningful web app needs to execute complex logic, usually including asynchronous work such as making AJAX requests. That code is no longer purely a function of its inputs, and the interactions with the outside world are known as “side effects”

    Redux is inspired by functional programming, and out of the box, has no place for side effects to be executed"

Has some nice Dev Tool support where you can view the complete history of your state changes which makes debugging a bit nicer.
Probably the better choice for large scale applications that require a lot of Global State changes.

## Slide 8

#### Basic Context

To create a context, we’ll use the createContext method from React, which accepts a parameter for its default value:

```javascript
import React from 'react';

const newContext = React.createContext({ color: 'black' });
The createContext method returns an object with a Provider and a Consumer component:

const { Provider, Consumer } = newContext;
```

The Provider component is what makes the state available to all child components, no matter how deeply nested they are within the component hierarchy. The Provider component receives a value prop. This is where we’ll pass our current value:

```javascript
<Provider value={color: 'blue'}>
  {children}
</Provider>
```

The Consumer, as its name implies, consumes the data from the Provider without any need for prop drilling:

```javascript
<Consumer>{(value) => <span>{value}</span>}}</Consumer>
```

## Slide 9

#### What are Hooks?

    “Hooks are a type of function that enable the execution of custom code in a base code. In React, Hooks are special functions that allow us to “hook into” its core features.
    React Hooks provide an alternative to writing class-based components by allowing us to easily handle state management from functional components.”

    - Ebenezer Don (www.ebenezerdon.com)

## Slide 10

#### useContext Hook

Before: ( SNippet of Consumer from Above)

    Had to use Consumer to basically wrap the component we wanted to Consume the context in with a function as a child that passed in our value.

    This involved a lot of component nesting and increases the complexity of our code.

Now: (Snippet of useContext)

    So now with the useContext hook, this is a lot more straightforward. We just use useContext and access our state with it. BOOM.

## Slide 11

#### useReducer Hook

New with 16.7

Works a lot like the reduce() function

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

Preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one

## Slide 12

#### Example

(Pic of Example of Reducer)

## Slide 13

#### Lets Code!

Links to Repos (Will paste in Chat)

Starting Point: https://github.com/altimas/toDontApp

Final App: https://github.com/altimas/toDontAppFinal

## (End of Slides)

---

# The To Don't App

-   Introduce the To Dont App

    Everyone and their Mother makes a To Do App

    So we made an app of things Not To Do instead

    It's a relatively small application with some unnecesary complexity to showcase a few benefits of `useContext` and `useReducer`;

    Bootstrapped with Create React App

    Uses Sass Modules with node-sass' help

    Material UI for some base components so I don't have to get too crazy with styling.

-   What it does currently.

    Currently just uses local state in the `App.js` file to hold an array of objects that are our ToDonts.

    We update this state with an input and a button that triggers the function that updates that state.

    We are just passing down the state and our handleAddNewToDont function.

-   What we want to do:

    -   Create a Context for our ToDonts
    -   use the `useContext` hook to create that and our AppProvider and then consume our Context
    -   use the `useReducer` hook to define a reducer that handles some actions passed in
    -   use the `useReducer`'s cool optional initializer function as a third param and pass in our stored state from localStorage as our initial state instead.

-   First:

    -   create our context in a context folder in `context.js`
    -   create our reducer in `reducer.js` in our context folder
    -   import in the reducer to our `context.js` file and use it in the `useReducer` Hook as the first argument

-   Second:

    -   We need to use our context!
    -   Use the `AppProvider` in `index.js`
        -   Basically just want to wrap out App at the highest level if we want to access our state in the whole app.
    -   In `App.js` lets get rid of our local state and our `handleAddNewToDont` function.
    -   Declare our `state`in `useContext(AppContext)` in `App.js` as well
    -   use state as our toDonts on ToDontsContainer instead of our local state.
    -   just get rid of our create function all together since we'll just use a dispatch now.

-   Third:

    -   Hook up our context and use a dispatch to create a ToDont in the InputContainer.

-   Fourth:

    -   Hook up our context and use a dispatch to delete a ToDont in the ToDont component.
    -   Yay! We are creating and deleting! How awesome!
    -   But... What if we refresh?
    -   ITS ALL GONE

-   Fifth:
    -   Lets persist our global state in localStorage for a better User Experience.
    -   In our `reducer.js` we need to have each action pass our state to LocalStorage
    -   Show the cool Application part of Chrome Dev Tools where you can see localStorage easier.
    -   Finally we need to pull in localStorage (if it exists) as our initialState
    -   We do this at our `useReducer` in our `context.js` by using our cool initializer function!
