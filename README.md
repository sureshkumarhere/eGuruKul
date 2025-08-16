# 🎓 eGuruKul

**eGuruKul** is a full-stack **Learning Management System (LMS)** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
It allows users to register, browse courses, enroll, track progress, while admins can manage courses, users, and content.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - Secure login/signup using JWT
  - Role-based access (Admin / User)

- 👨‍🎓 **Student Dashboard**
  - Enroll in courses
  - Track course progress
  - Manage profile

- 🎓 **Admin Dashboard**
  - Add, edit, and delete courses
  - Manage enrolled students
  - Publish/unpublish content

- 📚 **Courses & Lectures**
  - Video lectures
  - Course details page
  - Upload with Multer/Cloudinary

- 🎨 **Modern UI**
  - Built with React + Tailwind
  - Responsive for mobile and desktop

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Redux Toolkit 
- React Router
- Tailwind CSS / Shadcn UI

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- Multer + Cloudinary

---
## .env example
# Server Config
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# MongoDB
MONGO_URI=your_mongodb_connection_string

# Auth
SECRET_KEY=your_secret_key
JWT_EXPIRE=5d
COOKIE_EXPIRE=5

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>

# Nodemailer (Gmail example)
SMTP_SERVICE=gmail
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key



## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/sureshkumarhere/eGuruKul.git
cd eGuruKul

cd server
npm install
npm i nodemon
npm run dev


cd ..
cd client
npm install
npm run dev


