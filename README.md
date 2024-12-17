# Odin CV Application

## Description
This is my implementation of the CV Application project from the React course of the Odin Project's Full-Stack Javascript curriculum.

I created individual form/card components that are filled out by the user and can be individually submitted/edited. For each of these components, I held a data object in state to track user input as well as the submission status of each individual card. Upon submission, the form is hidden and a nicely formatted "CV" style work/education/skills section is shown.

I also created custom Input, Submit, and Delete components to tailor functionality to my use case. Obviously that means that there is some heirarchy of dependence between the components, but this seemed preferable to using vanilla uncontrolled inputs/buttons. Passing functions and values as props into the input fields/buttons makes them much easier to control and keeps them synced with their parent component's state.

I then take all the components and call them in a central CV component which passes necessary ids, event handlers, etc. to the child components as props. This CV component is then the only component invoked in the main.jsx file.