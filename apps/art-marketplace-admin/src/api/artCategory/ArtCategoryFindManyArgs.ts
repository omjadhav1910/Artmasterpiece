import { ArtCategoryWhereInput } from "./ArtCategoryWhereInput";
import { ArtCategoryOrderByInput } from "./ArtCategoryOrderByInput";

export type ArtCategoryFindManyArgs = {
  where?: ArtCategoryWhereInput;
  orderBy?: Array<ArtCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
