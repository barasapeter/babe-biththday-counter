from flask import Flask, render_template, request, redirect, url_for
import os
from werkzeug.utils import secure_filename
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///images.db'

app.static_folder = 'uploads'

db = SQLAlchemy(app)

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(100))

with app.app_context():
    db.create_all()

@app.route('/')
def index():
    images = Image.query.all()
    return render_template('index.html', images=images)

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return redirect(request.url)

    file = request.files['file']

    if file.filename == '':
        return redirect(request.url)

    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        new_image = Image(filename=filename)
        db.session.add(new_image)
        db.session.commit()
        print(f"Image uploaded: {file_path}")
        return redirect(url_for('index'))

    return redirect(request.url)

if __name__ == '__main__':
    app.run(debug=True)
