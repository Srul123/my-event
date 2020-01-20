import withRoot from './material-ui-modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from './material-ui-modules/components/Markdown';
import Typography from './material-ui-modules/components/Typography';
import AppAppBar from './material-ui-modules/views/AppAppBar';
import privacy from './material-ui-modules/views/privacy.md';
import AppFooter from './material-ui-modules/views/AppFooter';

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
