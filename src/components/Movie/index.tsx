"use client";

import { SlideMovie } from "@/types/Movie";
import {
  Group,
  Modal,
  Text,
  Image,
  Chip,
  Box,
  CloseButton,
  Button,
  Grid,
} from "@mantine/core";
import "@/components/EkspresiPlay";
import { EkspresiPlay } from "@/components/EkspresiPlay";
import { IconX } from "@tabler/icons-react";

type MovieProps = {
  data: SlideMovie | null;
  opened: boolean;
  onClose: () => void;
};

const getYear = (date: string): string => {
  const newDate = new Date(date);

  // Check if the date is invalid
  if (isNaN(newDate.getTime())) {
    return "";
  }

  return newDate.getFullYear().toString();
};

export const Movie = (props: MovieProps) => {
  const play = {
    fill: true,
    fluid: true,
    autoplay: true,
    controls: false,
    preload: "metadata",
    sources: [
      {
        src: props?.data?.trailerURL,
        type: "application/x-mpegURL",
      },
    ],
  };

  return (
    <Modal.Root
      size="55rem"
      opened={props.opened}
      onClose={props.onClose}
      centered
      radius={0}
    >
      <Modal.Overlay backgroundOpacity={0.55} blur={3} />
      <Modal.Content>
        <Box style={{ position: "relative" }}>
          <Button
            variant="subtle"
            radius={0}
            size="xs"
            onClick={props.onClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1000,
              padding: "1px 7px",
            }}
          >
            <IconX size={14} />
          </Button>
          <Box>
            <EkspresiPlay {...play} />
          </Box>
          <Box p={20}>
            <Group mb={10}>
              <Text c="dimmed">
                {getYear(props.data?.releaseDate ? props.data.releaseDate : "")}
              </Text>
              <Text>●</Text>
              <Group gap={3}>
                {props.data?.tags.map((tag) => (
                  <Chip key={tag} size="xs" color="orange" variant="outline">
                    {tag}
                  </Chip>
                ))}
              </Group>
            </Group>
            <Grid>
              <Grid.Col span={6}>
                <Text>{props.data?.description}</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Group justify="flex-end">
                  <Text c="dimmed" size="xs">
                    Cast:
                  </Text>
                  <Text size="xs">{props.data?.cast.join(", ")}</Text>
                </Group>
              </Grid.Col>
            </Grid>
            <Button mt={20} radius={0} fullWidth>
              Play
            </Button>
          </Box>
        </Box>
      </Modal.Content>
    </Modal.Root>
  );
};
