import { APIError, betterAuth } from "better-auth";
import { emailOTP, jwt, openAPI, organization } from "better-auth/plugins";
import { Pool } from "pg";
import UserMiddleware from "./middleware/user";

export const auth = betterAuth({
  secret: "Dl8EDKjAD8B6uJciLHoU8SeP3OWKIJsj",
  baseURL: "http://localhost:4100",
  trustedOrigins: process.env.TRUSTED_ORIGIN
    ? process.env.TRUSTED_ORIGIN.split(";")
    : ["http://localhost:3100"],
  database: new Pool({
    connectionString:
      process.env.DB_CONNECTION ||
      "postgresql://postgres:sciadmin88@localhost:5432/auth-db",
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    openAPI({ path: "/api/auth/docs" }),
    jwt(),
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "sign-in") {
          // TODO: Send the OTP for sign in
        } else if (type === "email-verification") {
          // TODO: Send the OTP for email verification
        } else {
          // TODO: Send the OTP for password reset
        }
      },
    }),
    organization({
      allowUserToCreateOrganization: async (user) => {
        const allowed = await new UserMiddleware(user).permission(
          "organization",
          "create",
        );

        return allowed;
      },
    }),
  ],
});
