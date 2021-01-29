export interface RouterModel {
  path: string;
  board: {
    path: string;
    posts: {
      path: string;
    };
    map: {
      path: string;
    };
  };
  profile: {
    path: string;
  };
  register: {
    path: string;
  };
  login: {
    path: string;
  };
  page_not_found: {
    path: string;
  };
}

export const APP_ROUTES: RouterModel = {
  path: '',
  board: {
    path: 'board',
    posts: {
      path: 'posts',
    },
    map: {
      path: 'map',
    },
  },
  profile: {
    path: 'profile',
  },
  register: {
    path: 'register',
  },
  login: {
    path: 'login',
  },
  page_not_found: {
    path: 'page-not-found',
  },
};
