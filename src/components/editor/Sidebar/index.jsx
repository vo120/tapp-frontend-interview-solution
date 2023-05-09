import styled from "styled-components";
import { useState } from "react";
import { siteThemes } from "../../../constants/siteThemes";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";

// Component Styles

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const SideBarMenuRoot = styled.div`
  height: 15em;
  width: 15em;
  background-color: #fff;
  position: relative;
  top: 35%;
  right: 14rem;
  padding: 1.5em;
  border-radius: 1em;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.h3`
  font-size: 16px;
  font-weight: 700;
  padding: 0.5em 0;
`;

const SubHeader = styled.h6`
  font-size: 14px;
  font-weight: 500;
  padding: 0.5em 0;
`;

const ThemeMenuSelect = styled.div`
  width: 100%;
  height: 2.5em;
  border-radius: 0.5em;
  border: 1px solid #e1e1e1;
  position: relative;
  padding: 0.5em;
  margin-bottom: 0.5em;
  appearance: none;
  cursor: pointer;
`;
const ThemeOptionsContainer = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 10em;
  overflow: hidden;
  border-radius: 0.5em;
  border: 1px solid #e1e1e1;
`;
const ThemeOptionWrapper = styled.div`
  overflow-y: scroll;
  max-width: 100%;
  height: 100%;
  scrollbar-width: none;
  box-sizing: content-box;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 2px 5px;
`;

const ThemeOption = styled.div`
  padding: 1em;
  margin: 0.5em 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5em;
  list-style: none;
  width: 100%;
  height: 2.5em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  &:hover {
    border-radius: 0.5em;
    background-color: #f5f6f7;
  }
`;

/** Sidebar view of the Editor page */
function Sidebar(props) {
  const { handleThemeChange } = props;
  const themeOptions = Object.keys(siteThemes);
  // console.log("in theme options", themeOptions);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState(themeOptions[0]);

  const handleSelectedThemeChange = (theme) => {
    setSelectedTheme(theme);
    handleThemeChange(theme);
    setIsDropDownMenuOpen(false);
    localStorage.setItem("editorThemeColor", theme);
  };

  const selectedColors = [
    siteThemes[selectedTheme].primary,
    siteThemes[selectedTheme].secondary,
    siteThemes[selectedTheme].tertiary,
  ];

  // console.log("in selected theme colors obj", siteThemes[selectedTheme]);

  const selectedColorBackground = {
    backgroundColor: selectedColors[0],
    color: selectedColors[1],
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const inactiveStyle = {
    position: "relative",
    top: "50%",
    left: "1.5rem",
    fontSize: "3.5rem",
    borderRadius: "10%",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: selectedColors[1],
  };

  const iconStyle = {
    position: "relative",
    top: "50%",
    left: "1.5rem",
    fontSize: "3.5rem",
    borderRadius: "10%",
    cursor: "pointer",
    ...selectedColorBackground,
  };

  return (
    <Root>
      <StyleRoundedIcon
        style={isMenuOpen ? iconStyle : inactiveStyle}
        onClick={toggleMenu}
      ></StyleRoundedIcon>
      {isMenuOpen && (
        <SideBarMenuRoot>
          <Header>Site Styles</Header>
          <SubHeader>Theme</SubHeader>
          <ThemeMenuSelect
            onClick={() => {
              setIsDropDownMenuOpen(!isDropDownMenuOpen);
            }}
            style={selectedColorBackground}
          >
            {selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}
          </ThemeMenuSelect>

          {isDropDownMenuOpen && (
            <ThemeOptionsContainer>
              <ThemeOptionWrapper>
                {themeOptions.map((theme) => {
                  const colors = [
                    siteThemes[theme].primary,
                    siteThemes[theme].secondary,
                    siteThemes[theme].tertiary,
                  ];

                  const themeColors = colors.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: color,
                        borderRadius: "50%",
                        zIndex: 1,
                        display: "inline-flex",
                        padding: "0.5rem",
                      }}
                    ></div>
                  ));

                  return (
                    <>
                      <ThemeOption
                        key={theme}
                        onClick={() => {
                          handleThemeChange(theme);
                          handleSelectedThemeChange(theme);
                        }}
                      >
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                        {themeColors}
                      </ThemeOption>
                    </>
                  );
                })}
              </ThemeOptionWrapper>
            </ThemeOptionsContainer>
          )}
          {isDropDownMenuOpen ? null : (
            <>
              <SubHeader> Theme Colors </SubHeader>
              <div
                style={{
                  display: "inline-flex",
                  gap: "0.5rem",
                  width: "100%",
                }}
              >
                {selectedColors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: color,
                      borderRadius: "50%",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </SideBarMenuRoot>
      )}
    </Root>
  );
}

export default Sidebar;
