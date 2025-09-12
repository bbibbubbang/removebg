# Background Removal Web App

A simple web application that removes the background from uploaded images.
Images can be uploaded via file selection or **drag-and-drop**. Files larger
than **10 MB** are rejected. The interface shows a preview of the selected image
and lets you download the processed result.

By default, background removal happens directly in the browser using a
WebAssembly model. This means the site can be hosted on static hosts such as
GitHub Pages without any backend server.

## Running locally with FastAPI

If you still want to run the old server-based variant, install the
dependencies and start the FastAPI app:

```bash
pip install -r requirements.txt
uvicorn app:app --reload
```

Then open `http://localhost:8000` in your browser. The static files live in the
`static/` folder.
