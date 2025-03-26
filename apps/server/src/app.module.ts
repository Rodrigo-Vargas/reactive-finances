import { Module } from "@nestjs/common";
import { ConfigModule } from "./config/config.module";
import { TransactionModule } from "./transaction/transaction.module";

@Module({
  imports: [
    // Core Modules
    ConfigModule,

    // Feature Modules
    TransactionModule
  ]
})
export class AppModule { }