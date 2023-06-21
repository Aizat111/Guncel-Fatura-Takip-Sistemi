export interface UserModel {
  id:           number;
  firstname:    string;
  lastname:     string;
  email:        string;
  password:     string;
  tc:           string;
  phone_number: string;
  address:      string;
  createdAt:    Date;
  updatedAt:    Date;
  roles:        Role[];
  subscription: any[];
}

export interface Role{
  id:          number;
  title:       string;
  value:       string;
  description: string;
  createdAt:   Date;
  updatedAt:   Date;
  UserRoles:   UserRoles;
}

export interface UserRoles {
  id:        number;
  roleId:    number;
  userId:    number;
  createdAt: Date;
  updatedAt: Date;
}