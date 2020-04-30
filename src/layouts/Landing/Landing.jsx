import React from "react";
import { Section, Info, Banner } from "../../components";
import sec1 from "../../assets/resource/section-1.png";
import sec2 from "../../assets/resource/section-2.png";
import sec3 from "../../assets/resource/section-3.png";
import bgSection from "../../assets/resource/bg-section.png";
import "./landing.scss";

const Landing = () => (
  <div className="layout">
    <Section>
      <Banner
        image={sec1}
        titleKey={"landing.section.1.title"}
        subtitleKey={"landing.section.1.subtitle"}
      />
    </Section>
    <Section backgroundImage={bgSection}>
      <img className="section-image" src={sec2} alt="section-2" />
      <Info
        titleKey={"landing.section.2.title"}
        subtitleKey={"landing.section.2.subtitle"}
        featuresKey={[
          "landing.section.2.features.1",
          "landing.section.2.features.2",
          "landing.section.2.features.3",
          "landing.section.2.features.4",
          "landing.section.2.features.5",
          "landing.section.2.features.6",
          "landing.section.2.features.7",
          "landing.section.2.features.8",
          "landing.section.2.features.9",
          "landing.section.2.features.10",
          "landing.section.2.features.11",
        ]}
      />
    </Section>
    <Section>
      <Info
        titleKey={"landing.section.3.title"}
        subtitleKey={"landing.section.3.subtitle"}
        featuresKey={[
          "landing.section.3.features.1",
          "landing.section.3.features.2",
          "landing.section.3.features.3",
          "landing.section.3.features.4",
          "landing.section.3.features.5",
          "landing.section.3.features.6",
        ]}
      />
      <img className="section-image" src={sec3} alt="section-2" />
    </Section>
  </div>
);

export { Landing };
