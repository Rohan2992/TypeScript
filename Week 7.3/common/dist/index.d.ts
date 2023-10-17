import { z } from "zod";
export declare const inputValidation: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodUnion<[z.ZodNumber, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string | number;
}, {
    username: string;
    password: string | number;
}>;
export type inputParams = z.infer<typeof inputValidation>;
