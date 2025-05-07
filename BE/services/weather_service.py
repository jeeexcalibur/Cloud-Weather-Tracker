from models import db
from models.weather import WeatherData
from models.air_quality import AirQualityData
import requests
from config import Config

def get_weather_and_air_quality(city):
    api_key = Config.API_KEY

    weather_url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    weather_response = requests.get(weather_url)

    # ⛳️ Tambahkan debug log di sini:
    print("🔍 City:", city)
    print("🔑 API Key (first 5 chars):", api_key[:5] if api_key else "None")
    print("🌐 Weather URL:", weather_url)
    print("📥 Weather status code:", weather_response.status_code)
    print("📥 Weather response:", weather_response.text)

    if weather_response.status_code != 200:
        return None, None

    weather_data = weather_response.json()
    lat = weather_data["coord"]["lat"]
    lon = weather_data["coord"]["lon"]

    air_url = f'https://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={api_key}'
    air_response = requests.get(air_url)

    print("🌐 Air Quality status code:", air_response.status_code)
    print("📥 Air response:", air_response.text)

    if air_response.status_code != 200:
        return weather_data, None

    air_data = air_response.json()

    # ... sisanya tetap ...

    api_key = Config.API_KEY

    # Ambil data cuaca
    weather_url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    weather_response = requests.get(weather_url)

    if weather_response.status_code != 200:
        return None, None

    weather_data = weather_response.json()

    # Ambil data kualitas udara
    lat = weather_data["coord"]["lat"]
    lon = weather_data["coord"]["lon"]

    air_url = f'https://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={api_key}'
    air_response = requests.get(air_url)

    if air_response.status_code != 200:
        return weather_data, None

    air_data = air_response.json()

    # Simpan data ke database
    city_name = weather_data["name"]

    # Simpan cuaca
    weather_entry = WeatherData(
        city=city_name,
        temperature=weather_data["main"]["temp"],
        humidity=weather_data["main"]["humidity"],
        description=weather_data["weather"][0]["description"]
    )
    db.session.add(weather_entry)

    # Simpan kualitas udara
    air_quality_entry = AirQualityData(
        city=city_name,
        aqi=air_data["list"][0]["main"]["aqi"],
        pm2_5=air_data["list"][0]["components"]["pm2_5"],
        pm10=air_data["list"][0]["components"]["pm10"],
        co=air_data["list"][0]["components"]["co"],
        no2=air_data["list"][0]["components"]["no2"],
        o3=air_data["list"][0]["components"]["o3"],
        so2=air_data["list"][0]["components"]["so2"]
    )
    db.session.add(air_quality_entry)

    # Commit ke database
    db.session.commit()

    return weather_data, air_data
