# TMT project dashboard and reprot #

Dashboard and report generation for a production line, built using Flask/ReactJS.
Built with Flask JWT Backend and a React/Redux Front-End with Material UI.

* Python 2.7+ or 3.x
* Pytest
* Heroku
* Flask
* React
* Redux
* React-Router 2.0
* React-Router-Redux
* Babel 6
* SCSS processing
* Webpack

![screenshot](http://i.imgur.com/ZIS4qkw.png)

### Setup python environment
'''sh
$ virtualenv venv -p python3
$ source venv/bin/activate
'''

### Create DB
#### For postgres (my prefered db)
```sh
$ createdb yourdb
$ export DATABASE_URL="postgresql:///yourdb"
'''

or

```sh
$ export DATABASE_URL="postgresql://localhost/yourdb"

or

$ export DATABASE_URL="mysql+mysqlconnector://localhost/yourdb"

or

$ export DATABASE_URL="sqlite:///your.db"

$ python manage.py db init
$ python manage.py create_db
$ python manage.py db upgrade
$ python manage.py db migrate
```

To update database after creating new migrations, use:

```sh
$ python manage.py db upgrade
```

### Install Front-End Requirements
```sh
$ cd static
$ npm install
```

### Run Back-End

```sh
$ python manage.py runserver
```

### Test Back-End

```sh
$ python test.py --cov-report=term --cov-report=html --cov=application/ tests/
```

### Run Front-End

```sh
$ cd static
$ npm start
```

### Build Front-End

```sh
$ npm run build:production
```
