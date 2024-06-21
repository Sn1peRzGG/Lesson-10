import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UsersService } from './users.service'
import { UserDto } from './user.dto'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	create(@Body() dto: UserDto) {
		return this.usersService.create(dto)
	}

	@Get()
	getAll() {
		return this.usersService.findAll()
	}

	@Get(':id')
	getById(@Param('id') id: string) {
		return this.usersService.findOne(+id)
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() dto: UserDto) {
		return this.usersService.update(+id, dto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.usersService.remove(+id)
	}
}
