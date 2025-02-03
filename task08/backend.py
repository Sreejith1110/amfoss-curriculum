from flask import Flask,jsonify,request;
from flask_cors import CORS;
import json;

app = Flask(__name__)
CORS(app)

def read_data():
    with open('./database.json','r') as f:
        return(json.load(f))

def write_data(data):
    with open('./database.json','w') as f:
        json.dump(data,f,indent=4)

@app.route('/api/login', methods = ['POST'])
def get_users():
    data= read_data()
    userdata = request.get_json()
    username = userdata.get("username")
    password = userdata.get("password")
    accessDenied = False
    if not username or not password:
        return jsonify({"message":"username and password are required"})
    for info in data['user']:
        if info['username'] == username:
            if info['password'] == password:
                return(jsonify({"message":" login successfully","data":info}))
            else:
                return(jsonify({"message":"Invalid Credentials"}))
        else:
            accessDenied = True
            
    if (accessDenied):
        return(jsonify({"message":"Username does not exist"}))

        
@app.route('/api/data',methods=['GET'])
def read_user():
    data=read_data()
    return(jsonify(data))

@app.route('/api/register', methods = ['POST'])
def add_user():
    userdata=read_data()
    data = request.get_json()
    username=data.get("username")
    password=data.get("password")
    if not username or not password:
        return jsonify({"message":"username and password are required"})
    if any(user['username'] == data['username'] for user in userdata['user']):
        return jsonify({"message":"username already exists"})
    userdata['user'].append({
        "username":username,
        "password":password,
        "watchlist":[],
        "Profile":{},
        "recommendation":[],
        "History":[]
    })
    write_data(userdata)
    return(jsonify({"message":"successfully registered"}))
if __name__=='__main__':
    app.run(debug=True)