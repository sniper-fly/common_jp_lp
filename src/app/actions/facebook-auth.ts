"use server";

export async function exchangeCodeForToken(code: string) {
  const clientId = process.env.FACEBOOK_CLIENT_ID;
  const clientSecret = process.env.FACEBOOK_CLIENT_SECRET;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  try {
    const tokenResponse = await fetch(
      `https://graph.facebook.com/v23.0/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`
    );

    if (!tokenResponse.ok) {
      throw new Error(`Token exchange failed: ${tokenResponse.status}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const userResponse = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
    );

    if (!userResponse.ok) {
      throw new Error(`User info fetch failed: ${userResponse.status}`);
    }

    const userData = await userResponse.json();
    
    console.log("Facebook User Data:", userData);
    
    return { success: true, userData };
  } catch (error) {
    console.error("Facebook auth error:", error);
    return { success: false, error: String(error) };
  }
}