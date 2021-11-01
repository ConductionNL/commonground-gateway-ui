import React from 'react';
import Grid from '@mui/material/Grid';

import ActionMenu from 'components/common/actionmenu';
import { RestfulProvider } from "restful-react";

import Layout from 'components/common/layout';
import {setCookie} from "../components/utility/CookieHandler";
import {useRouter} from "next/router";
import PaperCard from "../components/common/paperCard";

const handleLogin = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    let url = new URL(window.location.href);

    if (url.searchParams.get('bsn')) {
      setCookie('bsn', url.searchParams.get('bsn'), 5);
    }

    if (url.searchParams.get('name')) {
      setCookie('name', url.searchParams.get('name'), 5);
      router.push('/user');
    }

  }
}

const Welcome = () => (
  <>
    <Layout title="Welkom op de gateway interface!" description="waar kan ik deze description zien">
      {
        handleLogin()
      }
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6}>
          <PaperCard
            title="Sources"
            description="View and edit sources here."
            link="/sources"
            linkText="View "
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <PaperCard
            title="Entities"
            description="Bekijk en wijzig objecten van uw gateway hier."
            link="/entities"
            linkText="Bekijken "
          />
        </Grid>
      </Grid>
    </Layout>
  </>
);

export default Welcome;

