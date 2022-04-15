# project-SIM
project for COMP333 by S(am), I(sabel), and M(agda)

Hi, happy grading! 

# Instructions for running our project

#Download files
#activate virtual environment
cd frontend
#use --force if you get an error
npm install --force
npm install react-use-cookie --force
npm install get-cookie --force
npm install reactstrap --force
npm install axios --force

npm start #will bring you to localhost:3000

#open another terminal window
cd backend
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver

note: authentication is mostly implemented but is causing an error, so some lines are commented out.
      uncomment lines 35 and 94 in backend/tables_app/views.py to view that functionality.
      we are getting a 401 error, so we believe it is on the backend.
