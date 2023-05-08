import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Root = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SiteTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.black[100]};
  margin-bottom: 12px;
`;

const SiteDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.black[80]};
`;

/** Site preview for the Editor page */
function Site(props) {
  return (
    <Root>
      <SiteTitle>StyleAI Frontend Interview ⭐️</SiteTitle>
      <SiteDescription>
        Welcome! Your task is to develop a 'styles' menu in the sidebar of this
        editor. The menu will allow the user to change the theme of their site
        (this container).
      </SiteDescription>
      <SiteDescription>
        This task is designed to take an experienced developer roughly 30-45
        minutes. However, because you may not be familiar with the structure of
        this repository and our coding practices, you may need more time. That
        is totally okay!
      </SiteDescription>
      <SiteDescription>
        You are free to use any standard internet resources like StackOverflow
        or the ReactJS documentation (with the exception of language models like
        ChatGPT), but please leave comments referencing where you got help from
        along the way.
      </SiteDescription>
      <SiteDescription>
        If you need any tips on getting started or get stuck along the way,
        please reach out to your interviewer.
      </SiteDescription>
    </Root>
  );
}

export default Site;
