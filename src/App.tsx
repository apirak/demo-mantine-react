import { SushiProvider, SS } from "@set/sushi-mantine-react/core";
import "@set/sushi-mantine-react/core/styles.css";
import {
  Container,
  Group,
  Button,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { SushiIcon } from "@set/sushi-mantine-react/icons";

export default function App() {
  return (
    <SushiProvider>
      <SS
        header={{ height: 60 }}
        padding="md"
      >
        <SS.Header p="xs">
          <Title order={2}>Sushi Mantine React Demo</Title>
        </SS.Header>
        <SS.Main>
          <Container size="lg" py="xl">
            <Stack align="center">
              <Title order={2}>Buttons Showcase</Title>

              <Group>
                <Button variant="filled">Filled</Button>
                <Button variant="light">Light</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="subtle">Subtle</Button>
              </Group>

              <Group>
                <Button size="xs">XS</Button>
                <Button size="sm">SM</Button>
                <Button size="md">MD</Button>
                <Button size="lg">LG</Button>
                <Button size="xl">XL</Button>
              </Group>

              <Group>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </Group>

              <Stack align="center" gap="xs">
                <Text size="sm" c="dimmed">
                  Icon rendered by SushiIcon from @set/sushi-mantine-react/icons
                </Text>
                Start
                <SushiIcon name="back_android" size={24} alt="Back Android" />
                End
              </Stack>

              <Stack align="center">
                <Text size="sm" c="dimmed">
                  Mix-and-match examples
                </Text>
                <Group>
                  <Button variant="filled" size="lg">Primary Large</Button>
                  <Button variant="outline" size="sm">Outline Small</Button>
                  <Button variant="light" size="md" disabled>Light Disabled</Button>
                </Group>
              </Stack>
            </Stack>
          </Container>
        </SS.Main>
      </SS>
    </SushiProvider>
  );
}