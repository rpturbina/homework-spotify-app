import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import store from "./redux/store";

test("Should render login button with spotify", () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  const loginButton = screen.getByRole("button", {
    name: /login with spotify/i,
  });

  expect(loginButton).toBeVisible();
});
