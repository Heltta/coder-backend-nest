import { Types } from 'mongoose';

export class CreateUserDto {
  readonly id: Types.ObjectId;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly homeAddres: string;
  readonly age: number;
  readonly password: string;
  readonly phone: string;
  readonly privilegesCategory: string;
  readonly photo: string;
}
