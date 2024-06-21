import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getPhotosByQuery = async (options) => {
  const {
    data: { results, total },
  } = await axios.get(`/search/photos`, {
    params: {
      client_id: "Y4AvoBTD8cjr-GpbkiE8Q1gNUA72Ree_CNU-oQGl48c",

      per_page: 15,

      orientation: "landscape",
      ...options,
    },
  });
  return { results: results, total };
};
