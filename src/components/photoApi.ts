import axios from "axios";
import { Photo } from "../types";
axios.defaults.baseURL = "https://api.unsplash.com";

interface PhotosApi {
  results: Photo[];
  total: number;
}

interface OptionsProps {
  query?: string;
  page?: number;
}

export const getPhotosByQuery = async (
  options: OptionsProps
): Promise<PhotosApi> => {
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
