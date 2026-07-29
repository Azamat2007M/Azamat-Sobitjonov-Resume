import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "azamat2007pro";

  const query = `
    query userSessionProgress($username: String!) {
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
      allQuestionsCount {
        difficulty
        count
      }
    }
  `;

  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Referer": `https://leetcode.com/u/${username}/`,
        "Origin": "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 60 }, 
    });

    const data = await res.json();

    if (data.errors || !data.data || !data.data.matchedUser) {
      console.log("LeetCode GraphQL Error:", data.errors);
      return NextResponse.json(
        { error: "User not found or LeetCode API error", details: data.errors },
        { status: 404 }
      );
    }

    const matchedUser = data.data.matchedUser.submitStats.acSubmissionNum;
    const allQuestions = data.data.allQuestionsCount || [];

    const easySolved = matchedUser.find((d: any) => d.difficulty === "Easy")?.count || 0;
    const mediumSolved = matchedUser.find((d: any) => d.difficulty === "Medium")?.count || 0;
    const hardSolved = matchedUser.find((d: any) => d.difficulty === "Hard")?.count || 0;
    const totalSolved = matchedUser.find((d: any) => d.difficulty === "All")?.count || 0;

    const totalEasy = allQuestions.find((d: any) => d.difficulty === "Easy")?.count || 0;
    const totalMedium = allQuestions.find((d: any) => d.difficulty === "Medium")?.count || 0;
    const totalHard = allQuestions.find((d: any) => d.difficulty === "Hard")?.count || 0;
    const totalQuestions = allQuestions.find((d: any) => d.difficulty === "All")?.count || 0;

    return NextResponse.json({
      status: "success",
      username,
      totalSolved,
      totalQuestions,
      easySolved,
      totalEasy,
      mediumSolved,
      totalMedium,
      hardSolved,
      totalHard,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}