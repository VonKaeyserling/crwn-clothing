import React from "react";
import { connect } from "react-redux";

import "./Collection.scss";

import { selectCollection } from "../../redux/shop/shopSelectors";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  collection: selectCollection(match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
