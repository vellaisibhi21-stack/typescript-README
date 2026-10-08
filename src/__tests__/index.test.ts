import { greet } from '../index';

describe('[feat-1] Greeter', () => {
  it('returns a greeting with the given name', () => {
    expect(greet('LaneSync')).toBe('Hello, LaneSync!');
  });

  it('handles empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});
