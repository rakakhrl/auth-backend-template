import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  secret: "Dl8EDKjAD8B6uJciLHoU8SeP3OWKIJsj",
  baseURL: "http://localhost:4100",
  trustedOrigins: ["http://localhost:3100"],
  database: new Pool({
    connectionString:
      process.env.DB_CONNECTION ||
      "postgresql://postgres:sciadmin88@localhost:5432/auth-db",
  }),
  emailAndPassword: {
    enabled: true,
  },
});
