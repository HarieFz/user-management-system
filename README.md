# 🧪 Front End Web Developer – Technical Test

This project is a technical test submission for the Front End Web Developer position at **PT Bullion Ecosystem International**. It includes three main pages: **Login**, **Register**, and **Admin Dashboard** with full API integration and validation.

---

## 📌 Features

### 🔐 Login Page

- [x] UI slicing based on given design
- [x] Form validation
  - Email: required & must be in valid format
  - Password: required & minimum 8 characters
- [x] API integration for login

### 📝 Register Page

- [x] UI slicing based on given design
- [x] Form validation
  - First Name, Last Name, Gender, DOB, Phone, Address, Photo: required
  - Email: required & must be in email format
  - Password: required, minimum 8 characters, contains capital, number, and alphabet
  - Confirm Password: required & must match password
  - Profile Photo: JPG/JPEG, max 5MB
- [x] API integration for registration

### 📊 Admin Dashboard

- [x] Slicing Dashboard layout
- [x] Display registered user list via API
- [x] Show profile photo
- [x] View and edit user detail via API
  - Get user detail
  - Update user info

---

## 🧪 Expectations Fulfilled

- ✅ Admin can log in using provided account
- ✅ Admin can register new users
- ✅ Admin can view the list of registered users
- ✅ Admin can view profile photos
- ✅ Admin can view and edit detailed user information

---

## 🛠 Tech Stack

### Frontend

- **React 19** – UI library
- **React Router v7** – for page navigation
- **React Hook Form + Zod** – form handling and schema validation
- **Tailwind CSS v4** – utility-first styling
- **React Icons** – icon set

### Data Handling & Utilities

- **Axios** – HTTP client for API calls
- **@tanstack/react-query** – API state and caching
- **Day.js** – date manipulation
- **CryptoJS** – data encryption
- **js-cookie** – handling browser cookies
- **React Paginate** – pagination UI component

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/technical-test-bullion.git
cd technical-test-bullion
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project

```bash
npm run dev
```
