export const company = {
  name: "Moonport Media LLC",
  brand: "Moonport Media",
  email: "business@moonportmedia.com",
  country: "Georgia",
  url: "https://moonportmedia.com",
  policyDate: "27 September 2026",
};

export const emailHref = (subject?: string) =>
  `mailto:${company.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
