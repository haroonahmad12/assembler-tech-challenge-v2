import httpService from "../services/http/http.js";

const url = process.env.REACT_APP_API_BASE_URL;

export const saveImageDb = (imageData, authToken) => {
  return httpService.post(
    `${url}/upload`,
    { imageUrl: imageData, views: 0 },
    {
      headers: { Authorization: `Bearer ${authToken}` },
    }
  );
};

export const getImages = (authToken) => {
  return httpService.get(`${url}/get`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
};
