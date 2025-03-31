import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #111;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;

  a {
    color: #4fa3ff;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 15px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Cheloz Properties. All rights reserved.</p>
      <p>Website developed by <strong>Stephen Oyelabi</strong></p>
      <p>
        <a href="mailto:stephenoyelabi@gmail.com">Contact Developer</a>
      </p>
    </FooterContainer>
  );
}
