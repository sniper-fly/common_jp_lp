"use server";

import { getServerAuthSession } from "@/auth";

export async function saveFacebookUser() {
  const session = await getServerAuthSession();

  if (!session || !session.accessToken) {
    throw new Error("Not authenticated or missing access token");
  }

  // Graph API でユーザー情報を取得
  const res = await fetch(
    `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${session.accessToken}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user data from Facebook");
  }

  const userData = await res.json();

  // DB 保存処理（モック）
  console.log("Saving user to DB:", {
    facebookId: userData.id,
    name: userData.name,
    email: userData.email,
    picture: userData.picture?.data?.url,
  });

  return userData;
}
