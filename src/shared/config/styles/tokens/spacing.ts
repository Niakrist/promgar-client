export const spacingTokens = {
  spacingXs: "10px 15px",
  spacingSm: "10px 20px",
  spacingMd: "12px 20px",
  spacingLg: "12px 25px",
  spacingXl: "12px 30px",
  spacingXxl: "13px 35px",
} as const;

export type SpacingToken = keyof typeof spacingTokens;
