"use client";

import {
  Container,
  Title,
  Button,
  Text,
  Image,
  Card,
  Group,
  Badge,
} from "@mantine/core";
import classes from "./landing.module.css";
import { Carousel } from "@mantine/carousel";

const slidesData = [
  {
    href: "https://mantine.dev/",
    src: "https://upload.wikimedia.org/wikipedia/id/4/4a/Oppenheimer_%28film%29.jpg",
    alt: "Oppenheimer",
  },
  {
    href: "https://mantine.dev/",
    src: "https://images-cdn.ubuy.co.id/634fa5a3884d9347417c7d33-movie-poster-action-fantasy-movie-shadow.jpg",
    alt: "Shadow",
  },
  {
    href: "https://mantine.dev/",
    src: "https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1_1600x.jpg?v=1694762527",
    alt: "The Manager",
  },
  {
    href: "https://mantine.dev/",
    src: "https://i.ebayimg.com/images/g/rTUAAOSwFaRkfzZ8/s-l1200.jpg",
    alt: "Poster",
  },
  {
    href: "https://mantine.dev/",
    src: "https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg",
    alt: "Star Wars: Rogue One",
  },
  {
    href: "https://mantine.dev/",
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
    alt: "Adventure",
  },
];

export default function Home() {
  const textShadow: string = "0 1px 5px #000";
  return (
    <div style={{ background: "#000" }}>
      <div
        className={classes.bg}
        style={{
          height: "calc(100vh - 62px)",
          boxShadow: "inset 0 0 10000px #000",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            padding: "0 100px",
          }}
        >
          <div
            style={{
              maxWidth: 800,
              color: "#FFF",
              padding: "0 0 100px",
            }}
          >
            <Title style={{ textShadow: textShadow }}>
              A fully featured React components library
            </Title>
            <Text size="xl" my="xl" style={{ textShadow: textShadow }}>
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <Button size="xl">Get started</Button>
          </div>
        </div>
      </div>
      <Container size="xl">
        <Carousel
          align="start"
          slideSize="15%"
          height={500}
          slideGap="md"
          withControls={false}
          loop
        >
          {slidesData.map((slide, index) => (
            <Carousel.Slide key={index}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section
                  component="a"
                  href={slide.href}
                  style={{ height: "300px", overflow: "hidden" }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Card.Section>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
