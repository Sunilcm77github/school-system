import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'class-remote',
  exposes: {
    './Routes': 'apps/class-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
