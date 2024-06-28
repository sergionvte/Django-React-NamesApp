# Names App

This is a sample project that combines Django and React to create a web application that allows users to add names to a database and display them in a list. The application uses Django for the backend and React for the frontend, along with Bootstrap for styling.

## Requirements

- Python 3.x
- Node.js
- npm (or yarn)
- Django
- Django REST Framework
- Axios
- Bootstrap

## Backend Setup (Django)

1. Clone the repository and navigate to the backend folder:

   ```bash
   git clone <REPOSITORY_URL>
   cd <REPOSITORY_NAME>/backend
   ```

2. Create a virtual environment and install dependencies:

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

3. Run the database migrations:

   ```bash
   python manage.py migrate
   ```

4. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

## Frontend Setup (React)

1. Navigate to the frontend folder:

   ```bash
   cd ../frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

## Usage

1. Open your web browser and go to `http://localhost:3000` to see the React application.
2. Enter a name in the input field and click "Submit" to add it to the list.
3. The names will be displayed in the list below the form.

## Project Structure

```plaintext
Django-React-NamesApp
├── backend
│   ├── backend
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── api
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   └── views.py
│   ├── manage.py
│   └── requirements.txt
├── frontend
│   ├── public
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── .gitignore
├── requirements.txt
└── README.md
```
