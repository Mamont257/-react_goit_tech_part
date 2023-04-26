import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Домашня сторінка нашого сервісу
        <span role="img" aria-label="Иконка приветствия">
          👨‍💻
        </span>
      </Title>
    </Container>
  );
}
