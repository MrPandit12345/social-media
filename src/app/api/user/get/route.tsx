import User from "@/lib/models/user_model";
import { connect } from "@/lib/mongodb/mongoose";
import { NextRequest } from "next/server";

export const POST = async (req : NextRequest) => {
    try {
        await connect();
        const data = await req.json()
        const user = await User.findOne({username:data.username});

        return new Response(JSON.stringify(user),{status:200})
    } catch (error) {
        console.log(error);
        return new Response('Failed to fetch user data',{status:500});
    }
};