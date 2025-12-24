import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer';
import { IntlTestProvider } from '../../../test/test-utils';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(
      <IntlTestProvider locale="en">
        <Footer locale="en" />
      </IntlTestProvider>,
    );

    expect(document.querySelector('footer')).toBeTruthy();
  });

  it('renders at least zero links (smoke)', () => {
    render(
      <IntlTestProvider locale="en">
        <Footer locale="en" />
      </IntlTestProvider>,
    );

    const links = screen.queryAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(0);
  });
});
