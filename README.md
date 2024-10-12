# Docs Application

This is a simple Docs management application built with React.js. The app allows users to add, delete, and mark tasks as completed. Completed tasks are visually distinguished by changing their color to green. The app also saves data in local storage, ensuring tasks persist across page reloads.

## Features

1. **Add Docs:**
   - Users can add new tasks through a modal input form.
   - Each task is given a unique ID.

2. **Delete Docs:**
   - Users can delete tasks by clicking the delete button on the task card.

3. **Task Completion:**
   - Clicking on a task marks it as completed, changing its color to green.

4. **Local Storage Integration:**
   - All tasks, along with their completion status and color, are saved in local storage.
   - Upon reloading the page, the app retrieves tasks from local storage, maintaining the task statuses.

5. **Responsive Design:**
   - The layout is fully responsive and adjusts across different screen sizes.

6. **Simple and Clear UI:**
   - Designed with a user-friendly interface using Tailwind CSS for styling.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/iamshivamgaur/docs-app.git
