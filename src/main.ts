import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
