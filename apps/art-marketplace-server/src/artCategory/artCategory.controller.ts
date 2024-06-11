import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArtCategoryService } from "./artCategory.service";
import { ArtCategoryControllerBase } from "./base/artCategory.controller.base";

@swagger.ApiTags("artCategories")
@common.Controller("artCategories")
export class ArtCategoryController extends ArtCategoryControllerBase {
  constructor(protected readonly service: ArtCategoryService) {
    super(service);
  }
}
