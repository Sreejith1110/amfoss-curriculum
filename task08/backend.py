from flask import Flask,jsonify,request;
from flask_sqlalchemy import SQLAlchemy;
from flask_cors import CORS;

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:newpassword@127.0.0.1/mydb"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False

db=SQLAlchemy(app)

class Login(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username =db.Column(db.String(50),unique=True, nullable=False)
    password= db.Column(db.String(200),nullable=False)

class Watchlater(db.Model):
    username = db.Column(db.String(50),unique=True,nullable=False)
    Movie_id=db.Column(db.Integer,primary_key=True)
    Movie_name=db.Column(db.String(300),nullable=False)
    Movie_img = db.Column(db.String(500),nullable=False)
    Year=db.Column(db.Integer,nullable=False)
    Movie_description=db.Column(db.String(3000),nullable=False)
    Movie_author=db.Column(db.String(100),nullable=False)

class Review(db.Model):
    Movie_id = db.Column(db.Integer,primary_key=True)
    Review_id=db.Column(db.Integer,primary_key=True)
    Review=db.Column(db.String(),nullable=True)

with app.app_context():
    db.create_all()
@app.route('/api/review',methods=['GET'])
def review_data():
    comment=Review.query.all()
    return(jsonify([{"Movie_id":m.Movie_id,"Review_id":m.Review_id,"Review_data":m.Review} for m in comment]))

@app.route('/api/data', methods = ['GET'])
def movie_data():
    data=Watchlater.query.all()
    return(jsonify([{"Username":m.username,"movie_id":m.Movie_id, "movie_name":m.Movie_name,"Movie_img":m.Movie_img, "year":m.Year,"movie_description":m.Movie_description,"movie_author":m.Movie_author} for m in data]))

@app.route('/api/users', methods = ['GET'])
def user_data():
    users=Login.query.all()
    return(jsonify([{"id":m.id,"username":m.username,"password":m.password} for m in users]))

# @app.route('/api/moviedata', methods = ['GET'])
# def movie_info():
#     movieDataApi =''

@app.route('/api/login', methods = ['POST'])
def get_users():
    userdata = request.get_json()
    username = userdata.get("username")
    password = userdata.get("password")

    user = Login.query.filter_by(username=username).first()
    if user and user.password == password:
        return(jsonify({"message":"Login successful"}))
    else:
        return(jsonify({"message":"Invalid Credentials"}))


@app.route('/api/register', methods = ['POST'])
def add_user():
    data = request.get_json()
    username=data.get("username")
    password=data.get("password")
    if Login.query.filter_by(username=username).first():
        return(jsonify({"message":"username already exist"}))
    else:
        new_user=Login(username=username,password=password)
        db.session.add(new_user)
        db.session.commit()
        return(jsonify({"message":"successfully registered"}))
    
if __name__=='__main__':
    app.run(debug=True)