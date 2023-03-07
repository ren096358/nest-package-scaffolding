import { Module, DynamicModule } from "@nestjs/common";
import { HelloWorldDto } from "./dto/hello-world.dto";
import { HelloWorldService } from "./hello-world.service";

@Module({})
export class HelloWorldModule {
  static register(options: HelloWorldDto): DynamicModule {
    return {
      module: HelloWorldModule,
      providers: [
        {
          provide: "HELLOWORLD_OPTIONS",
          useValue: options,
        },
        HelloWorldService,
      ],
      exports: [HelloWorldService],
    };
  }
}
