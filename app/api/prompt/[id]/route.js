import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET the Prompt by ID

export const GET = async(request, { params }) =>{
    try{
        await connectToDB();
        const prompt = await Prompt.findById(params.id);
        if(!prompt){
            return new Response("Prompt not found", {
                status: 404,
            })
        }

        return new Response(JSON.stringify(prompt), {
            status: 200
        })

    }catch(error){
        return new Response("Failed to fetch Prompt",{
            status: 500,
        })
    }
}

//Edit the Specific Prompt by ID
export const PATCH = async(request, { params })=>{
    const { prompt, tag } = await request.json();
    try{
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id);
        if(!existingPrompt){
            return new Response("Prompt not Found", {
                status: 404,
            })
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {
            status: 200,
        })


    }catch(error){
        return new Response("Failed to Complete your Request!", {
            status: 500,
        })
    }
}

//Delete a specific Prompt
export const DELETE = async(request, { params }) =>{
    try {
        await connectToDB();
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted Successfully", {
            status: 200,
        })
    } catch (error) {
        return new Response("Failed to Delete the Prompt", {
            status: 500,
        })
    }
}
