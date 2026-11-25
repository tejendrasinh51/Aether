import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders the AETHER introduction', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Move through sound.' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Create harmony. Find your calm.'),
    ).toBeInTheDocument();
  });
});
