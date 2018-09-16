import React, { Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { ResultsList, SearchTextField } from "./book-search";
@inject("store")
@observer
class App extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Fragment>
        <Header />
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={2} style={{ padding: "1rem" }}>
              <SearchTextField
                onChange={this.updateSearchText}
                onEnter={store.search}
              />
            </Paper>
          </Grid>

          <ResultsList style={{ marginTop: "2rem" }} />
        </Grid>
      </Fragment>
    );
  }

  updateSearchText = event => {
    this.props.store.setTerm(event.target.value);
  };
}

const Header = () => {
  return (
    <Typography
      variant="title"
      color="inherit"
      style={{ marginBottom: 20, textAlign: "center" }}
    >
      Good Reader
    </Typography>
  );
};

export default App;
