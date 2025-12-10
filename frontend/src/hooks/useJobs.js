import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// API function
async function fetchJobsFromAPI(query) {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: query || "frontend developer in India",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const res = await axios.request(options);
  return res.data?.data || [];
}

// React Query hook
export function useJobs(query) {
  return useQuery({
    queryKey: ["jobs", query],
    queryFn: () => fetchJobsFromAPI(query),
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });
}
