import React from 'react';

// render will 'render' the About component
// cleanup will remove components from the DOM to prevent memory leaking
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  // First test
  it('renders', () => {
    render(<About />);
  })

  // Second test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
})