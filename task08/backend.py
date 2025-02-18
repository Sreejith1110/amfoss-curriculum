from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, vary_header=True, resources={r"/api/*": {"origins": "*"}})
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:newpassword@127.0.0.1/mydb"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class Login(db.Model):
    __tablename__ = "login"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    users=db.relationship("Watchlater",back_populates="later",lazy='dynamic')

class Watchlater(db.Model):
    __tablename__ = "watchlater"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), db.ForeignKey('login.username'), nullable=False)
    Movie_id = db.Column(db.Integer,db.ForeignKey('moviedata.Movie_id'), nullable=False)
    Movie_name = db.Column(db.String(300), nullable=False)
    Movie_img = db.Column(db.String(500), nullable=False)
    Year = db.Column(db.Integer, nullable=False)
    Movie_description = db.Column(db.String(3000), nullable=False)
    Movie_author = db.Column(db.String(100), nullable=False)
    later = db.relationship("Login",back_populates="users")
    data = db.relationship("MovieData",back_populates="watchid")

class MovieData(db.Model):
    __tablename__ = "moviedata"
    Movie_id = db.Column(db.Integer,primary_key=True,autoincrement=True, nullable=False)
    Movie_name = db.Column(db.String(300), nullable=False)
    Movie_img = db.Column(db.String(500), nullable=False)
    Year = db.Column(db.Integer, nullable=False)
    Movie_description = db.Column(db.String(3000), nullable=False)
    Movie_author = db.Column(db.String(100), nullable=False)
    text= db.relationship("Review",back_populates="Movieid",lazy='dynamic')
    watchid=db.relationship("Watchlater",back_populates="data",lazy='dynamic')


class Review(db.Model):
    __tablename__ = "review"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Movie_id = db.Column(db.Integer, db.ForeignKey('moviedata.Movie_id'), nullable=False)
    Review_text = db.Column(db.String(3000), nullable=False)
    Movieid= db.relationship("MovieData",back_populates="text")

with app.app_context():
    db.create_all()

@app.route('/api/review', methods=['GET'])
def review_data():
    reviews = Review.query.all()
    review_item=[{"Movie_id": r.Movie_id, "Review_id": r.id, "Review_data": r.Review_text} for r in reviews]
    return jsonify(review_item)

@app.route('/api/data', methods=['GET'])
def movie_data():
    data = Watchlater.query.all()
    movie_data = [{"username": m.username, "movie_id": m.Movie_id, "movie_name": m.Movie_name, "Movie_img": m.Movie_img, "year": m.Year, "movie_description": m.Movie_description, "movie_author": m.Movie_author} for m in data]
    return jsonify(movie_data)

@app.route('/api/users', methods=['GET'])
def user_data():
    users = Login.query.all()
    return jsonify([{"id": u.id, "username": u.username, "password": u.password} for u in users])

@app.route('/api/login', methods=['POST'])
def get_users():
    userdata = request.get_json()
    username = userdata.get("username")
    password = userdata.get("password")
    user = Login.query.filter_by(username=username).first()
    if user and user.password == password:
        data = user.users.all()
        movie_data = [{"username": m.username, "movie_id": m.Movie_id, 
                      "movie_name": m.Movie_name, "Movie_img": m.Movie_img, "year": m.Year, 
                      "movie_description": m.Movie_description, "movie_author": m.Movie_author} for m in data]
        return jsonify({"message": "Login successful", "data":movie_data, "user": username})
    else:
        return jsonify({"message": "Invalid Credentials"})
    

@app.route('/api/register', methods=['POST'])
def add_user():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    if Login.query.filter_by(username=username).first():
        return jsonify({"message": "Username already exists"})
    else:
        new_user = Login(username=username, password=password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "Successfully registered"})
    

@app.route('/api/watchlist', methods=['POST'])
def get_watchlist():
    data = request.get_json()
    print(data)
    username = data.strip('"')
    data = Watchlater.query.filter_by(username=username).all()
    if data:
        movie_data = [{"username": m.username, "movie_id": m.Movie_id
                       , "movie_name": m.Movie_name, "movie_img": m.Movie_img
                       ,"year": m.Year, "movie_description": m.Movie_description
                       , "movie_author": m.Movie_author} for m in data]
        return jsonify(movie_data)
    else:
        return jsonify({"message": "Nothing in the watchlist"})
    
    
@app.route('/api/moviedata', methods=['GET'])
def moviedata():
    m_data=MovieData.query.all()
    movie_data = [{ "movie_id": m.Movie_id, 
    "movie_name": m.Movie_name, "Movie_img": m.Movie_img, "year": m.Year, 
    "movie_description": m.Movie_description, "movie_author": m.Movie_author} for m in m_data]
    return jsonify({"Moviedata":movie_data})


@app.route('/api/add_Movie', methods=['POST'])
def add_movie():
    movie_d= request.get_json()
    movie_name=movie_d.get("movie_name")
    movie_img = movie_d.get("movie_img")
    year = movie_d.get("year")
    movie_description = movie_d.get("movie_description")
    movie_author = movie_d.get("movie_author")

    Movie_exist=MovieData.query.filter_by(movie_name=movie_name, movie_author=movie_author,Year=year).first()
    if Movie_exist:
        return(jsonify({"message":"Movie already added"}))
    else:
        Movie=MovieData(movie_name=movie_name,movie_img=movie_img,Year=year,movie_description=movie_description,movie_author=movie_author)
        db.session.add(Movie)
        db.session.commit()
        return(jsonify({"message":"Movie added successfully"}))


@app.route('/api/add_review',methods=["POST"])
def add_review():
    review = request.get_json()
    movie_id = review.get("movie_id")
    Review_text = review.get("review")
    if Review_text:
        Review_data = Review(Movie_id=movie_id,Review_text=Review_text)
        db.session.add(Review_data)
        db.session.commit()
        return(jsonify({"message":"Review added successfully"}))
    
@app.route('/api/show_review',methods=['POST'])
def show_review():
    data=request.get_json()
    Movie_id = data
    Movie_review=Review.query.filter_by(Movie_id=Movie_id)
    if Movie_review:
        review_data=[{"reviews":review.Review_text,"id":review.id}for review in Movie_review]
        return(jsonify({"info":review_data}))

@app.route('/api/add_watchlist', methods=['POST'])
def add_watchlist():
    data = request.get_json()
    movie_id = data.get("movie_id")
    movie_name = data.get("movie_name")
    movie_img = data.get("movie_img")
    year = data.get("year")
    movie_description = data.get("movie_description")
    movie_author = data.get("movie_author")
    username = data.get("username").strip('"')
    if Login.query.filter_by(username=username):
        existing_movie = Watchlater.query.filter_by(username=username, Movie_id=movie_id).first()

        if existing_movie:
            db.session.delete(existing_movie)
            db.session.commit()
            return jsonify({"message": "Removed from watchlist"})
        else:
            new_movie = Watchlater(username=username, Movie_id=movie_id, Movie_name=movie_name, Movie_img=movie_img, Year=year, Movie_description=movie_description, Movie_author=movie_author)
            db.session.add(new_movie)
            db.session.commit()
            return jsonify({"message": "Added to watchlist"})
    else:
        return jsonify({"message":"username not found"})


if __name__ == '__main__':
    app.run(debug=True)
