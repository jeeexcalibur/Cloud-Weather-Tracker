from flask import Flask, jsonify, request
from flask_cors import CORS
from services.weather_service import get_weather_and_air_quality
from config import Config
from models import db
from models import WeatherData

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

@app.route('/api/history/weather', methods=["GET"])
def get_weather_history():
    try:
        # Ambil data cuaca terbaru dari database
        weather_history = WeatherData.query.order_by(WeatherData.created_at.desc()).limit(10).all()

        # Konversi hasil ke dalam format JSON
        history_data = [{
            'id': record.id,
            'city': record.city,
            'temperature': record.temperature,
            'humidity': record.humidity,
            'description': record.description,
            'created_at': record.created_at
        } for record in weather_history]

        return jsonify(history_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/api/history/weather', methods=['DELETE'])
def delete_all_history():
    try:
        WeatherData.query.delete()  # Menghapus semua data
        db.session.commit()  # Commit perubahan ke database
        return jsonify({"message": "All history deleted successfully"}), 200
    except Exception as e:
        return jsonify({"message": f"Error: {str(e)}"}), 500

@app.route('/api/history/weather/<int:id>', methods=['DELETE'])
def delete_history(id):
    history = WeatherData.query.get(id)
    if history:
        db.session.delete(history)
        db.session.commit()
        return jsonify({"message": "History deleted successfully"}), 200
    return jsonify({"message": "History not found"}), 404

@app.route('/create-tables')
def create_tables():
    db.create_all()
    return 'Tables created!', 200



if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Buat tabel jika belum ada
    app.run(debug=True, host="0.0.0.0")
