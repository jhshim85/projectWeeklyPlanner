# Weekly Planner

## About The Project
An app helps users to plan their weekly to-do schedule. Users can select each day and adds items under different categories.

[Live Link](https://golden-gelato-beeb4b.netlify.app/)
[<img width="1658" alt="projectWeeklyPlanner" src="https://user-images.githubusercontent.com/97327628/184087463-8bf005e3-9f85-4591-af5b-e4edde83028f.png">](https://golden-gelato-beeb4b.netlify.app/)


## Built With
- HTML5
- CSS3
- Firebase
- React
- JSX

## Features
- The data is stored in Firebase for accessing
- Ultilizing React hooks to efficiently render the page
- React components used to follow best practices
- To-do items are sorted and displayed by day and categories

## Pseudo-code
1. APP Component
- import Form Component
- import Display Component
- useEffect on initial firebase call
  - create variable that makes a reference to the database
  - onValue event listener to run whenever database value changes
2. Form Component
- Initialize stateful variables (useState)
  - day (days in the week Mon ~ Sun)
    - const [day, setDay] = useState(‘’);
  - event/task (user input)
    - const [eventInput, setEventInput] = useState(‘’);
  - description of event
    - const [description, setDescription] = useState(‘’);
- when user select day, event and input its description, set them to the set-state variables
- create event listener that will handle user’s input (date, event, description of event)
- event onSubmit & onChange
- onSubmit on form & onChange on ‘select’
- by using ‘push’, push the value to the database

## Running this project locally
1. `cd into the project directory`
2. Clone this project locally by typing `git clone https://github.com/jhshim85/projectWeeklyPlanner.git`
3. Run `npm install` in your bash / command line
4. Run `npm start` in your bash / command line

## ToDo List
- Add remove button/function for users to remove finished to-do
- Replace day selection with calendar to expand the app
