![React Kanban Board](./assets/img/kanban-screenshot.jpg)

# React Kanban Board

This repository is dedicated to practicing and showcasing modern frontend skills using React by building a Kanban board application.

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://marazmlab.github.io/React-Kanban-Board/)

&nbsp;

**Main features:**
- Manage tasks in columns (Pending, Doing, Done) with limits per column.
- Add, move, and delete tasks with instant UI updates.
- Persist board state in localStorage.
- Responsive and modern UI, ready for portfolio presentation.

&nbsp;

## 🔶 Technologies

![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![Context API](https://img.shields.io/badge/context%20api-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/babel-%23F9DC3E.svg?style=for-the-badge&logo=babel&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/github%20pages-%23181717.svg?style=for-the-badge&logo=github&logoColor=white)

&nbsp;


## 🔶 Tasks Overview

- **Task List:** Displays tasks in three columns (Pending, Doing, Done).
- **Add Task:** Users can add new tasks with a name and user assignment.
- **Move Task:** Tasks can be moved between columns (with respect to column limits).
- **Delete Task:** Remove tasks from any column.
- **Persistence:** All changes are saved in localStorage.
- **Responsive Design:** Works on desktop and mobile devices.

&nbsp;

## 🔶 Solutions provided in the project

### Example: Moving a Task Between Columns

```jsx
// In Task.js
<button
  className="task__button"
  onClick={() => moveTask(id, columnId, columnId + 1)}
  disabled={columnId === 3}
>
  →
</button>
```
This example showcases:
- **Column limits:** Prevents moving a task if the target column is full.
- **State update:** Moves the task and updates the board instantly.
- **User feedback:** Disables the button when moving is not possible.

&nbsp;

## 🔶 Conclusions

- **State management:** Context API and useState provide simple and scalable state handling.
- **Component structure:** The project demonstrates modular and reusable React components.
- **Styling:** CSS modules and media queries ensure a modern, responsive look.
- **Persistence:** The board state is always saved, even after page reloads.

This project is a great showcase for modern React and frontend skills.

&nbsp;

## 🔶 Feel free to contact me

If you have any questions or feedback, feel free to reach out!  
Find me on [GitHub](https://github.com/marazmlab) or [LinkedIn](https://www.linkedin.com/in/belz/).

&nbsp;

## 🔶 Thanks / Special thanks / Credits

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) – for providing me with this task and for code review.
