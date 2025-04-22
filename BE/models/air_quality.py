from models import db

class AirQualityData(db.Model):
    __tablename__ = 'air_quality_data'

    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(80), nullable=False)
    aqi = db.Column(db.Integer)
    pm2_5 = db.Column(db.Float)
    pm10 = db.Column(db.Float)
    co = db.Column(db.Float)
    no2 = db.Column(db.Float)
    o3 = db.Column(db.Float)
    so2 = db.Column(db.Float)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
