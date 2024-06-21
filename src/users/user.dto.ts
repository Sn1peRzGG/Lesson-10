import { IsEmail, IsOptional, IsString } from 'class-validator'

export class UserDto {
	@IsEmail()
	email: string

	@IsString()
	@IsOptional()
	name?: string
}
