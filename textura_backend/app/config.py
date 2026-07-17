from datetime import timedelta
from dotenv import load_dotenv
import os

# Load .env file
load_dotenv()

# ==========================
# JWT Configuration
# ==========================

SECRET_KEY = os.getenv("SECRET_KEY")

ALGORITHM = os.getenv("ALGORITHM", "HS256")

ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60)
)

ACCESS_TOKEN_EXPIRE = timedelta(
    minutes=ACCESS_TOKEN_EXPIRE_MINUTES
)

# ==========================
# Admin Credentials
# ==========================

ADMIN_USERNAME = os.getenv("ADMIN_USERNAME")

ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")