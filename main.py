import os
import sqlite3
import logging

from logging.handlers import RotatingFileHandler
from flask import Flask,url_for,request,redirect
from werkzeug import secure_filename

LOG_FILE = 'flask-server.log'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__, static_folder='src', static_url_path='/src')

logFilehandler = RotatingFileHandler(LOG_FILE, maxBytes=10000, backupCount=1)
logFilehandler.setLevel(logging.DEBUG)
app.logger.addHandler(logFilehandler)
#app.logger.warning(request.headers)

app.config['UPLOAD_FOLDER'] = './'
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024 #10MB MAX Upload size

def is_file_allowed(filename):
    return ('.' in filename) and (filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS)

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file_key = request.files.iterkeys().next()
        app.logger.warning("Selected File Key: " + file_key)
        file = request.files[file_key]
        if file and is_file_allowed(file.filename):
            filename = secure_filename(file.filename)
            app.logger.warning("Saving File: " + filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return '''<div>Done uploading thanks</div> '''
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form action="/upload" method=post enctype=multipart/form-data>
      <p><input type=file name=file accept="image/*" capture>
         <input type=submit value=Upload>
    </form>
    '''

@app.route('/<path:path>')
def unknown(path):
    return "Unknown path: " + path

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0',port=8889)
