import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("prompt not provided", { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("free trial limit reached", { status: 403 });
    }

    const response = await replicate.run(
      "afiaka87/tortoise-tts:e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71",
      {
        input: {
          text: prompt,
          voice_a: "geralt",
        },
      }
    );
    
    await increaseApiLimit();

    return NextResponse.json(response);
  } catch (error) {
    console.error("[SPEECH_ERROR]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
