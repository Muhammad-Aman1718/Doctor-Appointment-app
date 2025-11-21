export type RootStackParamList = {
  Auth: { screen?: string };
  App: { screen?: string };
  Onboarding: { screen?: string };
  Home: undefined; // agar koi params nahi bhejne
  Login: undefined;
  Register: undefined;
  Profile: { userId: string }; // agar params bhejne ho
  Settings: undefined;
  Notification: undefined;
};

export type TabScreen = {
  Home: undefined;
  Profile: undefined;
  Chat: undefined;
  Appointment: undefined;
};
