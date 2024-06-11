import { ArtistProfile as TArtistProfile } from "../api/artistProfile/ArtistProfile";

export const ARTISTPROFILE_TITLE_FIELD = "id";

export const ArtistProfileTitle = (record: TArtistProfile): string => {
  return record.id?.toString() || String(record.id);
};
