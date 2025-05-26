import os

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/question1')
def question1():
    return "<h1>Business Question 1 Details</h1>"

@app.route('/question2')
def question2():
    return "<h1>Business Question 2 Details</h1>"

@app.route('/question3')
def question3():
    return "<h1>Business Question 3 Details</h1>"

if __name__ == '__main__':
    app.run(debug=True)

