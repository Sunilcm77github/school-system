import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'student-remote',
  exposes: {
    './Routes': 'apps/student-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
