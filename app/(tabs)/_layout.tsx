import { Link, Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          headerRight: () => <Link href="modal">open</Link>,
        }}
      />
      <Tabs.Screen name="activities/index" />
      <Tabs.Screen name="notifications/index" />
      <Tabs.Screen name="profile/index" />
    </Tabs>
  );
};

export default TabsLayout;
