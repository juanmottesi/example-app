import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          href: "/auth",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          href: "/auth/search",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          href: "/auth/profile",
          header: () => false,
        }}
      />
    </Tabs>
  );
}
