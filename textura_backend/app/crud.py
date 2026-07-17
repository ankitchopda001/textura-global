from sqlalchemy.orm import Session

from app import models, schemas


# Create Contact Message
def create_contact_message(db: Session, contact: schemas.InquiryCreate):
    db_contact = models.ContactMessage(
        name=contact.name,
        email=contact.email,
        phone=contact.phone,
        message=contact.message,
    )

    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)

    return db_contact


# Get All Contact Messages
def get_all_contact_messages(db: Session):
    return (
        db.query(models.ContactMessage)
        .order_by(models.ContactMessage.created_at.desc())
        .all()
    )


# Get Contact Message by ID
def get_contact_message_by_id(db: Session, message_id: int):
    return (
        db.query(models.ContactMessage)
        .filter(models.ContactMessage.id == message_id)
        .first()
    )


# Delete Contact Message
def delete_contact_message(db: Session, message_id: int):
    contact = (
        db.query(models.ContactMessage)
        .filter(models.ContactMessage.id == message_id)
        .first()
    )

    if contact:
        db.delete(contact)
        db.commit()

    return contact

# Mark Inquiry as Read
def mark_as_read(db: Session, message_id: int):
    contact = (
        db.query(models.ContactMessage)
        .filter(models.ContactMessage.id == message_id)
        .first()
    )

    if contact:
        contact.is_read = True
        db.commit()
        db.refresh(contact)

    return contact

def delete_multiple_contacts(db, ids):
    deleted = (
        db.query(models.ContactMessage)
        .filter(models.ContactMessage.id.in_(ids))
        .delete(synchronize_session=False)
    )

    db.commit()

    return deleted

# Mark Multiple Inquiries as Read
def mark_multiple_as_read(db, ids: list[int]):
    contacts = (
        db.query(models.ContactMessage)
        .filter(models.ContactMessage.id.in_(ids))
        .all()
    )

    for contact in contacts:
        contact.is_read = True

    db.commit()

    return contacts