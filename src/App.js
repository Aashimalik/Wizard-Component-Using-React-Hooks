import React, { Children, useState } from "react";
import "./styles.css";

const Wizard = ({ children }) => {
  const [activePage, setActiePage] = useState(0);
  const pages = Children.toArray(children);
  const currentPage = pages[activePage];

  const onPrevClick = () => {
    setActiePage((index) => index - 1);
  };

  const onNextClick = () => {
    setActiePage((index) => index + 1);
  };

  return (
    <div className="wizard">
      <div className="wizard_content">{currentPage}</div>
      <div className="wizard_buttons">
        {activePage > 0 ? (
          <button
            type="button"
            className="wizard_button_left"
            onClick={onPrevClick}
          >
            Prev
          </button>
        ) : null}
        {activePage < pages.length - 1 ? (
          <button
            type="button"
            className="wizard_button_right"
            onClick={onNextClick}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
};

const Page1 = () => <h1>Page 1</h1>;
const Page2 = () => <h1>Page 2</h1>;
const Page3 = () => <h1>Page 3</h1>;

export default function App() {
  return (
    <Wizard>
      <Page1 />
      <Page2 />
      <Page3 />
    </Wizard>
  );
}
