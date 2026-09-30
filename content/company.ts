export const company = {
  name: "Moonport Media LLC",
  legalName: "Moonport Media LLC",
  legalForm: "Limited Liability Company (LLC)",
  brand: "Moonport Media",
  identificationCode: "405829974",
  registrationDate: "15 January 2026",
  registeringAuthority: "LEPL National Agency of Public Registry, Georgia",
  email: "business@moonportmedia.com",
  phone: "+90 539 110 11 89",
  hours: "Monday to Friday, 12:00–18:00 Georgia time (GMT+4)",
  responseTime: "We reply to messages within 3 business days.",
  country: "Georgia",
  url: "https://moonportmedia.com",
  policyDate: "30 September 2026",
};

export const emailHref = (subject?: string) =>
  `mailto:${company.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const phoneHref = () => `tel:${company.phone.replace(/[^+\d]/g, "")}`;
