# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource      | Method | Endpoint                     | Description                    |
| ------------- | ------ | ---------------------------- | ------------------------------ |
| `suggestions` | GET    | /get-all-suggestions         | **\*\*\*\***\_\_\_**\*\*\*\*** |
| `suggestions` | GET    | /get-suggestions-by-category | **\*\*\*\***\_\_\_**\*\*\*\*** |
| `suggestions` | POST   | /add-one-suggestion          | **\*\*\*\***\_\_\_**\*\*\*\*** |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Returns an array of all suggestions stored in the database.

**Example Request URL:**

```
https://localhost:3000/get-all-suggestions
```

**Example Response:**

**This would be an array of objects**

```json
[
  {
    "id": 1,
    "title": "Add tags for solutions",
    "description": "Easier to search for solutions based on a specific stack",
    "category": "Enhancement"
  },
  {
    "id": 2,
    "title": "Allow image/video upload to feedback",
    "description": "Stay updated on comments and solutions other people post",
    "category": "Feature"
  }
]
```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Returns all suggestions that match a specific category.

**Example Request URL:**

```
http://localhost:3000/get-all-suggestions-by-category/Feature
```

**Example Response:**

**This would be an array of objects**

```json
[
  {
    "id": 2,
    "title": "Add a dark theme option",
    "description": "It would help people with light sensitivities and who prefer dark mode"
  },
  {
    "id": 3,
    "title": "Q&A within the challenge hubs",
    "description": "Challenge-specific Q&A would make for easy reference",
    "category": "Feature"
  }
]
```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Adds a new suggestion to the database and returns created suggestion.

**Example Request URL:**

```
http://localhost:3000/add-one-suggestion
```

**Example Request Body:**

**This would be an object**

```json
{
  "title": "Add keyboard shortcuts",
  "description": "Useful for users who prefer fast navigation",
  "category": "Feature"
}
```

**Example Response:**

**This would be an object**

```json
{
  "id": 7,
  "title": "Add keyboard shortcuts",
  "description": "Useful for users who prefer fast navigation",
  "category": "Feature"
}
```

---
