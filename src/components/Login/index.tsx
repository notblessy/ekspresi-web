"use client";

import {
  Anchor,
  Button,
  Divider,
  Group,
  Modal,
  PasswordInput,
  TextInput,
  Text,
} from "@mantine/core";

type LoginProps = {
  opened: boolean;
  onClose: () => void;
};

export const Login = (props: LoginProps) => {
  return (
    <Modal
      opened={props.opened}
      onClose={props.onClose}
      title="Login"
      centered
      radius={0}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <TextInput radius={0} mb={10} label="Email" placeholder="Email" />
      <PasswordInput
        radius={0}
        mb={10}
        label="Password"
        placeholder="Password"
      />
      <Group justify="flex-end">
        <Anchor href="/forgot-password" style={{ fontSize: 12 }}>
          Forgot password?
        </Anchor>
      </Group>
      <Button radius={0} my={30} fullWidth>
        Login
      </Button>
      <Divider my="xs" label="Or" labelPosition="center" />
      <Group gap={2} justify="center" mb={10}>
        <Text style={{ fontSize: 12 }}>Not a member yet?</Text>
        <Anchor href="/register" style={{ fontSize: 12 }}>
          Register
        </Anchor>
      </Group>
    </Modal>
  );
};
