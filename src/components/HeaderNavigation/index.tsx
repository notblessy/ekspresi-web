"use client";

import {
  Autocomplete,
  Group,
  Burger,
  rem,
  Text,
  Avatar,
  Anchor,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconSpaces } from "@tabler/icons-react";
import { Login } from "../Login";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function HeaderNavigation() {
  const [opened, { toggle }] = useDisclosure(false);
  const [openedLogin, { open, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      style={{ color: "#FFF", fontSize: 14 }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <header style={{ background: "#131313" }}>
      <div className="container w-[970px] mx-auto py-3">
        <Group justify="space-between">
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Group>
            <IconSpaces
              style={{ width: rem(24), height: rem(24) }}
              color="#f06418"
            />
            <Text size="lg" c="#f06418">
              EKSPRESI
            </Text>
          </Group>
          <Group>
            <Group justify="space-between" gap={10} visibleFrom="sm">
              {items}
            </Group>
            <Autocomplete
              placeholder="Search"
              leftSection={
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              data={[
                "React",
                "Angular",
                "Vue",
                "Next.js",
                "Riot.js",
                "Svelte",
                "Blitz.js",
              ]}
              visibleFrom="xs"
            />
            <Button radius={0} onClick={open}>
              Login
            </Button>
          </Group>
        </Group>
        <Login opened={openedLogin} onClose={close} />
      </div>
    </header>
  );
}
