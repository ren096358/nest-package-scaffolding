import { Inject, Injectable } from "@nestjs/common";
import { HelloWorldDto } from "./dto/hello-world.dto";

@Injectable()
export class HelloWorldService {
  constructor(
    @Inject("HELLOWORLD_OPTIONS")
    private options: HelloWorldDto
  ) {}

  printA(): string {
    return this.options.valueA;
  }

  printB(): string {
    return this.options.valueB;
  }
}
