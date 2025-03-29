import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Logger, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from "@reactive-finances/dto";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Controller("transaction")
export class TransactionController {
  constructor(private readonly service: TransactionService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    try {
      return await this.service.create(createTransactionDto);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
        throw new BadRequestException("InvalidTransaction");
      }

      Logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}