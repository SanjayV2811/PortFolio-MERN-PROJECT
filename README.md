# User Authentication API Documentation

This document provides API endpoints for user authentication including registration, login, profile access, and logout functionality.

## Base URL
```
http://localhost:3000/api/users
```

## Authentication
The API uses JWT (JSON Web Tokens) for authentication. The token is stored in a cookie named `token`.

## Endpoints

### 1. Register User
Create a new user account.

**Endpoint:** `POST /register`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
}
```

**Validation Rules:**
- `name`: Required, string, max 100 characters, trimmed
- `email`: Required, string, max 100 characters, trimmed, lowercase
- `password`: Required, string, min 6 characters, max 255 characters

**Success Response (200):**
```json
{
    "message": "User created successfully",
    "user": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "hashedPasswordHere",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**
- `400` - All fields are required
- `400` - User already exists
- `400` - User not created

### 2. Login User
Authenticate an existing user.

**Endpoint:** `POST /login`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

**Validation Rules:**
- `email`: Required, string, max 100 characters, trimmed, lowercase
- `password`: Required, string, min 6 characters, max 255 characters

**Success Response (200):**
```json
{
    "message": "User logged in successfully",
    "user": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "hashedPasswordHere",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**
- `400` - All fields are required
- `400` - User not found
- `400` - Invalid credentials

### 3. Get User Profile
Retrieve the authenticated user's profile information.

**Endpoint:** `GET /profile`

**Headers:**
```
Content-Type: application/json
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Authentication:** Required (JWT token in cookie)

**Success Response (200):**
```json
{
    "message": "User profile",
    "user": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "hashedPasswordHere",
        "__v": 0
    }
}
```

**Error Responses:**
- `401` - Authentication required
- `401` - Invalid token

### 4. Logout User
Clear the authentication token and log out the user.

**Endpoint:** `GET /logout`

**Headers:**
```
Content-Type: application/json
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Authentication:** Required (JWT token in cookie)

**Success Response (200):**
```json
{
    "message": "User logged out successfully"
}
```

**Error Responses:**
- `401` - Authentication required
- `401` - Invalid token

## User Model Schema

```javascript
{
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    }
}
```

## Error Handling

All error responses follow this format:
```json
{
    "message": "Error description"
}
```

## Usage Examples

### Register a new user:
```bash
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "securepassword"
  }'
```

### Login:
```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane.smith@example.com",
    "password": "securepassword"
  }' \
  -c cookies.txt
```

### Get profile:
```bash
curl -X GET http://localhost:3000/api/users/profile \
  -H "Content-Type: application/json" \
  -b cookies.txt
```

### Logout:
```bash
curl -X GET http://localhost:3000/api/users/logout \
  -H "Content-Type: application/json" \
  -b cookies.txt
```

## Notes

- Passwords are hashed before being stored in the database
- JWT tokens are stored in HTTP-only cookies for security
- All password fields in responses contain hashed passwords
- Email addresses are automatically converted to lowercase
- All string fields are trimmed of whitespace
