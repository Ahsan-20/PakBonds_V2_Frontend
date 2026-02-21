import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000,
    withCredentials: true, // Send httpOnly cookies with every request
    headers: {
        'Content-Type': 'application/json',
    },
});

// Silent token refresh queue
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve();
        }
    });
    failedQueue = [];
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (originalRequest.url === '/refresh') {
            if (
                typeof window !== 'undefined' &&
                !window.location.pathname.startsWith('/login') &&
                originalRequest.url !== '/me'
            ) {
                window.dispatchEvent(new Event('auth:unauthorized'));
            }
            return Promise.reject(error);
        }

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                }).then(() => {
                    return api(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                await axios.post(`${API_BASE_URL}/refresh`, {}, { withCredentials: true });
                processQueue(null);
                return api(originalRequest);
            } catch (_error) {
                processQueue(_error);
                if (
                    typeof window !== 'undefined' &&
                    !window.location.pathname.startsWith('/login') &&
                    originalRequest.url !== '/me'
                ) {
                    window.dispatchEvent(new Event('auth:unauthorized'));
                }
                return Promise.reject(_error);
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
);

export default api;
