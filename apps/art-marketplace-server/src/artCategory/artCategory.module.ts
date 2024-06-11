import { Module } from "@nestjs/common";
import { ArtCategoryModuleBase } from "./base/artCategory.module.base";
import { ArtCategoryService } from "./artCategory.service";
import { ArtCategoryController } from "./artCategory.controller";
import { ArtCategoryResolver } from "./artCategory.resolver";

@Module({
  imports: [ArtCategoryModuleBase],
  controllers: [ArtCategoryController],
  providers: [ArtCategoryService, ArtCategoryResolver],
  exports: [ArtCategoryService],
})
export class ArtCategoryModule {}
