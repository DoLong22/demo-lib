export interface Settings {
  persona: Persona;
  branding: Branding;
  dashboard: Dashboard;
  presentation: Presentation;
}
export interface Dashboard {
  display_name: string; // The display name for this account. This is used on the Coral Dashboard to differentiate between accounts.
  timezone: string; // The timezone used in the Coral Dashboard for this account.
}
export interface Branding {
  icon: string; // (ID/URL of a file upload) An icon for the account. Must be square and at least 128px x 128px.
  logo: string; // (ID/URL of a file upload) A logo for the account that will be used in Checkout instead of the icon and without the account’s name next to it if provided. Must be at least 128px x 128px.
  primary_color: string; // A CSS hex color value representing the primary branding color for this account
  secondary_color: string; // A CSS hex color value representing the secondary branding color for this account
}
export interface Persona {
  bio: string;
  alias: string; // The at sign, @, is normally read aloud as "at" to represent user's account url path.
  avatar_thumb: string; // (ID/URL of a CDN file upload) an optimized thumbnail for the Persona's avatar. Must be square and at least 128px x 128px.
  avatar_origin: string; // (ID/URL of a CDN file upload) an optimized thumbnail for the Persona's avatar the Persona's name next to it if provided.
  cover_thumb: string;
  cover_origin: string;
}
export interface Presentation {
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
}