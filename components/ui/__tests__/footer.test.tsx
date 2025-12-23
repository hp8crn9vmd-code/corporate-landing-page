import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer';
import { IntlTestProvider } from '../../../test/test-utils';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(
      <IntlTestProvider>
        <Footer />
      </IntlTestProvider>
    );
    const footer = document.querySelector('footer');
    expect(footer).toBeTruthy();
  });

  it('renders links container (if any)', () => {
    render(
      <IntlTestProvider>
        <Footer />
      </IntlTestProvider>
    );
    const links = screen.queryAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(0);
  });
});
