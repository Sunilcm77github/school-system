import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'admission-remote',
  exposes: {
    './Routes': 'apps/admission-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
