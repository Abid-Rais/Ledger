setup: 
    pip install -r requirements.txt
run: 
    python3 manage.py runserver
migrate: 
    python3 manage.py makemigrations 
    python3 manage.py migrate 
test: 
    python3  manage.py test 
preview: 
    npm run-script build 
    make run
