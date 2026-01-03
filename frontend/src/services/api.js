import axios from "axios";

// Create the Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api/v1", // Points to your Node.js backend
});

// Interceptor: Automatically adds the "Authorization: Bearer <token>" header
// to every outgoing request if a token exists in localStorage.
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// --- API Endpoints ---

// Auth
export const loginUser = (data) => API.post("/auth/login", data);
export const signupUser = (data) => API.post("/auth/signup", data);

// Roast
export const getRoast = (data) => API.post("/roast", data); // For generating the roast
export const getFeed = () => API.get("/roast/feed"); // For the ticker

// Chat (Boardroom)
export const startChat = (data) => API.post("/chat/start", data);
export const replyChat = (data) => API.post("/chat/reply", data);

export default API;
