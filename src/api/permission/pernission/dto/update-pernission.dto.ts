import { PartialType } from '@nestjs/mapped-types';
import { CreatePernissionDto } from './create-pernission.dto';

export class UpdatePernissionDto extends PartialType(CreatePernissionDto) {}
