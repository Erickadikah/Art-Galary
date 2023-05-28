import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Text,
  // Footer,
  Aside,
  MediaQuery,
  Burger,
  useMantineTheme,
  Stack,
  ColorSchemeProvider
} from '@mantine/core';
import { IconUser, IconHome2, IconSettings, IconLogout} from '@tabler/icons-react';
import BasicTabs from '../components/Tabs/MyTab';
import { Link} from 'react-router-dom';
import { ActionToggle } from '../components/LightDark';

const Landingpage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <ColorSchemeProvider>
  <AppShell
    styles={{
      main: {
        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    }}
    navbarOffsetBreakpoint="sm"
    asideOffsetBreakpoint="sm"
    navbar={
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <Navbar.Section>
        </Navbar.Section>
        <Navbar.Section>
          <Stack justify="center" spacing={50}>
          </Stack>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <Text component={Link} variant="link" to="/AddPost">
              Add Products
            </Text>
            <Text component={Link} variant="link" to="/UserPosts">
              My Products
            </Text>
            <Text component={Link} variant="link" to="/Landingpage">
              <IconHome2 />
              Home
            </Text>
            <Text style={{ gap: '10px' }} component={Link} variant="link" to="/Profile">
              <IconSettings />
              Settings
            </Text>
            <Text style={{ gap: '10px' }} component={Link} variant="link" to="/Profile">
              <IconUser />
              Profile
            </Text>
            <Text style={{ gap: '10px', top: '150px' }} component={Link} variant="link" to="/">
              <IconLogout stroke={1.5} marginRight={10} />
              Logout
            </Text>
            <ActionToggle />
          </div>
        </Navbar.Section>
      </Navbar>
    }
    aside={
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <p>Home</p>
        </Aside>
      </MediaQuery>
    }
    // footer={
    //   <Footer height={40} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} p="md">
        // Art Galary © {new Date().getFullYear()}
    //   </Footer>
    // }
    header={
      <Header height={{ base: 50, md: 70 }} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
        </div>
      </Header>
    }
  >
    <BasicTabs />
  </AppShell>
</ColorSchemeProvider>
  );
}

export default Landingpage;