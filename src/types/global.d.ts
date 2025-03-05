export {};

export type UserRoles = "super_admin" | "admin" | "user";

declare global {
  interface CustomJwtSessionClaims {
    role?: UserRoles;
  }
}
