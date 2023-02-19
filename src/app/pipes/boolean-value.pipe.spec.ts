import { BooleanValuePipe } from './boolean-value.pipe';

describe('BooleanValuePipe', () => {
  it('create an instance', () => {
    const pipe = new BooleanValuePipe();
    expect(pipe).toBeTruthy();
  });
});
