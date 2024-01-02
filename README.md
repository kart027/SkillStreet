# Note-Taking App API Documentation

This Node.js application provides a RESTful API for a simple note-taking app. It allows users to create, retrieve, update, and delete text notes.

## Features

- **Create Note**: Add a new note to the database.
- **Retrieve Notes**: Get a list of all notes or retrieve a single note by its ID.
- **Update Note**: Update the content of an existing note.
- **Delete Note**: Delete a note from the database.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   npm install
   node index.js

Environment Variables:



## Endpoints

- **Create Note**:
  - `POST /api/notes`
  - Request Body:
    ```json
    {
      "title": "Your Title",
      "content": "Your Content"
    }
    ```
- **Retrieve Notes**:
  - `GET /api/notes`
- **Retrieve Note by ID**:
  - `GET /api/notes/:id`
- **Update Note**:
  - `PUT /api/notes/:id`
  - Request Body:
    ```json
    {
      "title": "Updated Title",
      "content": "Updated Content"
    }
    ```
- **Delete Note**:
  - `DELETE /api/notes/:id`
