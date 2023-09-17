from flask import Flask

# Create a Flask application
app = Flask(__name__)

# Define a route for the root URL
@app.route('/')
def hello_world():
    return 'Hello, World!'

# Run the Flask application if this script is executed
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
