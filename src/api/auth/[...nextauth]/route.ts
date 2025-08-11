import { handlers } from "@/auth";

// GET と POST 両方のエントリーポイントを NextAuth の handlers に委譲
export const { GET, POST } = handlers;
