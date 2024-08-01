import { Flex, Text } from "@mantine/core";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#242424",
        borderBottom: "1px solid #424242",
        display: "flex",
        alignItems: "center",
        padding: "15px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Flex direction="row" gap={15}>
        <Text c="white" size="lg" fw={800}>
          My Silly Season
        </Text>
        🏎️
      </Flex>
    </header>
  );
}
