import { z } from "zod";

export const inputValidation = z.object({
    username: z.string().min(1).max(30).email(),
    password: z.union([z.number().min(1).max(9999999999), z.string().min(1).max(20)])
});

export type inputParams = z.infer<typeof inputValidation>;