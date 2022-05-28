import { render, screen } from "@testing-library/react";
import App from "../App";

describe('testando', () => {
  it('verificando as coisas', () => {
    render(<App/>)
    const text = screen.getByTestId('testando')
    expect(text).toBeInTheDocument();
  })
})