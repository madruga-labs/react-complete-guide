import { useState } from "react";
import { TABS_CONTENTS, EXAMPLES } from "../../data";
import TabButton from "./TabButton";
import Section from "../Section";
import Tabs from "./Tabs";

export default function TabsButtons() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            {TABS_CONTENTS.map((tab, index) => {
              return (
                <TabButton
                  isSelected={selectedTopic === tab.anchor}
                  onClick={() => handleSelect(tab.anchor)}
                  key={index}
                >
                  {tab.title}
                </TabButton>
              );
            })}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
