from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from pydantic import BaseModel

from app.database import SessionLocal
from app import crud, schemas

router = APIRouter(
    prefix="/api/contact",
    tags=["Contact Messages"]
)

class BulkDeleteRequest(BaseModel):
    ids: list[int]

class BulkReadRequest(BaseModel):
    ids: list[int]

# Database Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Create Contact Message
@router.post("/", response_model=schemas.InquiryResponse)
def create_contact(
    contact: schemas.InquiryCreate,
    db: Session = Depends(get_db)
):
    return crud.create_contact_message(db, contact)


# Get All Contact Messages
@router.get("/", response_model=list[schemas.InquiryResponse])
def get_contacts(db: Session = Depends(get_db)):
    return crud.get_all_contact_messages(db)


# Get Contact Message By ID
@router.get("/{message_id}", response_model=schemas.InquiryResponse)
def get_contact(message_id: int, db: Session = Depends(get_db)):
    contact = crud.get_contact_message_by_id(db, message_id)

    if not contact:
        raise HTTPException(status_code=404, detail="Contact message not found")

    return contact

# Mark Inquiry as Read
@router.put("/{message_id}/read", response_model=schemas.InquiryResponse)
def mark_read(message_id: int, db: Session = Depends(get_db)):
    contact = crud.mark_as_read(db, message_id)

    if not contact:
        raise HTTPException(
            status_code=404,
            detail="Inquiry not found"
        )

    return contact

@router.delete("/bulk-delete")
def bulk_delete(ids: List[int], db: Session = Depends(get_db)):

    deleted = crud.delete_multiple_contacts(db, ids)

    return {
        "deleted": deleted
    }

@router.post("/bulk-read")
def bulk_read(
    request: BulkReadRequest,
    db: Session = Depends(get_db),
):
    contacts = crud.mark_multiple_as_read(
        db,
        request.ids,
    )

    return contacts

# Delete Contact Message
@router.delete("/{message_id}")
def delete_contact(message_id: int, db: Session = Depends(get_db)):
    contact = crud.delete_contact_message(db, message_id)

    if not contact:
        raise HTTPException(status_code=404, detail="Contact message not found")

    return {"message": "Contact message deleted successfully"}