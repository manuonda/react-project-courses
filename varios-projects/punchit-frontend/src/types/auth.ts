export interface iAuth {
  name: string | null;
  jwt: string | null;
  auth?: boolean | false;
}

export const defaultState: iAuth = {
  name: null,
  jwt: null,
  auth: false,
};
