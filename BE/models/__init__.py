from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .weather import WeatherData
from .air_quality import AirQualityData