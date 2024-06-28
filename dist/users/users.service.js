"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    handleError(error, message) {
        if (error instanceof common_1.NotFoundException) {
            throw error;
        }
        throw new common_1.InternalServerErrorException(message);
    }
    async findOne(id) {
        try {
            const user = await this.prisma.users.findUnique({
                where: { userId: id },
            });
            if (!user)
                throw new common_1.NotFoundException('User not found');
            return user;
        }
        catch (error) {
            this.handleError(error, 'An error occurred while fetching the user');
        }
    }
    async findAll() {
        try {
            return await this.prisma.users.findMany();
        }
        catch (error) {
            this.handleError(error, 'An error occurred while fetching users');
        }
    }
    async create(dto) {
        try {
            const users = await this.prisma.users.findMany();
            const userId = users.length > 0 ? users.length + 1 : 1;
            return await this.prisma.users.create({ data: { userId, ...dto } });
        }
        catch (error) {
            this.handleError(error, 'An error occurred while creating the user');
        }
    }
    async update(id, dto) {
        try {
            const user = await this.prisma.users.findUnique({
                where: { userId: id },
            });
            if (!user)
                throw new common_1.NotFoundException('User not found');
            return await this.prisma.users.update({
                where: { userId: id },
                data: dto,
            });
        }
        catch (error) {
            this.handleError(error, 'An error occurred while updating the user');
        }
    }
    async remove(id) {
        try {
            const user = await this.prisma.users.findUnique({
                where: { userId: id },
            });
            if (!user)
                throw new common_1.NotFoundException('User not found');
            return await this.prisma.users.delete({
                where: { userId: id },
            });
        }
        catch (error) {
            this.handleError(error, 'An error occurred while deleting the user');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map