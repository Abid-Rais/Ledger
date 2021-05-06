setup: 
    pip install -r requirements.txt
    cp .env.example .env
 
run: 
    python3 manage.py runserver

migrate: 
    python3 manage.py makemigrations 
    python3 manage.py migrate 