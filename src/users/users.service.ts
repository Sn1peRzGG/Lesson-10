import {
	Injectable,
	InternalServerErrorException,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { UserDto } from './user.dto'

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async findOne(id: number) {
		try {
			const user = await this.prisma.users.findUnique({
				where: { userId: id },
			})

			if (!user) throw new NotFoundException('User not found')

			return user
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error
			}
			throw new InternalServerErrorException(
				'An error occurred while fetching the user'
			)
		}
	}

	async findAll() {
		try {
			return await this.prisma.users.findMany()
		} catch (error) {
			throw new InternalServerErrorException(
				'An error occurred while fetching users'
			)
		}
	}

	async create(dto: UserDto) {
		try {
			const users = await this.prisma.users.findMany()
			const userId = users.length > 0 ? users.length + 1 : 1

			return await this.prisma.users.create({ data: { userId, ...dto } })
		} catch (error) {
			throw new InternalServerErrorException(
				'An error occurred while creating the user'
			)
		}
	}

	async update(id: number, dto: UserDto) {
		try {
			const user = await this.prisma.users.findUnique({
				where: { userId: id },
			})

			if (!user) throw new NotFoundException('User not found')

			return await this.prisma.users.update({
				where: { userId: id },
				data: dto,
			})
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error
			}
			throw new InternalServerErrorException(
				'An error occurred while updating the user'
			)
		}
	}

	async remove(id: number) {
		try {
			const user = await this.prisma.users.findUnique({
				where: { userId: id },
			})

			if (!user) throw new NotFoundException('User not found')

			return await this.prisma.users.delete({
				where: { userId: id },
			})
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error
			}
			throw new InternalServerErrorException(
				'An error occurred while deleting the user'
			)
		}
	}
}
