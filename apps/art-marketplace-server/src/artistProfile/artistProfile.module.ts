import { Module } from "@nestjs/common";
import { ArtistProfileModuleBase } from "./base/artistProfile.module.base";
import { ArtistProfileService } from "./artistProfile.service";
import { ArtistProfileController } from "./artistProfile.controller";
import { ArtistProfileResolver } from "./artistProfile.resolver";

@Module({
  imports: [ArtistProfileModuleBase],
  controllers: [ArtistProfileController],
  providers: [ArtistProfileService, ArtistProfileResolver],
  exports: [ArtistProfileService],
})
export class ArtistProfileModule {}
