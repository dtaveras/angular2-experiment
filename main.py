import sqlite3

import logging
from logging.handlers import RotatingFileHandler

from flask import Flask,url_for,request

app = Flask(__name__, static_folder='src', static_url_path='/src')

logFilehandler = RotatingFileHandler('app.log', maxBytes=10000, backupCount=1)
logFilehandler.setLevel(logging.DEBUG)
app.logger.addHandler(logFilehandler)
#app.logger.warning(request.headers)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/<path:path>')
def unknown(path):
    return "Unknown path: " + path

if __name__ == '__main__':
    app.run(port=8889)
