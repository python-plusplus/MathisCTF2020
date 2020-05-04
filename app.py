from flask import Flask, render_template, request

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

@app.route("/flag3", methods=['POST', 'GET'])
def flag3():
    try:
        if request.form['classid'] == 'canyoufindtheonethatisdifferent?':
            return render_template('flag3Scene1.html')
        elif request.form['classid'] == 'math101':
            return render_template('flag3Scene2.html')
        elif request.form['classid'] == 'chess101':
            return render_template('flag3Scene3.html')
        else:
            return render_template('flag3.html')
    except:
        return render_template('flag3.html')

@app.route("/flag4")
def flag4():
    return render_template('flag4.html')

@app.route("/flag0")
def flag0():
    return render_template('flag0.html')

@app.route("/flag69", methods=['POST', 'GET'])
def flag69():
    try:
        if request.form['input1'] == '4408' and request.form['input2'] == '4700' and request.form['input3'] == '8012' and request.form['input4'] == '6753':
            return render_template('flag69rightans.html')
        else:
            return render_template('flag69wrong.html')
    except:
        return render_template('flag69.html')


if __name__ == '__main__':
    app.run()
