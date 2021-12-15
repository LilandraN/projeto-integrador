export type UserModel = {
  userId?: number;
  name: string;
  username: string;
  password: string;
  accessToken: string;
  post: string;
  userRole: { roleId: number; description: string };
};
