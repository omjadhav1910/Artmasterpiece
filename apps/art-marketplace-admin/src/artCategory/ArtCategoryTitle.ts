import { ArtCategory as TArtCategory } from "../api/artCategory/ArtCategory";

export const ARTCATEGORY_TITLE_FIELD = "id";

export const ArtCategoryTitle = (record: TArtCategory): string => {
  return record.id?.toString() || String(record.id);
};
