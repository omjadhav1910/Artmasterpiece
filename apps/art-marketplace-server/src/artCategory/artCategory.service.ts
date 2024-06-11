import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArtCategoryServiceBase } from "./base/artCategory.service.base";

@Injectable()
export class ArtCategoryService extends ArtCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
