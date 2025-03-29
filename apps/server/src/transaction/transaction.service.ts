import { Injectable } from "@nestjs/common";
import { CreateTransactionDto } from "@reactive-finances/dto";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class TransactionService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  findAll() {
    return this.prisma.transactions.findMany();
  }

  async create(createTransactionDto: CreateTransactionDto) {
    return this.prisma.transactions.create({
      data: {
        description: createTransactionDto.description,
        amount: 0,
        date: new Date(),
        type: "expense",
        createdAt: new Date()
      },
    });
  }
}