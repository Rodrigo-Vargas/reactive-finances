import { z } from "zod";

import { createZodDto } from "nestjs-zod/dto";

export const transactionSchema = z.object({

});

export class TransactionDto extends createZodDto(transactionSchema) { }