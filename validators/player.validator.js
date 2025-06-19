import z from 'zod';

export const PlayerValidator = z.object({
    name: z.string().min(1, 'Name is required'),
    age: z.coerce.number().int().min(0, 'Age must be a non-negative integer'),
})

