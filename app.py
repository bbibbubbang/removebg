from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import Response
from rembg import remove

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/static", StaticFiles(directory="static"), name="static")

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB

@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    contents = await file.read()
    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(status_code=400, detail="File too large. Max size is 10MB.")

    try:
        result = remove(contents)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return Response(content=result, media_type="image/png")

@app.get("/")
async def root():
    """Serve the client-side demo."""
    with open("index.html", "r", encoding="utf-8") as f:
        return Response(content=f.read(), media_type="text/html")
