from datetime import datetime
from pydantic import BaseModel, EmailStr
from fastapi import APIRouter, HTTPException

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)


# ====================================
# Contact Inquiry Schemas
# ====================================

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
    is_read: bool

    class Config:
        from_attributes = True


# ====================================
# Authentication Schemas
# ====================================

class LoginRequest(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str

@router.post("/login", response_model=TokenResponse)
def login(data: LoginRequest):

    # Demo Login
    if data.username == "admin" and data.password == "admin123":
        return {
            "access_token": "textura_admin_token",
            "token_type": "bearer"
        }

    raise HTTPException(
        status_code=401,
        detail="Invalid username or password"
    )