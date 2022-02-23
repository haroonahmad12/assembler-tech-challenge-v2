import httpService from "../services/http/http.js";

const url = process.env.REACT_APP_CLOUDINARY_URL;
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

export function uploadResource(file, resourceType = "image") {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  return httpService.post(`${url}/${resourceType}/upload`, formData);
}
