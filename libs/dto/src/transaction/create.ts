import { createZodDto } from "nestjs-zod/dto";
import { z } from "zod";

export const createTransactionSchema = z.object({
  description: z.string().min(1),
});

export class CreateTransactionDto extends createZodDto(createTransactionSchema) { }