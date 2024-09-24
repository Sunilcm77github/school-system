import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'lecturer-remote',
  exposes: {
    './Routes': 'apps/lecturer-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
