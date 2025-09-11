# Background Removal Web App

A simple web application that removes the background from uploaded images using a
FastAPI backend powered by the `rembg` library. Images can be uploaded via file
selection or **drag-and-drop**. Files larger than **10 MB** are rejected. The interface
shows a preview of the selected image and lets you download the processed result.

## Running the app

Install the dependencies and run the FastAPI app:

```bash
pip install -r requirements.txt
uvicorn app:app --reload
```

Then open `http://localhost:8000` in your browser.

The static files live in the `static/` folder and call the `/remove-bg`
endpoint to process images.
