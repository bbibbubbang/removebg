const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const removeBtn = document.getElementById('remove-btn');
const preview = document.getElementById('preview');
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
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) {
        selectedFile = e.target.files[0];
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
    const formData = new FormData();
    formData.append('file', selectedFile);
    const response = await fetch('/remove-bg', {
        method: 'POST',
        body: formData
    });
    if (!response.ok) {
        alert('Error removing background');
        return;
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    preview.src = url;
    downloadLink.href = url;
});
