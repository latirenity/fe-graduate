import { createGlobalStyle, css } from "styled-components";

export const styles = {
  icon: css`
    width: 54px;
    height: 54px;
    background-color: transparent;
    border: 3px solid ${({ theme }) => theme.colors.grey[1]};
    border-radius: 50%;
    padding: 8px;
    overflow: unset;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.blue[3]};
    fill: ${({ theme }) => theme.colors.grey[1]};
    transition: 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.grey[0]};
      fill: ${({ theme }) => theme.colors.grey[3]};
      border: 3px solid ${({ theme }) => theme.colors.grey[0]};
    }
  `,
  button: css`
    border: none;
    outline: none;
    width: 20%;
    background-color: ${({ theme }) => theme.colors.green[3]};
    color: ${({ theme }) => theme.colors.green[1]};
    padding: 10px;
    font-size: 22px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green[2]};
      color: ${({ theme }) => theme.colors.grey[0]};
    }
  `,
  input: css`
    border: none;
    outline: none;
    margin: 6px 0;
    padding: 10px 14px;
    font-size: 18px;
    font-weight: 100;
    background-color: ${({ theme }) => theme.colors.grey[2]};
    color: ${({ theme }) => theme.colors.grey[0]};
  `,
};

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		box-sizing: border-box;
		text-decoration: none;
	}

	body {
		background-image: url(https://store.cloudflare.steamstatic.com/public/images/v6/colored_body_top.png?v=2);
		background-size: cover;
		background-attachment: fixed;
		border-style: border-box;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}
`;
