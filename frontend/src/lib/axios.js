export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://yapster-backend-v8ax.onrender.com/api",  // <-- your live backend URL
  withCredentials: true,
});
