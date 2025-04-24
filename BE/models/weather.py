from models import db

class WeatherData(db.Model):
    __tablename__ = 'weather_data'
    
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(80), nullable=False)
    temperature = db.Column(db.Float)
    humidity = db.Column(db.Integer)
    description = db.Column(db.String(120))
    created_at = db.Column(db.DateTime, server_default=db.func.now())


