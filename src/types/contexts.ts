export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  passwword: string;
}

export interface AuthContextProps {
  singIn: (value: LoginRequest) => void;
  singUp: (value: RegisterRequest) => void;
  logout: () => void;
}
