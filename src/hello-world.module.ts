import { Module, DynamicModule } from "@nestjs/common";
import { HelloWorldService } from "./hello-world.service";

@Module({})
export class HelloWorldModule {
  static register(): DynamicModule {
    return {
      module: HelloWorldModule,
      providers: [HelloWorldService],
      exports: [HelloWorldService],
    };
  }
}
