import { Module } from "@nestjs/common";
import { TransactionController } from "./transaction.controller";
import { TransactionService } from "./transaction.service";
import { PrismaModule } from "nestjs-prisma";

@Module({
    imports: [PrismaModule],
    controllers: [TransactionController],
    providers: [TransactionService]
})
export class TransactionModule {}