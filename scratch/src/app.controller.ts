import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/asdf")
  getRootRout() {
    return "Hi there!!!";
  };

  @Get("/bye")
  getByeThere() {
    return "bye there!";
  }
}