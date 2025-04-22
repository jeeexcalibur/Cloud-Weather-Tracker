from flask import Flask, jsonify, request
from flask_cors import CORS
from services.weather_service import get_weather_and_air_quality
from config import Config
from models import db

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
db.init_app(app)

@app.route('/api', methods=["POST", "GET"])
def api():
    if request.method == "POST":
        data = request.get_json()
        if data and "city" in data:
            city = data["city"]
            weather, air_quality = get_weather_and_air_quality(city)

            if weather:
                return jsonify({
                    "weather": weather,
                    "air_quality": air_quality
                })
            else:
                return jsonify({"error": "Failed to fetch weather data"}), 400

    return jsonify({"message": "Hello from Flask"})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Buat tabel jika belum ada
    app.run(debug=True, host="0.0.0.0")
