import * as React from "react";
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import QA from "../client/src/components/qa/QA.jsx";

describe('QA', () => {
  it('renders QA component', () => {
    render(<QA productId={71697} />);

  });
})
