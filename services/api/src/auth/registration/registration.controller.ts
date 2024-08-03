import {Body, Controller, Get, Post} from "@nestjs/common";
import {CreateUserDto} from "./dto";
import {RegistrationService} from "./registration.service";

@Controller("/auth/registration")
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post("register")
  register(@Body() createUserDto: CreateUserDto) {
    return this.registrationService.register(createUserDto);
  }
}
