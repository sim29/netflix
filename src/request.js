const api_key = "8562c99573f71513c73e7781f282f930";

const request = {
  Popular: `/discover/movie?sort_by=popularity.desc&api_key=${api_key}`,
  Latest: `/discover/movie?primary_release_year=2021&sort_by=vote_average.desc&api_key=${api_key}`,
};

export default request;
