# Background Removal Web App

A simple web application that removes the background from uploaded images. Images can be uploaded via file selection or
**drag-and-drop**. Files larger than **10 MB** are rejected. The interface shows a preview of the selected image and lets
you download the processed result.

## Using the client-side demo

Open `index.html` directly in your browser (or host the repository with GitHub Pages).
The page bundles the [`@imgly/background-removal`](https://www.npmjs.com/package/@imgly/background-removal)
library and downloads its model data from Img.Ly's CDN at runtime. The supporting
CSS and JavaScript live in the `static/` folder so the same files work when
served from the optional FastAPI app.

## Running the API server (optional)

If you prefer a Python backend, install the dependencies and run the FastAPI app:

```bash
pip install -r requirements.txt
uvicorn app:app --reload
```

Then open `http://localhost:8000` in your browser.

The API has CORS enabled, so the `/remove-bg` endpoint can be called from other
web applications hosted on different origins.
