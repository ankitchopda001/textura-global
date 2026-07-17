from datetime import datetime
from pydantic import BaseModel, EmailStr


# ==================================================
# Contact Inquiry Schemas
# ==================================================

class InquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str


class InquiryResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str
    message: str
    created_at: datetime
    is_read: bool = False

    class Config:
        from_attributes = True


# ==================================================
# Authentication Schemas
# ==================================================

class LoginRequest(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str
