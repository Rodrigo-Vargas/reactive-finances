import { z } from "zod";

import { createZodDto } from "nestjs-zod/dto";

export const transactionSchema = z.object({
    id: z.string(),
    description: z.string(),
    amount: z.string()
});

export class TransactionDto extends createZodDto(transactionSchema) { }