"use client";

import { Container, Title, Button, Text, Image, Card } from "@mantine/core";
import classes from "./landing.module.css";
import { Carousel } from "@mantine/carousel";
import { Movie } from "@/components/Movie";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { SlideMovie } from "@/types/Movie";

const slidesData = [
  {
    href: "https://mantine.dev/",
    trailerURL:
      "https://stream-fastly.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8",
    src: "https://upload.wikimedia.org/wikipedia/id/4/4a/Oppenheimer_%28film%29.jpg",
    alt: "Oppenheimer",
    description:
      "A film by Christopher Nolan exploring the life of J. Robert Oppenheimer.",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
    tags: ["Biography", "Drama", "History"],
    releaseDate: "2023-07-21",
  },
  {
    href: "https://mantine.dev/",
    trailerURL: "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8",
    src: "https://images-cdn.ubuy.co.id/634fa5a3884d9347417c7d33-movie-poster-action-fantasy-movie-shadow.jpg",
    alt: "Shadow",
    description:
      "An action-packed fantasy film featuring epic battles and dark magic.",
    cast: ["John Doe", "Jane Smith", "Alice Johnson"],
    tags: ["Action", "Fantasy"],
    releaseDate: "2024-05-16",
  },
  {
    href: "https://mantine.dev/",
    trailerURL:
      "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
    src: "https://intheposter.com/cdn/shop/files/the-manager-in-the-poster-1_1600x.jpg?v=1694762527",
    alt: "The Manager",
    description:
      "A gripping drama about a corporate manager facing ethical dilemmas.",
    cast: ["Michael B. Jordan", "Viola Davis", "Donnie Yen"],
    tags: ["Drama", "Thriller"],
    releaseDate: "2024-02-10",
  },
  {
    href: "https://mantine.dev/",
    trailerURL:
      "http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",
    src: "https://i.ebayimg.com/images/g/rTUAAOSwFaRkfzZ8/s-l1200.jpg",
    alt: "Poster",
    description: "A classic movie poster showcasing timeless cinema.",
    cast: ["N/A"],
    tags: ["Classic", "Poster"],
    releaseDate: "N/A",
  },
  {
    href: "https://mantine.dev/",
    trailerURL:
      "https://stream-fastly.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8",
    src: "https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg",
    alt: "Star Wars: Rogue One",
    description:
      "A thrilling entry in the Star Wars saga focusing on the Rebel Alliance's mission to steal the Death Star plans.",
    cast: ["Felicity Jones", "Diego Luna", "Ben Mendelsohn"],
    tags: ["Sci-Fi", "Adventure", "Action"],
    releaseDate: "2016-12-16",
  },
  {
    href: "https://mantine.dev/",
    trailerURL:
      "https://stream-fastly.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8",
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
    alt: "Adventure",
    description:
      "An exhilarating adventure film with breathtaking landscapes and a quest for treasure.",
    cast: ["Tom Hardy", "Zendaya", "Chris Pratt"],
    tags: ["Adventure", "Action"],
    releaseDate: "2024-11-22",
  },
];

export default function Home() {
  const [movie, setMovie] = useState<SlideMovie | null>(null);
  const [openedMovie, { open: openMovie, close: closeMovie }] = useDisclosure();

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
              marginBottom: "100px",
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

            <Button radius={0} size="xl">
              Get started
            </Button>
          </div>
        </div>
      </div>
      <Container size="xl" mt={-80}>
        <Title
          order={2}
          c="#FFF"
          my={10}
          style={{ position: "relative", zIndex: 1 }}
        >
          Popular
        </Title>
        <Carousel
          align="start"
          slideSize="15%"
          height="320px"
          slideGap="md"
          withControls={false}
          loop
        >
          {slidesData.map((slide, index) => (
            <Carousel.Slide key={index}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section
                  component="a"
                  onClick={() => {
                    setMovie(slide);
                    openMovie();
                  }}
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
      <Container size="xl">
        <Title
          order={2}
          c="#FFF"
          my={10}
          style={{ position: "relative", zIndex: 1 }}
        >
          Continue Watching
        </Title>
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
                  onClick={() => {
                    setMovie(slide);
                    openMovie();
                  }}
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
      <Movie opened={openedMovie} onClose={closeMovie} data={movie} />
    </div>
  );
}
