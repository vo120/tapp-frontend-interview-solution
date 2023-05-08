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
  color: ${theme.colors.black[100]}; // Change to Secondary color
  margin-bottom: 12px;
`;

const SiteDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.black[80]}; // Change to Tertiary color
`;

const DocLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: ${theme.colors.black[100]}; // Change to Secondary color
  margin-top: 12px;
`;

/** Site preview for the Editor page */
function Site(props) {
  return (
    <Root>
      <SiteTitle>StyleAI Frontend Interview ⭐️</SiteTitle>
      <SiteDescription>
        Congratulations on making it to the coding interview for the frontend
        developer internship at StyleAI! In this task, you will be developing a
        'styles' menu in the sidebar of a website editor. This menu will allow
        users to change the theme of their site within the editor. This
        documentation aims to provide you with all the necessary information to
        complete the task successfully.
      </SiteDescription>
      <SiteDescription>
        This task is designed to test your ability to work with React
        components, manage state variables, and utilize local storage. We wish
        you the best of luck in completing this task and look forward to
        reviewing your work.
      </SiteDescription>
      <DocLink
        target="_blank"
        href="https://docs.google.com/document/d/1jdqVAkOswesPTY_hq5yH4JSotzFX15rNgfe832MS6sM/edit#"
      >
        Read Task Documentation
      </DocLink>
    </Root>
  );
}

export default Site;
