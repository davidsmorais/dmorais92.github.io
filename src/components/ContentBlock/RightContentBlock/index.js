import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "Common/SvgIcon";
import Button from "Common/Button";
import { Title } from "Common";

import * as S from "./styles";

const RightBlock = ({ title, content, button, icon, t, id, subtitle, section }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" MinParaalign="middle" id={id}>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Slide left>
            <S.ContentWrapper hasSection={Boolean(section?.length)}>
              <S.TitleWrapper>
                <Title>{t(title)}</Title>
                <S.MinTitle>{t(subtitle)}</S.MinTitle>
                <S.Content>{t(content)}</S.Content>
              </S.TitleWrapper>
              <S.SectionWrapper>
                {section &&
                  typeof section === "object" &&
                  section.map((item, id) => {
                    return (
                      <S.Section key={id}>
                        <S.MinTitle>
                          {t(item.title)} {t(item.icon)}
                        </S.MinTitle>
                        <S.MinPara>{t(item.content)}</S.MinPara>
                      </S.Section>
                    );
                  })}
              </S.SectionWrapper>
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        type={item.type}
                        width="true"
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
        {icon && (
          <Col lg={11} md={11} sm={12} xs={24}>
            <Slide right>
              <SvgIcon
                src={icon}
                className="about-block-image"
                width="100%"
                height="100%"
              />
            </Slide>
          </Col>
        )}
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
