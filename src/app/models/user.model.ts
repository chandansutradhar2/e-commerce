export interface User {
  fullName: string;
  email: string;
  gender: string;
  password: string;
  mobileNo: string;
  dob: string;
  picUrl?: string;
  address?: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
  };
}
