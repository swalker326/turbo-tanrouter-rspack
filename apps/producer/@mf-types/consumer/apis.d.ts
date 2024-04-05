
    export type RemoteKeys = 'consumer/root';
    type PackageType<T> = T extends 'consumer/root' ? typeof import('consumer/root') :any;