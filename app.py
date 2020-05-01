from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def intro():
    return render_template('index.html')

@app.route('/gangshit')
def welcome():
    return render_template('welcome.html')

@app.route("/flag1")
def flag1():
    return render_template('flag1.html')

@app.route("/flag2")
def flag2():
    return render_template('flag2.html')

@app.route("/flag3")
def flag3():
    return render_template('flag3.html')

@app.route("/flag4")
def flag4():
    return render_template('flag4.html')

@app.route("/flag0")
def flag0():
    return render_template('flag0.html')

@app.route("/flag69")
def flag69():
    return render_template('flag69.html')


if __name__ == '__main__':
    app.run()
