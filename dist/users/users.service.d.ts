import { PrismaService } from '../prisma.service';
import { UserDto } from './user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    private handleError;
    findOne(id: number): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }[]>;
    create(dto: UserDto): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }>;
    update(id: number, dto: UserDto): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }>;
    remove(id: number): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }>;
}
