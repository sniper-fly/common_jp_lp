import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

export const authOptions = NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "email,public_profile,user_location",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // 初回ログイン時にアクセストークンを保存
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // セッションにアクセストークンと Facebook ID を追加
      session.accessToken = token.accessToken;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

// ====================
// サーバーサイドからセッションを取得
// ====================
export async function getServerAuthSession() {
  return await auth();
}
