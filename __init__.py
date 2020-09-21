from flask import Flask, render_template, request, redirect, url_for
from telebot import TeleBot


bot = TeleBot('1185122414:AAHX8O0kQ7XjQCRyQ1RQT-0G7SEYTNDa0eI')
app = Flask(__name__, static_folder='', template_folder='')

cash = []


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/resend', methods=['GET', 'POST'])
def resend():
    a = ''
    if request.method == 'POST':
        global cash
        cash.append([request.form.get('name'), request.form.get('phone')])
        a = 'world'
        try:
            for i in range(len(cash)):
                bot.send_message('328815417', f'Имя: {cash[i][0]}\nНомер: {cash[i][1]}')
                del cash[i]
        except Exception:
            pass
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run()
