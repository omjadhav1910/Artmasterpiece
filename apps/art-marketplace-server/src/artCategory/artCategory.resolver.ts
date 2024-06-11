import * as graphql from "@nestjs/graphql";
import { ArtCategoryResolverBase } from "./base/artCategory.resolver.base";
import { ArtCategory } from "./base/ArtCategory";
import { ArtCategoryService } from "./artCategory.service";

@graphql.Resolver(() => ArtCategory)
export class ArtCategoryResolver extends ArtCategoryResolverBase {
  constructor(protected readonly service: ArtCategoryService) {
    super(service);
  }
}
