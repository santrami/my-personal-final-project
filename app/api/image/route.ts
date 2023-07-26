import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import  {ChatCompletionRequestMessage, Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const instructionMessage : ChatCompletionRequestMessage = {
    role: "system",
    content: "Your name is Heraclitus. You have all capabilities of a philosopher and also all your own capabilities. You must answer in a philosophical way."
}

export async function POST(
    req: Request
){
    try {
        const {userId} = auth();
        const body = await req.json();
        const {prompt, amount=1, resolution= "512x512"} = body;

        if(!userId){
            return new NextResponse("unauthorized",{status:401})
        }

        if(!configuration.apiKey){
            return new NextResponse("OpenAi API Key not configured",{status:500})
        }

        if(!prompt){
            return new NextResponse("prompt is required",{status:400})
        }

        if(!prompt){
            return new NextResponse("amount is required",{status:400})
        }

        if(!resolution){
            return new NextResponse("resolution is required",{status:400})
        }

        const response = await openai.createImage({
            prompt,
            n: parseInt(amount,10),
            size: resolution
        });

        return NextResponse.json(response.data.data);

    } catch (error) {
        console.error("[IMAGE_ERROR]", error)
        return new NextResponse("internal error",{status:500})
    }
}   