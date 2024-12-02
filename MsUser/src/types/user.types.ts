  export interface UserType {
    id: string;
    username: string;
    email: string;
  }

  export interface UserDataType  extends UserType{
    password: string;
  }