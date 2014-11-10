import sqlite3
import os
from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash

app = Flask(__name__)

# configuration
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'flaskr.db'),
    DEBUG=True,
    SECRET_KEY='development key',
    USERNAME='admin',
    PASSWORD='default'
))


app.config.from_object(__name__)
app.config.from_envvar('FLASKFBPAGEMANAGER_SETTINGS', silent=True)

def connect_db():
    return sqlite3.connect(app.config['DATABASE'])

def init_db():
    with closing(connect_db()) as db:
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

@app.before_request
def before_request():
    g.db = connect_db()

@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()


@app.route('/')
def show_entries():
    return render_template('login.html')

@app.route('/page/<int:page_id>', methods=['GET'])
def show_pages(page_id=None):
    return render_template('page.html')

@app.route('/page/<int:page_id>', methods=['POST'])
def post_page(page_id=None):
     return render_template('postPage.html')   

if __name__ == '__main__':
    app.run()
    
    