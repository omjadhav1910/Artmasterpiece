import * as graphql from "@nestjs/graphql";
import { ArtistProfileResolverBase } from "./base/artistProfile.resolver.base";
import { ArtistProfile } from "./base/ArtistProfile";
import { ArtistProfileService } from "./artistProfile.service";

@graphql.Resolver(() => ArtistProfile)
export class ArtistProfileResolver extends ArtistProfileResolverBase {
  constructor(protected readonly service: ArtistProfileService) {
    super(service);
  }
}
