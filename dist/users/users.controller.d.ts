import { UsersService } from './users.service';
import { UserDto } from './user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: UserDto): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }>;
    getAll(): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }>;
    update(id: string, dto: UserDto): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        userId: number;
        email: string;
        name: string | null;
    }>;
}
