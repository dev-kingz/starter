"use server";
import {z} from "zod";
import {signIn} from "@/auth";
import {loginSchema} from "@/schemas";

export async function SignIn(values: z.infer<typeof loginSchema>) {
  try {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      stayLoggedIn: values.stayLoggedIn,
      redirect: false,
    });

    return response;
  } catch (error) {
    throw new Error(error as any);
  }
}
