export const ROUTES = {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
} as const;

export type RouteKeys = keyof typeof ROUTES; 