import React, { useContext } from 'react';
import { Store } from '../Store';
import { toggleFavAction } from '../actions/actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

const FavPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
};

export default FavPage;
