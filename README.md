# PlanNao

> Introducing Bangladesh's groundbreaking ed-tech advisory platform - 'All you need is mentor.' This innovative platform is revolutionizing the country's education landscape by connecting students with experienced mentors who provide personalized guidance and support. Whether you seek academic assistance, career advice, or skill development, 'All you need is mentor' offers a diverse network of qualified mentors to help you achieve your goals. With a user-friendly interface and a commitment to fostering a culture of learning, this platform aims to empower students and bridge the gap between traditional education and real-world success. Embrace the future of education with 'All you need is mentor' and unlock your full potential.

# Overview

With its modern design and intuitive layout, the Home Page welcomes users to an exciting world of personalized learning and mentorship.

![Home Page](https://raw.githubusercontent.com/devhasibulislam/plannao-clone/master/assets/readme/home_page.png)

# Features

- Total **15** Pages
  - Home `x1`
  - Working Procedure `x1`
  - Mentor `x3`
  - Mentor Detail `x1`
  - Auth `x3`
  - Dashboard `x6`
- Auth with **email** confirmation
- Update own profile
- Checkout & Purchase **modal**
- Advance **search filter** suggestions
- Image **validation** for preview, resolution & size
- **CRUD** operations on mentor `admin`
  - Create mentor
  - Read mentor/mentors
  - Update mentor
  - Delete mentor
- Delete any user from list `admin`
- Watch buyers `admin`
- Fully responsive for `PC`, `Laptop`, `Tablet` & `Mobile`

# Tech Stack

- Framework: `Next.JS`
- State Container: `Redux Toolkit`
- Styling: `Tailwind CSS`
- Forms: `React Hook Form`
- Icons: `Hero JSX Icons`
- Database: `MongoDB`
- ORM: `Mongoose`
- Linting: `ESLint`
- Formatter: `Prettier`
- Work Management: `Asana`

# Technologies

| Package Name    | Package Version |
| --------------- | --------------- |
| Redux Toolkit   | ^1.9.5          |
| Bcrypt JS       | ^2.4.3          |
| JWT             | ^9.0.1          |
| Mongoose        | ^7.4.1          |
| Multer          | ^1.4.5          |
| Nodemailer      | ^6.9.4          |
| React Hook From | ^7.45.2         |
| Tailwind CSS    | ^3.3.3          |
| Tailwind Form   | ^0.5.4          |

# Development

## Clone `repository`

```bash
git clone https://github.com/devhasibulislam/plannao-clone.git
cd plannao-clone
yarn
```

## Setup `.env`

```bash
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# Database Credentials
DB_NAME=
ATLAS_URI=

# User Token Credentials
TOKEN_SECRET=

# Email Sending Credentials
APP_SERVICE=
APP_EMAIL=
APP_PASSWORD=

# Cludinary Credentials
CLOUD_NAME=
API_KEY=
API_SECRET=
```

# Deployment

- [x] Vercel - [Click Here](https://plannao-clone.vercel.app)

## Drawbacks

### Vercel

- File should be static
- Only files in GitHub dir will be visible
- Reupload files not working but text only works perfectly

# Author

- Developer: [Hasibul Islam](https://www.linkedin.com/in/devhasibulislam)
- Designer: [Nipa Akter](https://www.linkedin.com/in/nipa-akter)
