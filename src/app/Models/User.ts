export interface User {
    id: number;
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    password: string | null;
    token: string | null;
    role: string | null;
    email: string | null;
}