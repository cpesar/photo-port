import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// const categories =[
//   { name: 'portraits', description: 'Portraits of people in my life' }
// ]
// const mockCurrentCategory = jest.fn();
// const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

// Create a snapshot test
describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Nav />);
  });

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });
});


// Create a test for emoji visibility
describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);

    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');

  });
});



// Create a test for link visibility
describe('links are visible', () => {
  it('inserts text into the links', () => {
    // Arrange
    const { getByTestId } = render(<Nav/>);
    // Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About Me');
  });
});
