const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/walsam/image/upload';
const cloudinaryUploadPreset = 'w4rdqtby';

const uploadToCloud = (file) => {
  const imageFormData = new FormData();

  imageFormData.append('file', file);
  imageFormData.append('upload_preset', cloudinaryUploadPreset);

  fetch(cloudinaryUrl, {
    method: 'POST',
    body: imageFormData,
  })
    .then(response => response.json());
};

export default uploadToCloud;
