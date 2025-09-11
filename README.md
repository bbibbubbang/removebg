# Background Removal Web App

A simple web application that removes the background from uploaded images. Images can be uploaded via file selection or
**drag-and-drop**. Files larger than **10 MB** are rejected. The interface shows a preview of the selected image and lets
you download the processed result.

## Using the client-side demo

Open `static/index.html` directly in your browser. The page uses the
[`@imgly/background-removal`](https://www.npmjs.com/package/@imgly/background-removal)
library to remove backgrounds **entirely in the browser** – no local server is
required.

## Running the API server (optional)

If you prefer a Python backend, install the dependencies and run the FastAPI app:

```bash
pip install -r requirements.txt
uvicorn app:app --reload
```

Then open `http://localhost:8000` in your browser.

The API has CORS enabled, so the `/remove-bg` endpoint can be called from other
web applications hosted on different origins.
