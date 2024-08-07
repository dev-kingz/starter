"use server";
import {z} from "zod";
import {signupSchema} from "@/schemas/dto";
import {api} from "@/config/axios.config";
import {userSchema} from "@/schemas/models";
import axios from "axios";

export async function Signup(values: z.infer<typeof signupSchema>) {
  try {
    const {data} = await api.post("/auth/registration/register", values);

    const user = await userSchema.parseAsync(data);

    return {user};
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        const {message} = error.response.data;
        return {error: message};
      } else {
        console.error(error.message);
        return {error: "Failed to signup!"};
      }
    } else {
      console.error(error);
    }
  }
}
