import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'subject-remote',
  exposes: {
    './Routes': 'apps/subject-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
