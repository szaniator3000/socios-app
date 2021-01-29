export interface User {
  id: number;
  familyName: string;
  givenName: string;
  login: string;
  password: string;
  nickName?: string;
  dateOfCreation: Date;
  role: Role;
  jwtToken: string;
  address: AddressInfo;
  friends: Friend[];
  posts: Post[];
}

export interface AddressInfo {
  id?: number;
  city: string;
  country: string;
  street?: string;
  houseNumber?: string;
  houseNumberExtension?: string;
}

export interface Post {
  id?: number;
  title: string;
  description: string;
  likes: Friend[];
}

export interface Friend {
  id?: number;
  familyName: string;
  givenName: string;
  image?: string;
}

export type Role = 'ADMIN' | 'USER';
