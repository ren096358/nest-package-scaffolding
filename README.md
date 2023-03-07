# Description

This project is a scaffolding of nestjs package

# How to use

1. build package

```bash
npm install
npm run build
```

2. install package in nestjs project

```bash
npm i {PATH_TO_PACKAGE}
```

3. register our package’s module into nestjs main application module

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorldModule } from 'nest-package-scaffolding';

@Module({
  imports: [
    HelloWorldModule.register({
      valueA: 'aaa',
      valueB: 'bbb',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
