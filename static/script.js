const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const removeBtn = document.getElementById('remove-btn');
const preview = document.getElementById('preview');
const inputPreview = document.getElementById('input-preview');
const downloadLink = document.getElementById('download-link');
let selectedFile = null;

dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('hover');
});

dropZone.addEventListener('dragleave', () => dropZone.classList.remove('hover'));

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('hover');
    if (e.dataTransfer.files.length) {
        selectedFile = e.dataTransfer.files[0];
        inputPreview.src = URL.createObjectURL(selectedFile);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) {
        selectedFile = e.target.files[0];
        inputPreview.src = URL.createObjectURL(selectedFile);
    }
});

removeBtn.addEventListener('click', async () => {
    if (!selectedFile) {
        alert('Please select an image file.');
        return;
    }
    if (selectedFile.size > 10 * 1024 * 1024) {
        alert('File too large. Max size is 10MB.');
        return;
    }
    try {
        const formData = new FormData();
        formData.append('file', selectedFile);
        // Use a relative URL so the request also works when the site is
        // hosted under a subdirectory (e.g. on GitHub Pages).
        const response = await fetch('remove-bg', {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        preview.src = url;
        downloadLink.href = url;
    } catch (err) {
        console.error(err);
        const message = err?.message || err;
        alert(`Error removing background: ${message}`);
    }
});
