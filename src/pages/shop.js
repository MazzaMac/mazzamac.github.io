import React from 'react';
import ArtWall from '../components/artwall';
import SEO from '../components/seo';
import Layout from '../components/layout';

function ShopPage({data, location}){
    const url = location.href ? location.href : '';

    return (
      <Layout
        currentPath={url}>
        <SEO title="Shop" />
        <h1>The Shop</h1>

        // <ArtWall type="product" />

      </Layout>
  )
}

export default ShopPage;
