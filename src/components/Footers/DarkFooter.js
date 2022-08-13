/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                target="_blank"
              >
                Advetfly impex
              </a>
            </li>
            <li>
              <a
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            target="_blank"
          >
            Advetfly
          </a>
          . Coded by{" "}
          <a
            target="_blank"
          >
            Advetfly impex
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
