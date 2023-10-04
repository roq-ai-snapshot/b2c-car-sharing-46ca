interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Manager'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage bookings', 'View car details', 'View company details', 'Edit personal information'],
  ownerAbilities: [
    'Manage company information',
    'Manage car fleet',
    'Manage bookings',
    'Manage operational activities',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/377208d2-e297-4858-ade6-8be339661cc1',
};
