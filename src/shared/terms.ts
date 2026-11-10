// The Terms a user accepts today, and when they take effect for existing
// users. Users on any other version see the accept banner, so the next Terms
// update bumps both here in the change that ships on notice day.
export const CURRENT_TERMS_VERSION = "2026-11";
export const CURRENT_TERMS_EFFECTIVE_DATE = "November 13, 2026";

export const TERMS_URL =
  import.meta.env.VITE_BASED_TERMS_URL || "https://basedmkt.com/terms";
export const PRIVACY_URL =
  import.meta.env.VITE_BASED_PRIVACY_URL || "https://basedmkt.com/privacy";
