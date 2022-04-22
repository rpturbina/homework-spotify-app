import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import store from "./redux/store";

test("should render app properly", async () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  const main = screen.getByRole("main");

  const loginWithSpotifyButton = within(main).getByRole("button", {
    name: /login with spotify/i,
  });

  expect(loginWithSpotifyButton).toBeInTheDocument();
});
