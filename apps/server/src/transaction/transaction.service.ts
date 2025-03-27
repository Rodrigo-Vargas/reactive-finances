import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class TransactionService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  findAll() {
    return this.prisma.transactions.findMany();
  }
}