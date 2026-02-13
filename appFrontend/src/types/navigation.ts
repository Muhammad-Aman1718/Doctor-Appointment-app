export type RootStackParamList = {
  Auth: { screen?: string };
  App: { screen?: string };
  Onboarding: { screen?: string };
  Profile: { userId: string };
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Settings: undefined;
  Notification: undefined;
};

export type TabScreen = {
  Home: undefined;
  Profile: undefined;
  Chat: undefined;
  Appointment: undefined;
};
