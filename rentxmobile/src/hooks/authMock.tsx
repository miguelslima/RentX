import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
// import api from '../services/api';
// import AuthRoutes from '../routes';
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { Alert } from "react-native";

export interface User {
  id: string;
  nome: string;
  email: string;
  cep?: string;
  phone: string;
  password?: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  nome: string;
  email: string;
  password: string;
}

// interface ForgotCredentials {
//   email?: string;
//   token?: string;
//   password?: string;
// }

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  save(user: User): Promise<void>;
  // forgot(credentials: ForgotCredentials): Promise<void>;
  // forgotToken(credentials: ForgotCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  // Estado que armazena todos os usuários
  const [dataUsers, setDataUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user, users] = await AsyncStorage.multiGet([
        "@RentX:token",
        "@RentX:user",
        "@RentX:users",
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      if (users[1]) {
        setDataUsers(JSON.parse(users[1]));
      }

      setLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(
    async ({ email, password }) => {
      // const response = await api.post('/sessions', { email, password });

      // const { token, user } = response.data;

      const token = uuid();

      const userIndex = dataUsers.findIndex(
        (user) => user.email === email && user.password === password
      );

      const user = dataUsers[userIndex];
      console.log("user " + dataUsers);
      await AsyncStorage.multiSet([
        ["@RentX:token", token],
        ["@RentX:user", JSON.stringify(user)],
      ]);

      setData({ token, user });
    },
    [dataUsers]
  );

  const save = useCallback(
    async ({ id, nome, cep, email, phone }: User) => {
      const currentUser = await AsyncStorage.getItem("@RentX:user");

      const userIndex = dataUsers.findIndex((user) => user.id === id);

      if (!currentUser) {
        Alert.alert("Usuário não encontrado");
        console.log("Usuário não encontrado");
        return;
      }

      let user: User = JSON.parse(currentUser);

      user = {
        id: user.id,
        nome,
        cep,
        password: user.password,
        email,
        phone,
      };

      dataUsers[userIndex] = user;

      setDataUsers(dataUsers);
      setData({ token: data.token, user });
      await AsyncStorage.multiSet([
        ["@RentX:user", JSON.stringify(user)],
        ["@RentX:users", JSON.stringify(dataUsers)],
      ]);
    },
    [dataUsers, data]
  );

  const signUp = useCallback(
    async ({ nome, email, phone, password }) => {
      // const response = await api.post('/sessions', { email, password });

      // const { token, user } = response.data;

      const newUser: User = {
        id: uuid(),
        nome,
        phone,
        email,
        password,
      };

      await AsyncStorage.setItem(
        "@RentX:users",
        JSON.stringify([...dataUsers, newUser])
      );

      setDataUsers([...dataUsers, newUser]);
      console.log("user " + dataUsers);
    },
    [dataUsers]
  );

  // const forgot = useCallback(async ({ email }) => {
  //   const response = await api.post('forgot', { email });

  //   console.log(response);
  // }, []);

  // const forgotToken = useCallback(async ({ token }) => {
  //   // Verificar se esse { data: token } é passado como body
  //   // Entrei nos arquivos do Axios os metodos post e put utilizando ele pra enviar o Body
  //   const response = await api.get('forgot', { data: token });

  //   console.log(response);
  // }, []);

  // const forgotResetPassword = useCallback(async ({ password }) => {
  //   const response = await api.put('forgot', { password });

  //   console.log(response);
  // }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@RentX:token", "@RentX:user"]);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        save,
        signIn,
        signUp,
        // forgot,
        // forgotToken,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used with and AuthProvider");
  }

  return context;
}
