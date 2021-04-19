import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

import Header from '../../UI/Header.svelte'

test('shows proper name when rendered', () => {
  const { getByText } = render(Header, { name: 'Charlotte' })

  expect(getByText('Charlotte')).toBeInTheDocument();

});

test ('shows zeros as default header values if no values are provided', () => {
  const { getAllByRole } = render(Header);

  const levels = getAllByRole('cell');
  
  expect(levels.length).toBe(4);
  levels.forEach(el => expect(el.textContent).toMatch('0'));
});
