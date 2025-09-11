# Background Removal Web App

A simple web application that removes the background from uploaded images. Images can be uploaded via file selection or
**drag-and-drop**. Files larger than **10 MB** are rejected. The interface shows a preview of the selected image and lets
you download the processed result.

## Setup

```bash
pip install -r requirements.txt
uvicorn app:app --reload
```

Open `http://localhost:8000` in your browser to use the app.

The API has CORS enabled, so the `/remove-bg` endpoint can be called from other
web applications hosted on different origins.
