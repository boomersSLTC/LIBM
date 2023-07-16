# Library Management System

This repository contains the front-end code for a Library Management System developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The system aims to streamline the management of a library by providing an efficient and user-friendly interface for librarians and library patrons.

## Features

1. *User Authentication*: The system allows users to create accounts and authenticate themselves before accessing the library's resources. It supports both librarian and patron roles.

2. *Catalog Management*: Librarians can add, edit, and remove books from the library's catalog. Each book entry includes details such as title, author, genre, and availability status.

3. *Search and Filtering*: Patrons can easily search for books by title, author, genre, or any other relevant keyword. The system provides filtering options to refine search results based on various criteria.

4. *Book Reservation*: Patrons can reserve books that are currently available. The system automatically updates the availability status to prevent double bookings.

5. *Borrowing and Returning*: Patrons can borrow books they have reserved or check out books that are available in the library. The system maintains a record of borrowed books and due dates to manage return deadlines.

6. *Renewal*: Patrons can request to renew their borrowed books if they need an extension. The system checks for availability and allows renewals based on the library's policies.

7. *User Profile*: Users have access to a personal profile where they can update their information, view their borrowing history, and manage their reserved and borrowed books.

8. *Notifications*: The system sends automated notifications to users regarding due dates, book availability, reservation confirmations, and other relevant updates.

## Technologies Used

The front-end code in this repository is developed using the following technologies:

- *React.js*: A JavaScript library for building user interfaces. It enables the creation of reusable UI components, state management, and efficient rendering.

- *React Router*: A routing library for React applications. It facilitates navigation between different views and enables dynamic routing based on user actions.

- *Redux*: A state management library for JavaScript applications. It provides a predictable state container, making it easier to manage and update application state.

- *Axios*: A popular JavaScript library used to make HTTP requests from the browser. It is used to communicate with the back-end API and retrieve data from the server.


## Getting Started

To run the front-end code on your local machine, follow these steps:

1. Clone this repository to your local machine using the command:
2. Navigate to the project directory:
3. Install the required dependencies:
4. Start the development server:
5. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).
