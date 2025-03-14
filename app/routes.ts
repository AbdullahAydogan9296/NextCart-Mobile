export const ROUTES = {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    HOME: '/',
} as const;

export type RouteKeys = keyof typeof ROUTES; 