import os

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/Build')
def build():
    #return "<h1>Build and Manage Data Infrastructure</h1>"
    return render_template('build.html')

@app.route('/Ingest')
def ingest():
    return render_template('ingest.html')

@app.route('/Prepare')
def prepare():
    return render_template('prepare.html')

@app.route('/Catalog')
def catalog():
    return render_template('catalog.html')

@app.route('/Automate')
def automate():
    return render_template('automate.html')

@app.route('/Ensure')
def ensure():
    return "<h1>Ensure data quality, security, and compliance</h1>"

if __name__ == '__main__':
    app.run(debug=True)

