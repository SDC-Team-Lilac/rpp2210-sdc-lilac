import React from 'react';
import ProductGallery from './ProductGallery.jsx';
import ProductSelected from './ProductSelected.jsx';
import ProductDetails from './ProductDetails.jsx';

const Overview = ( { productId, updateSelectedProduct } ) => {

  const testProduct = {
    "id": 71697,
    "campus": "hr-rpp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2022-05-11T19:38:15.373Z",
    "updated_at": "2022-05-11T19:38:15.373Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
    ]
  };

  const testSelectedStyle = {
    "style_id": 444218,
    "name": "Forest Green & Black",
    "original_price": "140.00",
    "sale_price": null,
    "default?": true,
    "photos": [
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        }
    ],
    "skus": {
        "2580526": {
            "quantity": 8,
            "size": "XS"
        },
        "2580527": {
            "quantity": 16,
            "size": "S"
        },
        "2580528": {
            "quantity": 17,
            "size": "M"
        },
        "2580529": {
            "quantity": 10,
            "size": "L"
        },
        "2580530": {
            "quantity": 15,
            "size": "XL"
        },
        "2580531": {
            "quantity": 4,
            "size": "XL"
        }
    }
  };

  const testProductStyleOptions = [
    {
      "style_id": 444218,
      "name": "Forest Green & Black",
      "skus": {
        "2580526": {
            "quantity": 8,
            "size": "XS"
        },
        "2580527": {
            "quantity": 16,
            "size": "S"
        },
        "2580528": {
            "quantity": 17,
            "size": "M"
        },
        "2580529": {
            "quantity": 10,
            "size": "L"
        },
        "2580530": {
            "quantity": 15,
            "size": "XL"
        },
        "2580531": {
            "quantity": 4,
            "size": "XL"
        }
      }
    }, {
      "style_id": 444219,
      "name": "Desert Brown & Tan",
      "skus": {
        "2580532": {
            "quantity": 8,
            "size": "XS"
        },
        "2580533": {
            "quantity": 16,
            "size": "S"
        },
        "2580534": {
            "quantity": 17,
            "size": "M"
        },
        "2580535": {
            "quantity": 10,
            "size": "L"
        },
        "2580536": {
            "quantity": 15,
            "size": "XL"
        },
        "2580537": {
            "quantity": 6,
            "size": "XXL"
        }
      }
    }, {
      "style_id": 444220,
      "name": "Ocean Blue & Grey",
      "skus": {
        "2580538": {
            "quantity": 8,
            "size": "XS"
        },
        "2580539": {
            "quantity": 16,
            "size": "S"
        },
        "2580540": {
            "quantity": 17,
            "size": "M"
        },
        "2580541": {
            "quantity": 10,
            "size": "L"
        },
        "2580542": {
            "quantity": 15,
            "size": "XL"
        },
        "2580543": {
            "quantity": 6,
            "size": "XXL"
        }
      }
    }
  ]

  return (
    <div id="overview">
      <h1>This is the Overview Component!</h1>
      <div id="overview_top">
        <ProductGallery productPhotos={testSelectedStyle.photos} productName={testProduct.name} styleName={testSelectedStyle.name}/>
        <ProductSelected product={testProduct} testProductStyle={testSelectedStyle} testProductStyleOptions={testProductStyleOptions} updateSelectedProduct={updateSelectedProduct} productId={productId}/>
      </div>
      <ProductDetails slogan={testProduct.slogan} description={testProduct.description} features={testProduct.features}/>
    </div>
  );
}

export default Overview;
