#Makefile
setup: 
	pip install -r requirements.txt

run: manage.py
	python3 manage.py runserver

migrate: manage.py
	python3 manage.py makemigrations 
	python3 manage.py migrate 

test: manage.py
	python3  manage.py test 

preview: package.json
	npm run-script build 
	make run
